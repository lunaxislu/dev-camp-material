import Image from "next/image";
import { Inter } from "next/font/google";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GeneralForm from "@/components/form/GeneralForm";
import ReactHookForm from "@/components/form/ReactHookForm";
const inter = Inter({ subsets: ["latin"] });
//  twmerge 를 이해하기 위한 예시 코드
// function MyGenericInput(props) {
//   const className = twMerge(`text-red-400 text-blue-400`);
//   return (
//     <button {...props} className={className}>
//       버튼
//     </button>
//   );
// }
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const onSubmit = (value: z.infer<typeof formSchema>) => {
  console.log(value);
};
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <main className={` ${inter.className}`}>
      {/* <GeneralForm /> */}
      <ReactHookForm />
    </main>
  );
}
