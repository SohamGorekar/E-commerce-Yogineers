// import React, { useState, useEffect } from "react";
// import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

// const Login = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Clean up
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleForm = () => {
//     setIsActive(!isActive);
//   };

//   // Mobile layout
//   if (isMobile) {
//     return (
//       <div className="flex items-center justify-center min-h-screen p-4">
//         <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden w-full max-w-md">
//           {/* Toggle Buttons */}
//           <div className="flex border-b border-gray-200">
//             <button
//               onClick={() => setIsActive(false)}
//               className={`flex-1 py-4 font-medium ${!isActive ? 'text-[#2da0a8] border-b-2 border-[#2da0a8]' : 'text-gray-500'}`}
//             >
//               Sign In
//             </button>
//             <button
//               onClick={() => setIsActive(true)}
//               className={`flex-1 py-4 font-medium ${isActive ? 'text-[#2da0a8] border-b-2 border-[#2da0a8]' : 'text-gray-500'}`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Forms Container */}
//           <div className="relative h-full min-h-[500px] overflow-hidden">
//             {/* Sign In Form */}
//             <div
//               className={`absolute top-0 left-0 w-full p-8 transition-all duration-500 ease-in-out ${
//                 isActive ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
//               }`}
//               style={{ pointerEvents: isActive ? 'none' : 'auto' }}
//             >
//               <form className="flex flex-col items-center justify-center">
//                 <h1 className="text-2xl font-bold mb-4" href="/dashboard">Sign In</h1>
//                 <div className="flex my-5">
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaGoogle className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaFacebookF className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaGithub className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaLinkedinIn className="text-gray-600" />
//                   </a>
//                 </div>
//                 <span className="text-xs text-gray-500">or use your email password</span>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//                 />
//                 <a href="#" className="text-gray-500 text-xs my-3 hover:text-[#2da0a8]">
//                   Forget Your Password?
//                 </a>
//                 <button className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:bg-[#238e96] transition-colors">
//                   Sign In
//                 </button>
//               </form>
//             </div>

//             {/* Sign Up Form */}
//             <div
//               className={`absolute top-0 left-0 w-full p-8 transition-all duration-500 ease-in-out ${
//                 isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
//               }`}
//               style={{ pointerEvents: !isActive ? 'none' : 'auto' }}
//             >
//               <form className="flex flex-col items-center justify-center">
//                 <h1 className="text-2xl font-bold mb-4">Create Account</h1>
//                 <div className="flex my-5">
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaGoogle className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaFacebookF className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaGithub className="text-gray-600" />
//                   </a>
//                   <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10">
//                     <FaLinkedinIn className="text-gray-600" />
//                   </a>
//                 </div>
//                 <span className="text-xs text-gray-500">or use your email for registration</span>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//                 />
//                 <button className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:bg-[#238e96] transition-colors">
//                   Sign Up
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Desktop layout (unchanged)
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div
//         className={`bg-white rounded-3xl shadow-lg relative overflow-hidden w-full max-w-4xl min-h-[480px] ${
//           isActive ? "active" : ""
//         }`}
//       >
//         {/* Sign Up Form */}
//         <div
//           className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${
//             isActive
//               ? "left-0 w-1/2 opacity-100 z-10 translate-x-full"
//               : "left-0 w-1/2 opacity-0 z-0"
//           }`}
//         >
//           <form className="bg-white flex flex-col items-center justify-center px-10 h-full">
//             <h1 className="text-2xl font-bold mb-4">Create Account</h1>
//             <div className="flex my-5">
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaGoogle />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//             <span className="text-xs">or use your email for registration</span>
//             <input
//               type="text"
//               placeholder="Name"
//               className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//             />
//             <button className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer">
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div
//           className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${
//             isActive ? "left-0 w-1/2 translate-x-full" : "left-0 w-1/2 z-10"
//           }`}
//         >
//           <form className="bg-white flex flex-col items-center justify-center px-10 h-full">
//             <h1 className="text-2xl font-bold mb-4">Sign In</h1>
//             <div className="flex my-5">
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaGoogle />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="#"
//                 className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//             <span className="text-xs">or use your email password</span>
//             <input
//               type="email"
//               placeholder="Email"
//               className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
//             />
//             <a href="#" className="text-gray-700 text-xs my-3">
//               Forget Your Password?
//             </a>
//             <button className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer">
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Toggle Container */}
//         <div
//           className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out ${
//             isActive
//               ? "-translate-x-full rounded-l-none rounded-r-[150px]"
//               : "rounded-l-[150px] rounded-r-none"
//           }`}
//         >
//           <div
//             className={`bg-gradient-to-r from-[#5c6bc0] to-[#2da0a8] text-white h-full relative -left-full w-[200%] transition-all duration-600 ease-in-out ${
//               isActive ? "translate-x-1/2" : "translate-x-0"
//             }`}
//           >
//             {/* Toggle Left */}
//             <div
//               className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 transition-all duration-600 ease-in-out ${
//                 isActive ? "translate-x-0" : "-translate-x-[200%]"
//               }`}
//             >
//               <h1 className="text-2xl font-bold">Welcome Back!</h1>
//               <p className="text-sm leading-5 my-5">
//                 Enter your personal details to use all of site features
//               </p>
//               <button
//                 onClick={toggleForm}
//                 className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold uppercase tracking-wider cursor-pointer"
//               >
//                 Sign In
//               </button>
//             </div>

