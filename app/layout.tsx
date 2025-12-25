import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from "next";
import Script from "next/script";
// Vietnamese font
import { Be_Vietnam_Pro } from "next/font/google";

// initialize Vietnamese font
const fontVietnamese = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ETH34",
  description: "Bách khoa toàn thư về Ethereum",
  metadataBase: new URL("https://www.eth34.vn"),
  openGraph: {
    title: "ETH34",
    description: "Bách khoa toàn thư về Ethereum",
    url: "https://www.eth34.vn",
    siteName: "ETH34",
    images: [
      {
        url: "/eth34vn-tbn.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETH34",
    description: "Bách khoa toàn thư về Ethereum",
    creator: "@eth34vn",
    images: ["/eth34vn-tbn.png"],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${fontVietnamese.className} antialiased`} suppressHydrationWarning>
      <Script
        defer
        src="https://analytics.zxstim.com/script.js"
        data-website-id="626fe135-90aa-480c-bdfe-f6f95df981ee"
      />
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
