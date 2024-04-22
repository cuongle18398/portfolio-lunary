import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
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
                <Route path="/socialposts"
                  element={
                    <ProjectCategory
                      title="MY SOCIAL POSTS"
                      imgFilter="SocialPost"
                      section={['Honda', 'Koca', 'Panasonic', 'PNJ', 'SE', 'TripBooking']}
                    />}
                />
                <Route path="/illustration"
                  element={
                    <ProjectCategory
                      title="MY ILLUSTRATION"
                      imgFilter="Illustration"
                      section={['Avatar', 'Character', 'Template']}
                    />}
                />
                <Route path="/event"
                  element={
                    <ProjectCategory
                      title="MY EVENT"
                      imgFilter="Event"
                    />}
                />
                <Route path="/branding"
                  element={
                    <ProjectCategory
                      title="MY BRANDING"
                      imgFilter="Branding"
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
