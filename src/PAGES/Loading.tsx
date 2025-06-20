// import React, { useState, useEffect } from 'react';

// const LoadingAnimation = ({ isExiting }: { isExiting: boolean }) => {
//   const ballStyle = {
//     width: '10px',
//     height: '10px',
//     margin: '10px auto',
//     borderRadius: '50px',
//     backgroundColor: '#ffffff', // White balls on blue background
//   };

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: '#71b1d5', // Changed to light blue background
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       opacity: isExiting ? 0 : 1,
//       transition: 'opacity 0.5s ease-out',
//       zIndex: 1000,
//       pointerEvents: 'none'
//     }}>
//       <div style={{
//         width: '200px',
//         height: '100px',
//         paddingTop: '0px',
//         margin: '0 auto',
//       }}>
//         {/* Ball 1 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'right 1s infinite ease-in-out'
//         }} />
//         {/* Ball 2 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'left 1.1s infinite ease-in-out'
//         }} />
//         {/* Ball 3 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'right 1.05s infinite ease-in-out'
//         }} />
//         {/* Ball 4 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'left 1.15s infinite ease-in-out'
//         }} />
//         {/* Ball 5 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'right 1.1s infinite ease-in-out'
//         }} />
//         {/* Ball 6 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'left 1.05s infinite ease-in-out'
//         }} />
//         {/* Ball 7 */}
//         <div style={{
//           ...ballStyle,
//           animation: 'right 1s infinite ease-in-out'
//         }} />
//       </div>

//       <style>
//         {`
//           @keyframes right {
//             0% { transform: translateX(-15px); }
//             50% { transform: translateX(15px); }
//             100% { transform: translateX(-15px); }
//           }
//           @keyframes left {
//             0% { transform: translateX(15px); }
//             50% { transform: translateX(-15px); }
//             100% { transform: translateX(15px); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const LoadingPage = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsExiting(true);
      
//       // Wait for fade-out animation to complete before unmounting
//       const unmountTimer = setTimeout(() => {
//         setIsLoading(false);
//       }, 500); // Match this with the transition duration

//       return () => clearTimeout(unmountTimer);
//     }, 1000); // Changed to 1 second (fade starts at 1s, completes at 1.5s)

//     return () => clearTimeout(loadingTimer);
//   }, []);

//   return (
//     <>
//       {isLoading && <LoadingAnimation isExiting={isExiting} />}
//       <div style={{
//         opacity: isLoading ? 0 : 1,
//         transition: 'opacity 0.5s ease-in',
//       }}>
//         {children}
//       </div>
//     </>
//   );
// };

// export default LoadingPage;


// import React, { useState, useEffect } from 'react';

