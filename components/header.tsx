import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <Link href="/">
          <Image
            src="/eth34vn-full.svg"
            alt="ETHVN full logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Button
        asChild
        className="bg-blue-500 text-white hover:bg-blue-600 w-fit"
      >
        <a
          className="flex flex-row gap-2 items-center"
          href="https://www.facebook.com/eth34vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/facebook.svg" alt="facebook" width={20} height={20} />
          Facebook ETH34
        </a>
      </Button>
    </div>
  );
}
