import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

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
    creator: "@zxstim",
    images: ["/eth34vn-tbn.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVietnamese.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
