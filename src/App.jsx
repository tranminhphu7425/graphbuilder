// App.js
import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading.jsx";
import "./style/App.css"; // Import file CSS

// Lazy load các trang
const Trangchu = React.lazy(() => import("./pages/trangchu.jsx"));
const Vedothi = React.lazy(() => import("./pages/vedothi.jsx"));
const Nhapdothi = React.lazy(() => import("./pages/nhapdothi.jsx"));
const Chuyendoi = React.lazy(() => import("./pages/chuyendoi.jsx"));
const Duyetdothi = React.lazy(() => import("./pages/duyetdothi.jsx"));
const Timlienthong = React.lazy(() => import("./pages/timlienthong.jsx"));
const Duongdingannhat = React.lazy(() => import("./pages/duongdingannhat.jsx"));
const Xephangdothi = React.lazy(() => import("./pages/xephangdothi.jsx"));
const Caykhungnhonhat = React.lazy(() => import("./pages/caykhungnhonhat.jsx"));
const Timluongcucdai = React.lazy(() => import("./pages/timluongcucdai.jsx"));
const Tainguyenhoctap = React.lazy(() => import("./pages/tainguyenhoctap.jsx"));
const Vechungtoi = React.lazy(() => import("./pages/vechungtoi.jsx"));
const Donate = React.lazy(() => import("./pages/donate.jsx"));

function App() {
    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Trangchu />} />
                    <Route path="/vedothi" element={<Vedothi />} />
                    <Route path="/nhapdothi" element={<Nhapdothi />} />
                    <Route path="/chuyendoi" element={<Chuyendoi />} />
                    <Route path="/duyetdothi" element={<Duyetdothi />} />
                    <Route path="/timlienthong" element={<Timlienthong />} />
                    <Route path="/duongdingannhat" element={<Duongdingannhat />} />
                    <Route path="/xephangdothi" element={<Xephangdothi />} />
                    <Route path="/caykhungnhonhat" element={<Caykhungnhonhat />} />
                    <Route path="/timluongcucdai" element={<Timluongcucdai />} />
                    <Route path="/tainguyenhoctap" element={<Tainguyenhoctap />} />
                    <Route path="/vechungtoi" element={<Vechungtoi />} />
                    <Route path="/donate" element={<Donate />} />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default App;