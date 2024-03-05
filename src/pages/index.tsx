import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Button type="submit" variant={"destructive"}>
        버튼
      </Button>
    </main>
  );
}