//             {/* Toggle Right */}
//             <div
//               className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0 transition-all duration-600 ease-in-out ${
//                 isActive ? "translate-x-[200%]" : "translate-x-0"
//               }`}
//             >
//               <h1 className="text-2xl font-bold">Hello, Friend!</h1>
//               <p className="text-sm leading-5 my-5">
//                 Register with your personal details to use all of site features
//               </p>
//               <button
//                 onClick={toggleForm}
//                 className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold uppercase tracking-wider cursor-pointer"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you would typically validate the form and send to your backend
    // For now, we'll just redirect after form submission
    navigate("/dashboard");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you would typically validate the form and send to your backend
    // For now, we'll just redirect after form submission
    navigate("/dashboard");
  };

  // Mobile layout
  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden w-full max-w-md">
          {/* Toggle Buttons */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setIsActive(false)}
              className={`flex-1 py-4 font-medium ${
                !isActive
                  ? "text-[#2da0a8] border-b-2 border-[#2da0a8]"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsActive(true)}
              className={`flex-1 py-4 font-medium ${
                isActive
                  ? "text-[#2da0a8] border-b-2 border-[#2da0a8]"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Forms Container */}
          <div className="relative h-full min-h-[500px] overflow-hidden">
            {/* Sign In Form */}
            <div
              className={`absolute top-0 left-0 w-full p-8 transition-all duration-500 ease-in-out ${
                isActive
                  ? "opacity-0 -translate-x-full"
                  : "opacity-100 translate-x-0"
              }`}
              style={{ pointerEvents: isActive ? "none" : "auto" }}
            >
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSignIn}
              >
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                <div className="flex my-5">
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaGoogle className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaFacebookF className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaGithub className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaLinkedinIn className="text-gray-600" />
                  </a>
                </div>
                <span className="text-xs text-gray-500">
                  or use your email password
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <a
                  href="#"
                  className="text-gray-500 text-xs my-3 hover:text-[#2da0a8]"
                >
                  Forget Your Password?
                </a>
                <button
                  type="submit"
                  className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:bg-[#238e96] transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* Sign Up Form */}
            <div
              className={`absolute top-0 left-0 w-full p-8 transition-all duration-500 ease-in-out ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
              style={{ pointerEvents: !isActive ? "none" : "auto" }}
            >
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSignUp}
              >
                <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                <div className="flex my-5">
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaGoogle className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaFacebookF className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaGithub className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
                  >
                    <FaLinkedinIn className="text-gray-600" />
                  </a>
                </div>
                <span className="text-xs text-gray-500">
                  or use your email for registration
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:bg-[#238e96] transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`bg-white rounded-3xl shadow-lg relative overflow-hidden w-full max-w-4xl min-h-[480px] ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${
            isActive
              ? "left-0 w-1/2 opacity-100 z-10 translate-x-full"
              : "left-0 w-1/2 opacity-0 z-0"
          }`}
        >
          <form
            className="bg-white flex flex-col items-center justify-center px-10 h-full"
            onSubmit={handleSignUp}
          >
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <div className="flex my-5">
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${
            isActive ? "left-0 w-1/2 translate-x-full" : "left-0 w-1/2 z-10"
          }`}
        >
          <form
            className="bg-white flex flex-col items-center justify-center px-10 h-full"
            onSubmit={handleSignIn}
          >
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <div className="flex my-5">
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full flex justify-center items-center mx-1 w-10 h-10"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs">or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
              required
            />
            <a href="#" className="text-gray-700 text-xs my-3">
              Forget Your Password?
            </a>
            <button
              type="submit"
              className="bg-[#2da0a8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out ${
            isActive
              ? "-translate-x-full rounded-l-none rounded-r-[150px]"
              : "rounded-l-[150px] rounded-r-none"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-[#5c6bc0] to-[#2da0a8] text-white h-full relative -left-full w-[200%] transition-all duration-600 ease-in-out ${
              isActive ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Toggle Left */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 transition-all duration-600 ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm leading-5 my-5">
                Enter your personal details to use all of site features
              </p>
              <button
                onClick={toggleForm}
                className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold uppercase tracking-wider cursor-pointer"
              >
                Sign In
              </button>
            </div>

            {/* Toggle Right */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0 transition-all duration-600 ease-in-out ${
                isActive ? "translate-x-[200%]" : "translate-x-0"
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm leading-5 my-5">
                Register with your personal details to use all of site features
              </p>
              <button
                onClick={toggleForm}
                className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold uppercase tracking-wider cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
