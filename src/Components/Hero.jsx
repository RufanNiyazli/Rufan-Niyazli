import React from "react";
import home from "./transparent.png";

function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Rufan_Niyazli_CV.pdf"; // File name for download
    link.href = "/Rufan-Niyazli/RufanCV.pdf"; // File in public folder, no import required
    link.click();
  };

  return (
    <div id="home">
      <div className="hero">
        <div className="hero-img">
          <img src={home} alt="Rufan Niyazlı" />
        </div>
        <div className="hero-text">
          <h1>Hi I'm Rufan Niyazlı</h1>
          <h3 className="text">I am a web developer</h3>
          <div className="hero-button">
            <button className="hire"><a href="#contact">Hire Me</a></button>
            <button className="cv" onClick={handleDownload}>
              CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
