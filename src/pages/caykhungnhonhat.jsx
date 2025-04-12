import { useEffect, useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";

import Header from "../components/Header.jsx";


import { NhapdothiEffect } from "../script/nhapdothi.js";
import { CaykhungnhonhatEffect } from "../script/caykhungnhonhat.js";

import extendable from '/src/assets/img/extendable.png';

import '../style/style.css';

const Caykhungnhonhat = () => {
  const [nodes, setNodes] = useState("");
  const [edges, setEdges] = useState("");
  const [isWeightedGraph, setIsWeightedGraph] = useState(true);
  const [directed, setDirected] = useState(false);
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
  }, [nodes, edges, directed, found]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFound(1);
  };


  CaykhungnhonhatEffect();

  return (
    <>
      <title>Tìm cây khung nhỏ nhất</title>
      <div className="fade-in">
      <Header activePage="caykhungnhonhat" className="bg-transparent" />

      <main>
        <div className="container" id="formbox">
          <h2>Tìm cây khung nhỏ nhất</h2>
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
                rows="12"
                placeholder="Ví dụ: 1 2 3
       1 3 2
       2 4 5"
                value={edges}
                onChange={(e) => setEdges(e.target.value)}
              ></textarea>
            </div>

            <div id="graphOption">
              <input
                type="hidden"
                id="isWeightedGraph"
                name="isWeightedGraph"
                checked={isWeightedGraph}
                onChange={() => setIsWeightedGraph(!isWeightedGraph)}
              />
               <label className="switch m-0">
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
              <div className="typeOfBrowe">
                <div>
                  <input type="submit" id="run" value="Chạy" onClick={() => setFound(1)}/>
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
        <div id="result" className="container">
          <h2>Kết quả</h2>
          <table
            border="1"
            id="resultTable"
            style={{ width: "100%", textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>STT</th>
                <th>Từ</th>
                <th>Đến</th>
                <th>Trọng số</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </main>
      </div>
    </>
  );
};

export default Caykhungnhonhat;
