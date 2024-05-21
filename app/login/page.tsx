import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

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
  // Server action 방식
  async function handleForm(formData: FormData) {
    // use server: 서버에서만 실행한다는 의미
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("logged in!");
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
