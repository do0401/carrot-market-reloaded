"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  // Server action 방식이 아닌 route handler 방식의 api 호출 예시
  // const onClick = async () => {
  //   const response = await fetch("/www/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: "nico",
  //       password: "1234",
  //     }),
  //   });
  //   console.log(await response.json());
  // };
  const [state, action] = useFormState(handleForm, { potato: 1 } as any);
  // useFormState(action, initialState, permalink?)
  // 컴포넌트 최상위 레벨에서 useFormState를 호출하여 폼 액션이 실행될 때 업데이트되는 컴포넌트 state를 생성합니다.
  //
  //     useFormState는 두 개의 값이 담긴 배열을 반환합니다.
  // - state: 첫 번째 렌더링에서는 initialState와 일치합니다. 액션이 실행된 이후에는 액션에서 반환된 값과 일치합니다.
  // -formAction: form 컴포넌트의 action prop에 전달하거나 폼 내부 button 컴포넌트의 formAction prop에 전달할 수 있는 새로운 액션입니다.
  //
  // *** 주의 사항 ***
  // useFormState에 전달한 함수는 첫 번째 인수로 이전 혹은 초기 state를 추가로 받습니다.
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
