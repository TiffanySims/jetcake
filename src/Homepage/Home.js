import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero_text">
          <h1>Happier, Healthier You</h1>
          <p>
            A radically different and individualized approach that guides you
            toward the best physical version on yourself{" "}
          </p>
        </div>
      </div>
      <Info />
    </div>
  );
}
