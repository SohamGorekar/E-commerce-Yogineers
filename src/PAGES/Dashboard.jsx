import React from "react";
import Navbar from "../COMPONENTS/Navbar";
import Footer from "../COMPONENTS/Footer";

const Dashboard = () => {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.shopify.com/videos/c/o/v/a7b401b13f2242c5bfdd9d00b26fd93d.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-20">
        <Navbar />
        <div className="h-[70vh]"></div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
