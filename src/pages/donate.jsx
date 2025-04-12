import { useEffect } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";
import qrPic from "../assets/img/VietcombankDonate.jpg";
import '../style/style.css';


const Donate = () => {
    useEffect(() => {
        configFullPage();
        initFlowbite();
      }, []);
  return (
    <>
    <title>Donate</title>
   
   
      <div className="fade-in">
      <Header activePage="donate" className="bg-transparent" />

        <main className="p-2  fullmain">
          <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
              Quyên góp ủng hộ
            </h1>
            <p className="text-gray-700 mb-6 text-center">
              Chúng tôi rất cảm kích nếu bạn có thể ủng hộ để giúp chúng tôi duy
              trì và phát triển trang web này. Mọi đóng góp của bạn đều có ý
              nghĩa lớn đối với chúng tôi.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Tại sao quyên góp?
              </h2>
              <p className="text-gray-700 mb-4">
                GraphBuilder là một dự án phi lợi nhuận, được phát triển với mục
                đích cung cấp các công cụ miễn phí để vẽ và phân tích đồ thị.
                Tuy nhiên, để duy trì và cải thiện chất lượng dịch vụ, chúng tôi
                cần sự hỗ trợ từ cộng đồng.
              </p>
              <p className="text-gray-700 mb-4">
                Quyên góp của bạn sẽ giúp chúng tôi:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Duy trì máy chủ và cơ sở hạ tầng.</li>
                <li>
                  Phát triển các tính năng mới và cải thiện trải nghiệm người
                  dùng.
                </li>
                <li>
                  Hỗ trợ các hoạt động nghiên cứu và giáo dục liên quan đến đồ
                  thị.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Cách thức quyên góp
              </h2>
              <p className="text-gray-700 mb-4">
                Bạn có thể quyên góp thông qua phương thức sau:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-sm w-fit">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Chuyển khoản ngân hàng
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Thông tin tài khoản ngân hàng:
                  </p>
                  <ul className="text-gray-700">
                    <li>
                      <strong>Ngân hàng:</strong> Vietcombank
                    </li>
                    <li>
                      <strong>Số tài khoản:</strong> 9911550054
                    </li>
                    <li>
                      <strong>Chủ tài khoản:</strong> Trần Minh Phú
                    </li>
                  </ul>
                </div>

                <img
                  src={qrPic}
                  alt=""
                  className="w-[170px] m-[auto] rounded-lg"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Donate;
