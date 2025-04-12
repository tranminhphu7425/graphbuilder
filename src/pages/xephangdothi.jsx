import { useEffect, useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";

import { NhapdothiEffect } from "../script/nhapdothi.js";
import { XephangdothiEffect } from "../script/xephangdothi.js";

import extendable from '/src/assets/img/extendable.png';

import '../style/style.css';

const Xephangdothi = () => {
  const [nodes, setNodes] = useState("");
  const [edges, setEdges] = useState("");
  // const [isWeightedGraph, setIsWeightedGraph] = useState(false);
  // const [directed, setDirected] = useState(false);
  // const [physics, setPhysics] = useState(true);
  var [found, setFound] = useState(0);

  useEffect(() => {
    adjustHeight();
    configFullPage();
    initFlowbite();
    
  }, []);

  
  useEffect(() => {
    NhapdothiEffect();
  }, []);

  useEffect(() => {
    if (found === 1) {
      NhapdothiEffect();
      setFound(0);
    }
  }, [nodes, edges, found]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFound(1);
  };

  XephangdothiEffect();

  return (
    <>
      <title>Xếp hạng đồ thị</title>
   
      <div className="fade-in">
      <Header activePage="xephangdothi" className="bg-transparent" />

      <main>
        <div className="container" id="formbox">
          <h2>Xếp hạng đồ thị</h2>
          <form id="graphForm" onSubmit={handleSubmit}>
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
                rows="10"
                placeholder="Ví dụ: 1 2 
       1 3
       2 4"
                value={edges}
                onChange={(e) => setEdges(e.target.value)}
              ></textarea>
            </div>

            <div id="graphOption">
              <div className="typeOfBrowe">
                <div>
                  <input type="submit" id="run" value="Chạy" onClick={() => setFound(1)} />
                </div>
              </div>
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

export default Xephangdothi;
