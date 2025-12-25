import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { BookIcon, MessageCircleReply } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/eth34vn-full.svg"
          alt="ETH34"
          width={100}
          height={30}
          className="dark:invert"
          priority
        />
      ),
    },
    links: [
      {
        icon: <BookIcon />,
        text: 'Tài liệu',
        url: '/tai-lieu',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <MessageCircleReply />,
        text: 'Bình luận',
        url: '/tai-lieu/binh-luan',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        type: 'icon',
        icon: <Image src="/facebook.svg" alt="Facebook" className="dark:invert" width={20} height={20} />,
        text: 'Facebook',
        url: 'https://www.facebook.com/eth34vn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/youtube.svg" alt="Youtube" className="dark:invert" width={20} height={20} />,
        text: 'Youtube',
        url: 'https://www.youtube.com/@eth34vn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/x.svg" alt="X" className="dark:invert" width={20} height={20} />,
        text: 'X',
        url: 'https://x.com/eth34vn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
      {
        type: 'icon',
        icon: <Image src="/github.svg" alt="Github" className="dark:invert" width={20} height={20} />,
        text: 'Github',
        url: 'https://github.com/eth34vn',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
    ],
  };
}
