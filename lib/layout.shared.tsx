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
    links: [
      {
        type: 'icon',
        icon: <Image src="/facebook.svg" alt="Facebook" className="dark:invert" width={20} height={20} />,
        text: 'Facebook',
        url: 'https://www.facebook.com/defivn',
        // secondary items will be displayed differently on navbar
        secondary: true,

      },
      {
        type: 'icon',
        icon: <Image src="/youtube.svg" alt="Youtube" className="dark:invert" width={20} height={20} />,
        text: 'Youtube',
        url: 'https://www.youtube.com/@defivn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/x.svg" alt="X" className="dark:invert" width={20} height={20} />,
        text: 'X',
        url: 'https://x.com/defivnx',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/github.svg" alt="Github" className="dark:invert" width={20} height={20} />,
        text: 'Github',
        url: 'https://github.com/defivn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
    ],
  };
}
