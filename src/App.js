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
                <Route path="/event/pfizer-aspergillosis"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="PfizerAspergillosis"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "WHAT DO YOU KNOW ABOUT <strong class='purple'> ASPERGILLOSIS? </strong> - PFIZER" }} />}
                      subDateTime="16.03.2024"
                      intro={<span dangerouslySetInnerHTML={{ __html: "Bệnh <strong> Nấm phổi xâm lấn </strong> là bệnh lý nguy hiểm có nguy cơ tử vong cao nếu như không được phát hiện và điều trị kịp thời. <br/> <br/> Sự kiện được tổ chức với mục đích chia sẻ về câu chuyện của các bệnh nhân Nấm phổi cũng như giải đáp các thắc mắc về bệnh lý và cách điều trị được thực hiện bởi <strong>  các chuyên gia bác sĩ của Pfizer </strong>  " }} />}
                      section={["keyvisual", "e-invitation", "tent card", "poster"]}
                      author={<span dangerouslySetInnerHTML={{ __html: "<strong> Senior Art Director </strong> : Ninh Huynh <br/> <strong> 2D Design </strong> : Tho Pham" }} />}
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