// const LoadingAnimation = ({ isExiting }: { isExiting: boolean }) => {
//   const ballStyle = {
//     width: '10px',
//     height: '10px',
//     margin: '10px auto',
//     borderRadius: '50px',
//     backgroundColor: '#ffffff',
//   };

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(90deg, #3a7bd5, #00d2ff, #3a7bd5)',
//       backgroundSize: '200% 100%',
//       animation: 'gradientShift 3s ease infinite',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       opacity: isExiting ? 0 : 1,
//       transition: 'opacity 0.5s ease-out',
//       zIndex: 1000,
//       pointerEvents: 'none'
//     }}>
//       <div style={{
//         width: '200px',
//         height: '100px',
//         margin: '0 auto',
//       }}>
//         {/* Balls remain the same */}
//         <div style={{ ...ballStyle, animation: 'right 1s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'left 1.1s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'right 1.05s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'left 1.15s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'right 1.1s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'left 1.05s infinite ease-in-out' }} />
//         <div style={{ ...ballStyle, animation: 'right 1s infinite ease-in-out' }} />
//       </div>

//       <style>
//         {`
//           @keyframes right {
//             0% { transform: translateX(-15px); }
//             50% { transform: translateX(15px); }
//             100% { transform: translateX(-15px); }
//           }
//           @keyframes left {
//             0% { transform: translateX(15px); }
//             50% { transform: translateX(-15px); }
//             100% { transform: translateX(15px); }
//           }
//           @keyframes gradientShift {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const LoadingPage = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsExiting(true);
//       const unmountTimer = setTimeout(() => {
//         setIsLoading(false);
//       }, 500);
//       return () => clearTimeout(unmountTimer);
//     }, 1000);

//     return () => clearTimeout(loadingTimer);
//   }, []);

//   return (
//     <>
//       {isLoading && <LoadingAnimation isExiting={isExiting} />}
//       <div style={{
//         opacity: isLoading ? 0 : 1,
//         transition: 'opacity 0.5s ease-in',
//       }}>
//         {children}
//       </div>
//     </>
//   );
// };

// export default LoadingPage;








// import React from 'react';
// import { useState, useEffect } from 'react';

// const LoadingAnimation = ({ isExiting }: { isExiting: boolean }) => {
//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(90deg, #3a7bd5, #00d2ff, #3a7bd5)',
//       backgroundSize: '200% 100%',
//       animation: 'gradientShift 3s ease infinite',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       opacity: isExiting ? 0 : 1,
//       transition: 'opacity 0.5s ease-out',
//       zIndex: 1000,
//       pointerEvents: 'none'
//     }}>
//       <div id="load" style={{
//         width: '600px',
//         height: '36px',
//         overflow: 'visible',
//         userSelect: 'none',
//         cursor: 'default',
//         position: 'absolute',
//         top: '40%'
//       }}>
//         {['R', 'E', 'E', 'N', 'I', 'G', 'O', 'Y'].map((letter, index) => (
//           <div 
//             key={index}
//             style={{
//               position: 'absolute',
//               width: '40px',
//               height: '50px',
//               opacity: 0,
//               fontFamily: 'Helvetica, Arial, sans-serif',
//               animation: `move 2s linear infinite ${index * 0.2}s`,
//               transform: 'rotate(180deg)',
//               color: '#000000',
//               fontWeight: 'bold',
//               fontSize: '24px'
//             }}
//           >
//             {letter}
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes move {
//             0% {
//               left: 0;
//               opacity: 0;
//             }
//             35% {
//               left: 41%;
//               transform: rotate(0deg);
//               opacity: 1;
//             }
//             65% {
//               left: 59%;
//               transform: rotate(0deg);
//               opacity: 1;
//             }
//             100% {
//               left: 100%;
//               transform: rotate(-180deg);
//               opacity: 0;
//             }
//           }
//           @keyframes gradientShift {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const LoadingPage = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsExiting(true);
//       const unmountTimer = setTimeout(() => {
//         setIsLoading(false);
//       }, 500);
//       return () => clearTimeout(unmountTimer);
//     }, 2200); // Increased to 3000ms to see full animation

//     return () => clearTimeout(loadingTimer);
//   }, []);

//   return (
//     <>
//       {isLoading && <LoadingAnimation isExiting={isExiting} />}
//       <div style={{
//         opacity: isLoading ? 0 : 1,
//         transition: 'opacity 0.5s ease-in',
//       }}>
//         {children}
//       </div>
//     </>
//   );
// };

// export default LoadingPage;


import React from 'react';
import { useState, useEffect } from 'react';

const LoadingAnimation = ({ isExiting }: { isExiting: boolean }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, #3a7bd5, #00d2ff, #3a7bd5)',
      backgroundSize: '200% 100%',
      animation: 'gradientShift 3s ease 1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: isExiting ? 0 : 1,
      transition: 'opacity 0.5s ease-out',
      zIndex: 1000,
      pointerEvents: 'none'
    }}>
      <div id="load" style={{
        width: '500px',
        height: '50px',
        marginLeft: '-100px',
        overflow: 'visible',
        userSelect: 'none',
        cursor: 'default',
        position: 'absolute',
        top: '50%'
      }}>
        {['R', 'E', 'E', 'N', 'I', 'G', 'O', 'Y'].map((letter, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              width: '60px',
              height: '50px',
              opacity: 0,
              fontFamily: 'Helvetica, Arial, sans-serif',
              animation: `move 1.5s linear 1 ${index * 0.2}s`,
              transform: 'rotate(180deg)',
              color: '#003366',
              fontWeight: 'bold',
              fontSize: '35px',
              letterSpacing:'1px'
            }}
          >
            {letter}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes move {
            0% {
              left: 0;
              opacity: 0;
            }
            35% {
              left: 41%;
              transform: rotate(0deg);
              opacity: 1;
            }
            65% {
              left: 59%;
              transform: rotate(0deg);
              opacity: 1;
            }
            100% {
              left: 100%;
              transform: rotate(-180deg);
              opacity: 0;
            }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

const LoadingPage = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exiting after the animation completes (2s for letters + buffer)
    const loadingTimer = setTimeout(() => {
      setIsExiting(true);
      const unmountTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Match this with the opacity transition duration
      return () => clearTimeout(unmountTimer);
    }, 2500); // 2s animation + 0.5s buffer

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation isExiting={isExiting} />}
      <div style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease-in',
      }}>
        {children}
      </div>
    </>
  );
};

export default LoadingPage;