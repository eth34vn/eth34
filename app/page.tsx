import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 py-16">
      <div className="flex flex-col gap-4 max-w-2xl text-left mx-auto">
        <div className="flex flex-col gap-2">
          <Image src="/eth34vn-full.svg" alt="ETH34" width={150} height={150} />
          <blockquote className="text-lg border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg italic text-gray-700">
            Hoà nhập tiếng nói 34 tỉnh thành Việt Nam với Ethereum
          </blockquote>
          <p><Image className="inline-block" src="/ethereum.svg" alt="ethereum" width={20} height={20} /> <span className="font-bold underline underline-offset-4">Ethereum</span> không chỉ là một blockchain. Ethereum là nơi mọi người có thể cùng nhau xây dựng một nền tảng tài chính mới cho kỷ nguyên internet, công bằng, minh bạch và phi tập trung. Trong thời gian vừa qua ở Việt Nam, tớ ít thấy các hoạt động dành cho cộng đồng Ethereum ngoài ETH Vietnam. So với các blockchain Layer 1 khác thì Ethereum ít có sự hiện diện, một phần vì thiếu kinh phí và chưa có ai thúc đẩy các hoạt động.</p>
          <p>Vì thế, mình Victor Luong (nickname là ZxStim), khởi động một chiến dịch cộng đồng ETH34. ETH là 3 ký tự đại diện cho Ethereum thường được gán cho các cộng đồng ở nhiều nước. 34 là số tỉnh và thành phố ở Việt Nam sau sát nhập gần đây.</p>
          <p>ETH34 có 3 mục tiêu chính sau đây:</p>
          <h2>Phổ cập kiến thức về hệ sinh thái Ethereum</h2>
          <h2>Hỗ trợ builder, sinh viên, các nhà đầu tư Ethereum</h2>
          <h2>Thúc đẩy doanh nghiệp ứng dụng công nghệ Ethereum</h2>
          <p>ETH34 sẽ thực hiện các mục tiêu trên thông qua phương pháp xây dựng nội dung trên các mạng xã hội, đặc biệt là video. Đối với tớ, đây là định dạng media phù hợp nhất để kể lại những câu chuyện của cộng Ethereum tại Việt Nam tới cho bạn bè quốc tế; và ngược lại, giúp bạn bè quốc tế gửi gắm những thông điệp kết nối. Vì thế, tớ sẽ chủ động liên hệ với các hội nhóm Ethereum toàn quốc và ở nước ngoài để triển khai việc quay video.</p>
          <p>Cuối năm 2026, thay vì tổ chức một sự kiện to đùng như ETH Vietnam những năm vừa qua. Tớ sẽ thực hiện một video đặc biệt xâu chuỗi tất cả những hoạt động của Ethereum tại Việt Nam và toàn cầu, tạo ra một điểm nhấn cuối năm, tri ân những đóng góp của mọi người.</p>
          <p>Nền tảng tài chính của kỷ nguyên internet đang được xây dựng trên Ethereum. Và con người Việt Nam sẽ góp phần không nhỏ trong quá trình đổi mới đó.</p>
        </div>
      </div>
    </div>
  );
}
