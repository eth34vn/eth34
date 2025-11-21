import Link from "next/link";
import { posts } from "@/data/posts";
import YoutubeIframe from "@/components/youtube-iframe";
import VideoList from "@/components/video-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { latestVideo } from "@/data/videos";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-6">
        <h1 className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lời ngỏ
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hoà nhập tiếng nói 34 tỉnh thành Việt Nam với Ethereum. {" "}
          <Link
            href="/loi-ngo"
            className="inline-block underline underline-offset-4 text-blue-500 dark:text-blue-400"
          >
            Đọc thêm
          </Link>
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Định nghĩa
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Định nghĩa")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Các Layer 2
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Các Layer 2")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
        {/* <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Ứng dụng
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Ứng dụng")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div> */}
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Hướng dẫn
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Hướng dẫn")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Văn bản
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Văn bản")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Ý kiến
        </h2>
        <div className="flex flex-col gap-2">
          {posts
            .find((post) => post.section === "Ý kiến")
            ?.posts.map((post) => (
              <div key={post.id} className="flex flex-row items-center gap-2">
                <h3 className="text-sm font-semibold bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  {post.id}
                </h3>
                <Link
                  className="font-medium underline underline-offset-4 text-blue-500 dark:text-blue-400 w-fit"
                  href={post.url}
                >
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          YouTube
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Đăng ký{" "}
          <a
            href="https://www.youtube.com/@eth34vn"
            target="_blank"
            className="inline-block underline underline-offset-4 text-blue-500 dark:text-blue-400"
          >
            kênh ETH34
          </a>{" "}
          để theo dõi những câu chuyện về Ethereum tại Việt Nam và thế giới. Nhiều
          chuỗi video mới sẽ được thêm vào trong thời gian tới. Thỉnh thoảng sẽ
          có livestream cho mọi người tương tác trực tiếp.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Tiêu điểm
        </h2>
        <YoutubeIframe
          src={latestVideo.src}
          title={latestVideo.title}
        />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Danh sách
        </h2>
        <VideoList />
        <Button
          asChild
          className="flex flex-row gap-2 items-center bg-[#FF0000] text-white w-fit hover:bg-[#FF0000]/80"
        >
          <a target="_blank" href="https://www.youtube.com/@eth34vn">
            <Image
              src="/youtube-white.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
            Xem thêm trên YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
