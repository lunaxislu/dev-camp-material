import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const ReactHookForm = () => {
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    const { email, password } = data;
  };

  return (
    <form
      className="flex flex-col p-10 gap-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <input
        {...form.register("email")}
        className="border-solid border-black border-2 pl-4"
        type="text"
        placeholder="Email@naver.com"
      />
      {form.formState.errors.email && (
        <div>{`${form.formState.errors.email.message}`}</div>
      )}
      <input
        {...form.register("password")}
        className="border-solid border-black border-2 pl-4"
        type="text"
        placeholder="lte 8"
      />
      {form.formState.errors.password && (
        <div>{`${form.formState.errors.password.message}`}</div>
      )}
      <button className="border-solid border-black py-4">submit</button>
    </form>
  );
};

export default ReactHookForm;
