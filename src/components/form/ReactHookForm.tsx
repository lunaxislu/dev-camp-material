import { register } from "module";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormFields {
  email: string;
  password: string;
}
const ReactHookForm = () => {
  const form = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  console.log(form.register);
  return (
    <form
      className="flex flex-col p-10 gap-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <input
        {...form.register("email", {
          required: "email is required",
          //     pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
          validate: (value) => {
            if (!value.includes("@")) {
              return "Please into The @";
            }
            return true; // validate는
          },
        })}
        className="border-solid border-black border-2 pl-4"
        type="text"
        placeholder="Email@naver.com"
      />
      {form.formState.errors.email && (
        <div>{`${form.formState.errors.email.message} ;;`}</div>
      )}
      <input
        {...form.register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "must Have at least 8",
          },
        })}
        className="border-solid border-black border-2 pl-4"
        type="text"
        placeholder="lte 8"
      />
      {form.formState.errors.password && (
        <div>{`${form.formState.errors.password.message} ;;`}</div>
      )}
      <button className="border-solid border-black py-4">submit</button>
    </form>
  );
};

export default ReactHookForm;
