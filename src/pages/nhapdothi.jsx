import { useEffect, useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";

import { NhapdothiEffect } from "../script/nhapdothi.js";

import extendable from '/src/assets/img/extendable.png';

import '../style/style.css';

const Nhapdothi = () => {
  const [nodes, setNodes] = useState("");
  const [edges, setEdges] = useState("");
  const [isWeightedGraph, setIsWeightedGraph] = useState(false);
  const [directed, setDirected] = useState(false);
  const [physics, setPhysics] = useState(true);

  useEffect(() => {
    adjustHeight();
    configFullPage();
    initFlowbite();
    NhapdothiEffect();
  }, []);

  

  return (
    <>
      <title>Nhập đồ thị</title>
      
     <div className="fade-in">
     <Header activePage="nhapdothi" className="bg-transparent" />

      <main>
        <div className="container" id="formbox">
          <h2>Nhập đồ thị</h2>
          <form id="graphForm" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group" id="munberNodes">
              <label htmlFor="nodes">Nhập số đỉnh:</label>
              <input
                type="number"
                id="nodes"
                name="nodes"
                min="0"
                required
                value={nodes}
                onChange={(e) => setNodes(e.target.value)}
              />
            </div>

            <div className="listedges">
              <label htmlFor="edges">Nhập các cung:</label>
              <textarea
                id="edges"
                name="edges"
                rows="12"
                placeholder="Ví dụ: 1 2 (3)
       1 3 (2)
       2 4 (5)"
                value={edges}
                onChange={(e) => setEdges(e.target.value)}
              ></textarea>
            </div>

            <div id="graphOption">
              <label className="switch">
                Có trọng số
                <input
                  type="checkbox"
                  id="isWeightedGraph"
                  name="isWeightedGraph"
                  checked={isWeightedGraph}
                  onChange={() => setIsWeightedGraph(!isWeightedGraph)}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Có hướng
                <input
                  type="checkbox"
                  id="directed"
                  name="directed"
                  checked={directed}
                  onChange={() => setDirected(!directed)}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Vật lý
                <input
                  type="checkbox"
                  id="physics"
                  name="physics"
                  checked={physics}
                  onChange={() => setPhysics(!physics)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </form>
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

export default Nhapdothi;
