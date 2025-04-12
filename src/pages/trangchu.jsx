import { useEffect } from "react";
import { Link } from "react-router-dom";
import adjustHeight from "../tool/adjustHeightMain.js";
import { Background } from "../script/background.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";

import '../style/style.css';

import donatePic from "/src/assets/img/save-money.png";
import githubPic from "/src/assets/img/githubicon.png";

const Trangchu = () => {
  useEffect(() => {
    initFlowbite(); 
    Background();
    adjustHeight();
  }, []);

  return (
    <>
      <title>Trang chủ</title>
      <div id="trangchu" className="fade-in">   
        <Header activePage="trangchu" className="bg-transparent" />
        
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray text-white" id="trangchu-main">
          <div className="leftSite lg:w-1/2 bg-gray p-8 lg:p-16 flex flex-col justify-center">
            <div className="w-fit m-auto">
              <h2 className="text-5xl font-bold mb-6 textAnimation select-none">
                Công cụ xử lý <span className="gradient-text">đồ thị</span>
              </h2>
              <p className="text-lg mb-6 textAnimation">
                Một công cụ giúp giải quyết một số bài toán, các giải thuật và
                thuật toán về đồ thị
              </p>
              <div className="flex items-center textAnimation">
                <Link
                  to="/nhapdothi"
                  className="text-white px-6 py-3 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 text-white font-semibold"
                >
                  Bắt đầu
                </Link>
                <Link
                  to="/donate"
                  className="space-x-2 flex items-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3 rounded-full  ml-4"
                >
                  <img src={donatePic} alt="" />
                  Donate
                </Link>
                
                <a href="https://github.com/tranminhphu7425/graphbuilder"  className="space-x-2 flex items-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3 rounded-full">
                  <img src={githubPic} alt="" width={36} height={36} className="rounded-full pr-1" />
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div
              id="mynetworkBackground"
              className="w-full h-full object-cover opacity-50"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trangchu;
