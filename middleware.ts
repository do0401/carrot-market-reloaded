import { NextRequest, NextResponse } from "next/server";
import getSession from "@/lib/session";

interface Routes {
  [key: string]: boolean;
}

// 인증되지 않은 user가 갈 수 있는 URL을 저장
const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  // middleware 는 edge runtime 에서 실행됨
  // edge runtime 은 제한된 버전의 node.js 로 생각할 수 있음(node.js API 경량 버전)
  // node.js 에서 실행될 수 있는 몇몇 코드는 동일하게 동작하지만, 그렇지 않은 코드도 있음
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}

export const config = {
  // middleware 가 실행될 경로
  // 또는 실행하기 싫은 경로 외 경로
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
