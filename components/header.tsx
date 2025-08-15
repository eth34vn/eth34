import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/eth34vn-full.svg" alt="ETH34.vn full logo" width={100} height={100} />
        <Link href="/">Xin chào</Link>
      </div>
      <Button>
        Tới FB
      </Button>
    </div>
  );
}