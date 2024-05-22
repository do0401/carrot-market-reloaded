"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  // useFormStatus 훅은 server에서는 실행할 수 없음
  // 그래서 최상단 use client 넣음
  // 그리고 form 의 자식 요소에서 사용해야 함
  const { pending } = useFormStatus();
  // useFormStatus()
  // useFormStatus Hook은 마지막 폼 제출의 상태 정보를 제공합니다.
  //
  // useFormStatus는 동일한 컴포넌트에서 렌더링한 form에 대한 상태 정보를 반환하지 않습니다.
  //
  // useFormStatus Hook은 상위 form에 대한 정보만 반환합니다. Hook을 호출하는 동일한 컴포넌트나 자식 컴포넌트에서 렌더링한 form의 상태 정보는 반환하지 않습니다.
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
