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
                <Route path="/event/glamiss-cool"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="glamisscool"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "MAT LANH DIU EM, CHO NANG DIU KEO <br/> <span class='purple'>GLAMISS COOL - 2024</span> " }} />}
                      subDateTime=""
                      intro={<span dangerouslySetInnerHTML={{ __html: "<strong class='font-light'>Glamiss Cool</strong> là một thương hiệu sản phẩm vệ sinh dành cho giới trẻ, nổi bật với áp dụng <strong class='font-light'>tinh thể bạc Nano Ag+</strong> và sử dụng <strong class='font-light'> thảo mộc bạc hà </strong> để mang lại trải nghiệm vệ sinh tối ưu. Các sản phẩm của Glamiss Cool được thiết kế để đáp ứng nhu cầu vệ sinh cá nhân với sự kết hợp giữa công nghệ tiên tiến và các thành phần tự nhiên, mang lại cảm giác sảng khoái và an toàn cho người dùng." }} />}
                      section={["moodboard", "draft ideas", "keyvisual"]}
                      author=""
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
                      intro={<span dangerouslySetInnerHTML={{ __html: "Bệnh <strong class='font-light'> Nấm phổi xâm lấn </strong> là bệnh lý nguy hiểm có nguy cơ tử vong cao nếu như không được phát hiện và điều trị kịp thời. <br/> <br/> Sự kiện được tổ chức với mục đích chia sẻ về câu chuyện của các bệnh nhân Nấm phổi cũng như giải đáp các thắc mắc về bệnh lý và cách điều trị được thực hiện bởi <strong class='font-light'>  các chuyên gia bác sĩ của Pfizer </strong>  " }} />}
                      section={["keyvisual", "e-invitation", "tent card", "poster"]}
                      author={<span dangerouslySetInnerHTML={{ __html: "<strong class='font-light'> Senior Art Director </strong> : Ninh Huynh <br/> <strong class='font-light'> 2D Design </strong> : Tho Pham" }} />}
                    />}
                />
                <Route path="/event/van-xuan-group"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="Vanxuangroup"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "THE BRIDGE TO GLORY  - <strong class='purple'> VAN XUAN GROUP </strong>" }} />}
                      subDateTime="27.04.2024"
                      intro={<span dangerouslySetInnerHTML={{ __html: "27.04.2024 vừa qua, <strong class='font-light'> Cầu kính trên không Happy One Central - dự án trọng điểm của Vạn Xuân Group đã chính thức xác lập kỷ lục “Cầu kính trên không cao nhất Việt Nam </strong>” " }} />}
                      section={["keyvisual", "invitation", "poster", "standee"]}
                      author={<span dangerouslySetInnerHTML={{ __html: "<strong class='font-light'> Senior Art Director </strong> : Ninh Huynh <br/> <strong class='font-light'> 2D Design </strong> : Tho Pham <br/> <strong class='font-light'> 3D Design </strong> : Hoang Huynh " }} />}
                    />}
                />
                <Route path="/event/vietmap-rayno"
                  element={
                    <ProjectDetails2
                      title="EVENT"
                      imgFilter="Event"
                      imgFilterSub="Vietmaprayno"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "LAUNCHING CEREMONY OF HEAT INSULATION FILM - <strong class='purple'> VIETMAP 2024 </strong>" }} />}
                      subDateTime=""
                      intro=""
                      section={["keyvisual"]}
                      author=""
                    />}
                />
                <Route path="/branding/webuilders"
                  element={
                    <ProjectDetails2
                      title="BRANDING"
                      imgFilter="Branding"
                      imgFilterSub="webuilders"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "CONSTRUCTION COMPANY - <strong class='purple'> WEBUILDERS </strong>" }} />}
                      subDateTime=""
                      intro={<span dangerouslySetInnerHTML={{ __html: "Dự án thiết kế <strong class='font-light'> thương hiệu WEBUILDERS </strong> – Webuilders là công  ty hoạt động trong lĩnh vực thiết kế và thi công xây dựng nhà cửa. Công ty được thành lập vào năm 2023 và toạ lạc tại Mỹ." }} />}
                      section={["background", "ý tưởng", "màu sắc thương hiệu", "font chữ thương hiệu", "stationery kit"]}
                      author=""
                    />}
                />
                <Route path="/branding/chou-studio"
                  element={
                    <ProjectDetails2
                      title="BRANDING"
                      imgFilter="Branding"
                      imgFilterSub="choustudio"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "<strong class='purple'>CHOU STUDIO</strong>" }} />}
                      subDateTime=""
                      intro={<span dangerouslySetInnerHTML={{ __html: "Dự án thiết kế <strong class='font-light'> thương hiệu CHOU STUDIO </strong>. Chou Studio là công  ty hoạt động trong lĩnh vực thời trang mang phong cách tinh tế và sang trọng. Công ty được thành lập vào năm 2023" }} />}
                      section={["background", "draft ideas", "final idea", "font chữ thương hiệu", "stationery kit"]}
                      author=""
                    />}
                />
                <Route path="/branding/chuhi-coffee"
                  element={
                    <ProjectDetails2
                      title="BRANDING"
                      imgFilter="Branding"
                      imgFilterSub="chuhicoffee"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "<strong class='purple'>CHUHI</strong> - COFFEE AND TEA" }} />}
                      subDateTime=""
                      intro={<span dangerouslySetInnerHTML={{ __html: "Dự án thiết kế <strong class='font-light'>thương hiệu trà sữa CHUHI</strong>. Logo Chuhi được sáng tạo từ các chữ cái C H U H I. Cái tên được lấy cảm hứng từ tên người chủ Trung Hiếu" }} />}
                      section={["background", "màu sắc thương hiệu", "font chữ thương hiệu", "cup"]}
                      author=""
                    />}
                />
                <Route path="/branding/hien-cafe"
                  element={
                    <ProjectDetails2
                      title="BRANDING"
                      imgFilter="Branding"
                      imgFilterSub="hiencafe"
                      subTitle={<span dangerouslySetInnerHTML={{ __html: "<strong class='purple'>HIEN</strong> CAFE" }} />}
                      subDateTime=""
                      intro={<span dangerouslySetInnerHTML={{ __html: "Dự án thiết kế <strong class='font-light'>thương hiệu cafe Hiên</strong>. Hiên mang phong cách mộc mạc, tạo nên một không gian yên bình và ấm cúng, thích hợp cho những ai muốn tìm một nơi thư giãn và thoát khỏi nhịp sống hối hả của thành phố. Vì mang phong cách Việt Nam nên Hiên được làm theo dạng logo chữ kết hợp với font chữ 1FTV HF Gesco" }} />}
                      section={["background", "màu sắc thương hiệu"]}
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
