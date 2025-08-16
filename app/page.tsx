import Image from "next/image";
import { ExternalLink, BookOpenText, Blocks, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 md:px-8 md:py-8 lg:px-16 lg:py-16">
      <div className="flex flex-col gap-4 max-w-2xl text-left mx-auto">
        <div className="flex flex-col gap-2">
          <Image src="/eth34vn-full.svg" alt="ETH34" width={200} height={150} />
          <blockquote className="text-lg border-l-4 border-red-500 pl-4 py-4 bg-red-50 rounded-r-lg italic text-gray-700">
            Hoà nhập tiếng nói 34 tỉnh thành Việt Nam với Ethereum
          </blockquote>
          <p className="text-lg"><Image className="inline-block" src="/ethereum.svg" alt="ethereum" width={20} height={20} /> <a href="https://ethereum.org/vi/" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">Ethereum <ExternalLink className="inline-block w-5 h-5 pb-1" /></a> không chỉ là một blockchain. Ethereum là nơi mọi người có thể cùng nhau xây dựng một nền tảng tài chính mới cho kỷ nguyên <Image className="inline-block mr-1 pb-1" src="/globe.svg" alt="globe" width={14} height={14} /><span className="font-bold">internet</span>, công bằng, minh bạch và phi tập trung. Trong thời gian vừa qua ở Việt Nam, tớ ít thấy các hoạt động dành cho cộng đồng Ethereum ngoài <a className="font-bold underline underline-offset-4" href="https://www.eth-vietnam.com/" target="_blank" rel="noopener noreferrer">ETHVietnam <ExternalLink className="inline-block w-5 h-5 pb-1" /></a>. So với các blockchain Layer 1 khác thì Ethereum ít có sự hiện diện, một phần vì thiếu kinh phí và chưa có ai thúc đẩy các hoạt động.</p>
          <p className="text-lg">Vì thế, mình <Image className="inline-block mr-1" src="/zxstim.png" alt="zxstim" width={20} height={20} /><a className="font-bold underline underline-offset-4" href="https://www.facebook.com/zxstim" target="_blank" rel="noopener noreferrer">Victor Luong (nickname là ZxStim)<ExternalLink className="inline-block w-5 h-5 pb-1" /></a>, khởi động một chiến dịch cộng đồng <Image className="inline-block" src="/eth34vn-full.svg" alt="ETH34" width={80} height={50} />. <Image className="inline-block" src="/eth34vn-symbol.svg" alt="eth" width={24} height={24} /> <a className="font-bold underline underline-offset-4" href="https://coinmarketcap.com/vi/currencies/ethereum/" target="_blank" rel="noopener noreferrer">ETH <ExternalLink className="inline-block w-5 h-5 pb-1" /></a> là 3 ký tự đại diện cho Ethereum thường được gán cho các cộng đồng ở nhiều nước. <span className="bg-[#db261e] text-[#ffff00] rounded-md p-1">34</span> là số tỉnh và thành phố ở Việt Nam sau sát nhập gần đây.</p>
          <br />
          <p className="text-lg"><Image className="inline-block" src="/eth34vn-full.svg" alt="ETH34" width={80} height={50} /> có 3 mục tiêu chính sau đây:</p>
          <div className="flex flex-col gap-2 pl-2">
          <h2 className="flex flex-row gap-2 items-center text-lg"><BookOpenText className="inline-block self-start pt-1 md:pt-0 lg:pt-0" />Phổ cập kiến thức về hệ sinh thái Ethereum</h2>
          <h2 className="flex flex-row gap-2 items-center text-lg"><Blocks className="inline-block self-start pt-1 md:pt-0 lg:pt-0" />Hỗ trợ builder, sinh viên, các nhà đầu tư Ethereum</h2>
          <h2 className="flex flex-row gap-2 items-center text-lg"><Building2 className="inline-block self-start pt-1 md:pt-0 lg:pt-0" />Thúc đẩy doanh nghiệp ứng dụng công nghệ Ethereum và Layer 2</h2>
          </div>
          <br />
          <p className="text-lg"><Image className="inline-block" src="/eth34vn-full.svg" alt="ETH34" width={80} height={50} /> sẽ thực hiện các mục tiêu trên thông qua phương pháp xây dựng nội dung trên các mạng xã hội, đặc biệt là <Image className="inline-block pb-1" src="/youtube.svg" alt="youtube" width={20} height={20} /> video. Đối với tớ, đây là định dạng media phù hợp nhất để kể lại những câu chuyện của cộng đồng Ethereum tại <Image className="inline-block pb-1" src="/vietnam-round.svg" alt="vietnam" width={20} height={20} /> Việt Nam tới cho bạn bè quốc tế; và ngược lại, giúp bạn bè quốc tế gửi gắm những thông điệp kết nối. Vì thế, tớ sẽ chủ động liên hệ với các hội nhóm Ethereum toàn quốc và ở nước ngoài để triển khai việc quay video.</p>
          <p className="text-lg">Cuối năm 2026, thay vì tổ chức một sự kiện như ETHVietnam những năm vừa qua. Tớ sẽ thực hiện một video đặc biệt xâu chuỗi tất cả những hoạt động của Ethereum tại Việt Nam và toàn cầu, tạo ra một điểm nhấn cuối năm, tri ân những đóng góp của mọi người.</p>
          <br />
          <p className="text-lg">Nền tảng tài chính của kỷ nguyên internet đang được xây dựng trên Ethereum. Và con người Việt Nam sẽ góp phần không nhỏ trong quá trình đổi mới đó.</p>
        </div>
        <Button asChild className="bg-blue-500 text-white hover:bg-blue-600 w-fit">
          <a className="flex flex-row gap-2 items-center" href="https://www.facebook.com/eth34vn" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.svg" alt="facebook" width={20} height={20} />
            Facebook ETH34
          </a>
        </Button>
        <p className="text-sm text-gray-500">
          Trang web này sẽ được cập nhật thêm nội dung trong thời gian tới.
        </p>
      </div>
      <div className="h-16" />
    </div>
  );
}
