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
import ProjectCategory from "./components/Projects/ProjectCategory";

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
                <Route path="/projects/schneider-electric"
                  element={
                    <ProjectCategory
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Schneider Electric"
                    />}
                />
                <Route path="/projects/panasonic"
                  element={
                    <ProjectCategory
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Panasonic"
                    />}
                />
                <Route path="/projects/trip-booking"
                  element={
                    <ProjectCategory
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Trip Booking"
                    />}
                />
                <Route path="/projects/honda"
                  element={
                    <ProjectCategory
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="Honda"
                    />}
                />
                <Route path="/projects/koca"
                  element={
                    <ProjectCategory
                      title="DIGITAL"
                      imgFilter="Digital"
                      subTitle="KOCA"
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
