import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/hero.svg"
          alt="DeFi.vn"
          width={100}
          height={30}
          className="dark:invert"
          priority
        />
      ),
    },
  };
}
