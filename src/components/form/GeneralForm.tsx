import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const GeneralForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    if (!email.includes("@"))
      return setErrors({ ...errors, email: "이메일 똑디 입력해주쇼" });

    if (password.length < 8)
      return setErrors({ ...errors, password: "비번은 8자리 이상으로 하자" });

    console.log("회원가입이 완료 되었습니다.");
  };

  return (
    <div className="flex justify-center my-48">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>General Form</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col p-10 gap-4" onSubmit={handleSubmit}>
            <input
              className="border-solid border-black border-2 pl-4"
              type="text"
              placeholder="Email@naver.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="text-red-500">형식 제대로</div>}
            <input
              className="border-solid border-black border-2 pl-4"
              type="text"
              placeholder="lte 8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="text-red-500">형식 제대로</div>}
            <button className="border-solid border-black py-4">submit</button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralForm;
