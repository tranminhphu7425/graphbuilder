import { useEffect } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
import donatePic from "/src/assets/img/save-money.png";
import '../style/style.css';

const Vechungtoi = () => {
  useEffect(() => {
  configFullPage();
  initFlowbite();
  }, []);

  return (
    <>
      <title>Về chúng tôi</title>
     

      <div className="fade-in">
      <Header activePage="vechungtoi" className="bg-transparent" />

        <main className="p-2  h-fit fullmain">
          <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="w-full text-3xl font-bold text-center mb-6">
              Về chúng tôi
            </h1>
            <p className="text-gray-700 mb-6 text-left">
              Chào mừng bạn đến với trang web của chúng tôi – nơi cung cấp những
              ví dụ trực quan về lý thuyết đồ thị! Chúng tôi mang đến các khái
              niệm, thuật toán và ứng dụng thực tế của đồ thị. Cùng khám phá và
              học hỏi với chúng tôi!
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">NHÂN SỰ</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Trần Minh Phú</li>
                <li>Nguyễn Minh Tuấn</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">MỤC ĐÍCH</h2>
              <p className="text-gray-700 mb-4">
                Trang web này được thành lập với mục tiêu cung cấp kiến thức và
                ví dụ trực quan về lý thuyết đồ thị – một lĩnh vực quan trọng
                trong toán học và khoa học máy tính. Chúng tôi mong muốn xây
                dựng một nền tảng học tập chất lượng, giúp người dùng từ sinh
                viên, giảng viên đến những người yêu thích thuật toán có thể dễ
                dàng tiếp cận .Chúng tôi cũng cung cấp các ví dụ minh họa và
                công cụ hỗ trợ để giúp bạn nắm bắt nội dung một cách hiệu quả
                nhất. Ngoài ra, trang web còn hướng đến việc xây dựng một cộng
                đồng học tập. Chúng tôi tin rằng, với sự hỗ trợ từ trang web,
                việc học và ứng dụng lý thuyết đồ thị sẽ trở nên dễ dàng và thú
                vị hơn bao giờ hết.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Ý TƯỞNG</h2>
              <p className="text-gray-700 mb-4">
                Ý tưởng thành lập trang web này xuất phát từ nhu cầu cung cấp
                một nền tảng về lý thuyết đồ thị – một lĩnh vực quan trọng trong
                toán học và khoa học máy tính. Chúng tôi nhận thấy rằng, dù đồ
                thị có ứng dụng rộng rãi trong thực tế, từ trí tuệ nhân tạo,
                mạng máy tính đến tối ưu hóa, nhưng vẫn còn thiếu một nguồn tài
                liệu hệ thống, dễ tiếp cận cho người học. Vì vậy, trang web này
                giúp người học tiếp cận lý thuyết đồ thị một cách trực quan, dễ
                hiểu. Với ý tưởng này, chúng tôi hy vọng trang web sẽ trở thành
                một tài nguyên hữu ích cho những ai quan tâm đến lĩnh vực này.
              </p>
              <h2 className="text-2xl font-semibold mb-4">CHÍNH SÁCH</h2>
              <p className="text-gray-700 mb-4">
                Chính sách của trang web được xây dựng nhằm đảm bảo cung cấp một
                môi trường học tập chất lượng, minh bạch và hữu ích cho tất cả
                người dùng quan tâm đến lý thuyết đồ thị. Chúng tôi cam kết cung
                cấp nội dung chính xác, dễ hiểu và cập nhật liên tục để đáp ứng
                nhu cầu học tập và nghiên cứu của mọi đối tượng, từ sinh viên,
                giảng viên đến những người yêu thích thuật toán. Mọi nội dung
                trên trang web đều tuân thủ nguyên tắc tôn trọng bản quyền, đảm
                bảo rằng tài liệu được cung cấp hợp pháp và minh bạch. Bên cạnh
                đó, chúng tôi cam kết bảo vệ quyền riêng tư của người dùng,
                không thu thập hoặc chia sẻ thông tin cá nhân mà không có sự
                đồng ý. Chúng tôi luôn nỗ lực duy trì một môi trường học tập
                tích cực, nơi mọi người có thể trao đổi kiến thức một cách an
                toàn, hiệu quả và sáng tạo.
              </p>
              <h2 className="text-2xl font-semibold mb-4">NHỮNG DỰ ÁN KHÁC CỦA TÔI</h2>
              <p className="text-gray-700 mb-4">
                <Link
                  to="https://classroom.google.com/c/NjExNjQ5MzQzNTI2?cjc=x3yvztf"
                  className="items-center flex m-auto w-fit text-white px-4 py-2 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 rounded-lg text-white font-semibold"
                >
                 
                  <span>Lớp học kiến trúc máy tính</span>
                </Link>
              </p>
              <h2 className="text-2xl font-semibold mb-4">ỦNG HỘ</h2>
              <p className="text-gray-700 mb-4">
                Nguồn tài trợ của các bạn sẽ giúp nhóm chúng tôi duy trì và phát
                triển những dự án tiếp theo
              </p>

              <div className="items-center w-full">
                <Link
                  to="/donate"
                  className="items-center flex m-auto mb-4 w-fit text-white px-4 py-2 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 rounded-lg text-white font-semibold"
                >
                  <img src={donatePic} alt="" />
                  <span>Donate</span>
                </Link>
                <p className="text-gray-700 mb-4"><strong>Lưu ý: </strong>Sử dụng tài khoản Google cá nhân để đăng nhập</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">LIÊN HỆ</h2>
              <p className="text-gray-700 mb-4">
                Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi
                qua email:
              </p>
              <div className="text-center">
                <a
                  href="mailto:tranminhphu7.4.2005@gmail.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  tranminhphu7.4.2005@gmail.com
                </a>

                <br />
                <p>
                  Liên hệ điện thoại:
                  <a
                    href="tel:+84818768940"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {" "}
                    +84818768940
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Vechungtoi;
