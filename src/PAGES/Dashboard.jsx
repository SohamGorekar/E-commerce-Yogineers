import React from "react";
import Navbar from "../COMPONENTS/Navbar";
import Footer from "../COMPONENTS/Footer";
import HeroSection from "../COMPONENTS/DashboardComponents/HeroSection";

const Dashboard = () => {
  return (
    <>
      <div className="relative z-20">
        <Navbar />
        <HeroSection/>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
