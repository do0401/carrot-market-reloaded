// route.ts 라는 파일을 생성하면 NextJS에게 이 파일이 API route 라고 알려주는 것임

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return Response.json(data);
}
