import React from 'react';
import Login from '../COMPONENTS/LoginComponents/Login';

const LoginPage = () => {
  const handleLogin = async (formData) => {
    console.log('Login data:', formData);
    // Call your login API here
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.shopify.com/videos/c/o/v/a7b401b13f2242c5bfdd9d00b26fd93d.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for darkening the video) */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Login Component */}
      <div className="relative z-20 ">
        <Login onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
