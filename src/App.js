import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectDetails from "./components/Projects/ProjectDetails";
import ProjectDetails2 from "./components/Projects/ProjectDetails2";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []
  );

  return (
    <>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {!load &&
            <>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/digital/schneider-electric"
                  element={
                    <ProjectDetails
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Schneider Electric"
                    />}
                />
                <Route path="/digital/panasonic"
                  element={
                    <ProjectDetails
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Panasonic"
                    />}
                />
                <Route path="/digital/trip-booking"
                  element={
                    <ProjectDetails
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Trip Booking"
                    />}
                />
                <Route path="/digital/honda"
                  element={
                    <ProjectDetails
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Honda"
                    />}
                />
                <Route path="/digital/koca"
                  element={
                    <ProjectDetails
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="KOCA"
                    />}
                />
                <Route path="/event/shopee"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="Shopee"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "BEYOND LIMITS - SHOPEE 2024" }} />}
                      subDateTime=""
                      intro=""
                      section={["keyvisual"]}
                      author=""
                    />}
                />
                <Route path="/event/pfizer-aspergillosis"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="PfizerAspergillosis"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "WHAT DO YOU KNOW ABOUT <span class='purple'> ASPERGILLOSIS? </span> - PFIZER" }} />}
                      subDateTime="16.03.2024"
                      intro={<span dangerouslySetInnerHTML={{ __html: "Bệnh <strong> Nấm phổi xâm lấn </strong> là bệnh lý nguy hiểm có nguy cơ tử vong cao nếu như không được phát hiện và điều trị kịp thời. <br/> <br/> Sự kiện được tổ chức với mục đích chia sẻ về câu chuyện của các bệnh nhân Nấm phổi cũng như giải đáp các thắc mắc về bệnh lý và cách điều trị được thực hiện bởi <strong>  các chuyên gia bác sĩ của Pfizer </strong>  " }} />}
                      section={["keyvisual", "e-invitation", "tent card", "poster"]}
                      author={<span dangerouslySetInnerHTML={{ __html: "<strong> Senior Art Director </strong> : Ninh Huynh <br/> <strong> 2D Design </strong> : Tho Pham" }} />}
                    />}
                />
                <Route path="/event/van-xuan-group"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="Vanxuangroup"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "<span class='cyan'>THE BRIDGE TO GLORY </span> - VAN XUAN GROUP" }} />}
                      subDateTime="27.04.2024"
                      intro={<span dangerouslySetInnerHTML={{ __html: "27.04.2024 vừa qua, Cầu kính trên không Happy One Central - dự án trọng điểm của Vạn Xuân Group đã chính thức xác lập kỷ lục “Cầu kính trên không cao nhất Việt Nam” " }} />}
                      section={["keyvisual", "invitation", "poster", "standee"]}
                      author={<span dangerouslySetInnerHTML={{ __html: "<strong> Senior Art Director </strong> : Ninh Huynh <br/> <strong> 2D Design </strong> : Tho Pham <br/> <strong> 3D Design </strong> : Hoang Huynh " }} />}
                    />}
                />
                <Route path="/event/vietmap-rayno"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="Vietmaprayno"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "LAUNCHING CEREMONY OF HEAT INSULATION FILM <strong class='purple'> VIETMAP 2024 </strong>" }} />}
                      subDateTime=""
                      intro=""
                      section={["keyvisual"]}
                      author=""
                    />}
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />

            </>}
        </div>
      </Router>
    </>
  );
}

export default App;
