import { useEffect, useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";


import { VedothiEffect } from "../script/vedothi.js";

import extendable from '/src/assets/img/extendable.png';

import '../style/style.css';

const Vedothi = () => {
  const [isWeightedGraph, setIsWeightedGraph] = useState(false);
  const [isDirected, setIsDirected] = useState(false);
  const [isPhysics, setIsPhysics] = useState(true);

  useEffect(() => {
    adjustHeight();
    configFullPage();
    initFlowbite();
  }, []);

  VedothiEffect();

  const handleWeightedGraphChange = () => {
    setIsWeightedGraph(!isWeightedGraph);
  };

  const handleDirectedChange = () => {
    setIsDirected(!isDirected);
  };

  const handlePhysicsChange = () => {
    setIsPhysics(!isPhysics);
    updateGraph();
  };

  const updateGraph = () => {
    // Logic to update the graph based on the current state
  };

  return (
    <>
      <title>Vẽ đồ thị</title>
     

      <div className="fade-in">
      <Header activePage="vedothi" className="bg-transparent" />
        <main id="vedothi">
          <div id="controlsform" className="container">
            <h2>Vẽ đồ thị</h2>
            <div id="graphOption">
              <label className="switch">
                Có trọng số
                <input
                  type="checkbox"
                  id="isWeightedGraph"
                  name="isWeightedGraph"
                  checked={isWeightedGraph}
                  onChange={handleWeightedGraphChange}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Có hướng
                <input
                  type="checkbox"
                  id="directed"
                  name="directed"
                  checked={isDirected}
                  onChange={handleDirectedChange}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Vật lý
                <input
                  type="checkbox"
                  id="physics"
                  name="physics"
                  checked={isPhysics}
                  onChange={handlePhysicsChange}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="guild">
              <h3>Hướng dẫn</h3>
              <ul>
                <li>Đúp chuột để tạo một nút mới</li>
                <li>
                  Ấn giữ phím shift và chọn 2 đỉnh bất kì để tạo cung nối liền 2
                  đỉnh đó
                </li>
                <li>
                  Nếu giữ phím shift và đúp 2 lần vào một đỉnh sẽ tạo khuyên
                </li>
                <li>Ctrl+Z để quay lại bước trước đó</li>
                <li>Ctrl+Y để làm lại bước trước đó</li>
                <li>Nhấp vào cạnh để có thể điền trọng số</li>
              </ul>
            </div>
          </div>
          <div className="graph-container container">
            <div id="mynetwork"></div>
            <button id="zoomExtendsButton">
              <img src={extendable} alt="" width={40} />
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Vedothi;
