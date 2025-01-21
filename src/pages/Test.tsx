// import React from "react";

// import ProgressBar from "@components/ProgressBar";
// import SliderGrid from "@components/SliderGrid";
// import Teams from "@components/Teams";
// import Video1 from "assets/video/desktop-layer-animation__1_.webm";
// import SolutionsGrid from "@components/SolutionGrid";
// import SwipeTextSilder from "@components/SwipeTextSilder";
// import HasImgCtx from "@components/HasImgCtx";
// import ScrollChapters from "@components/ScrollChapter";
// import MainImg from "assets/image/main_img.png";
// import MainSmImg from "assets/image/main_sm_img.png";
// import BtnArrowWhite from "assets/image/btn_arrow_white.svg";
// import WhoWeAreBigArrow from "assets/image/who_we_are_big_arrow.svg";
// import WhyChooseUs from "@components/WhyChooseUs";
// const Dashboard = () => {
//   return (
//     <div>
//       <div className="styles_layout" style={{ marginTop: 0 }}>
//         {/* Design Your Financial Future with ALGOLAB */}
//         <div
//           style={{
//             backgroundColor: "#3260E7",
//             width: "100%",
//           }}
//         >
//           <div
//             className="styles_section"
//             style={{
//               marginTop: 0,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               paddingTop: 124,
//               paddingBottom: 60,
//             }}
//           >
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <h1
//                 style={{
//                   fontWeight: "400",
//                   fontSize: 80,
//                   textAlign: "left",
//                   lineHeight: "120px",
//                   marginBottom: "40px",
//                   color: "#fff",
//                 }}
//               >
//                 Design Your Financial
//                 <br /> Future with &nbsp;
//                 <span
//                   style={{
//                     fontWeight: 600,
//                     padding: "4px 16px",
//                     borderRadius: 16,
//                     color: "#3260E7",
//                     backgroundColor: "#FFF",
//                     lineHeight: "108px",
//                   }}
//                 >
//                   ALGOLAB
//                 </span>
//               </h1>
//               <span
//                 style={{
//                   width: 780,
//                   color: "#fff",
//                   lineHeight: "30px",
//                   fontSize: 20,
//                   fontWeight: 400,
//                   marginBottom: 120,
//                 }}
//               >
//                 Unlock new possibilities in asset management and venture
//                 valuation with cutting-edge financial technology and
//                 personalized solutions
//               </span>
//               <button
//                 style={{
//                   width: 310,
//                   display: "inline-flex",
//                   padding: "12px 24px",
//                   boxSizing: "border-box",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: "10px",
//                   borderRadius: 5,
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 <span
//                   style={{
//                     color: "#111",
//                     fontSize: 20,
//                     fontWeight: 600,
//                     lineHeight: "30px",
//                   }}
//                 >
//                   Download Company Introduction
//                 </span>
//               </button>
//             </div>
//             <div style={{ position: "relative" }}>
//               <img src={MainImg} />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: 77,
//                   left: -195,
//                   display: "inline-flex",
//                   padding: "8px 20px 8px 8px",
//                   alignItems: "center",
//                   gap: 20,
//                   borderRadius: 16,
//                   border: "1px solid rgba(255, 255, 255, 0.80)",
//                   background: "rgba(255, 255, 255, 0.12)",
//                   boxShadow: "10px 20px 20px 0px rgba(37, 68, 157, 0.50)",
//                   backdropFilter: "blur(12px)",
//                 }}
//               >
//                 <img src={MainSmImg} />
//                 <div
//                   style={{
//                     color: "#fff",
//                     fontSize: 18,
//                     fontWeight: 600,
//                     lineHeight: "27px",
//                   }}
//                 >
//                   <p style={{ marginBottom: 18 }}>
//                     Explore Our
//                     <br />
//                     Financial Solutions
//                   </p>
//                   <button
//                     style={{
//                       padding: 7,
//                       borderRadius: "19px",
//                       border: " 2px solid #FFF",
//                     }}
//                   >
//                     <BtnArrowWhite />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Real-Time Industry Trends */}
//         <div style={{ backgroundColor: "#fff", width: "100%" }}>
//           <div
//             className="styles_section"
//             style={{
//               marginTop: 0,

//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               paddingTop: 40,
//               paddingBottom: 40,
//             }}
//           >
//             <span
//               style={{
//                 color: "#3260E7",
//                 fontSize: 20,
//                 fontWeight: 600,
//                 lineHeight: "36px",
//               }}
//             >
//               Real-Time Industry Trends
//             </span>
//           </div>
//         </div>
//         <SwipeTextSilder />
//         {/* About Us: Who we are */}
//         <div style={{ width: "100%", backgroundColor: "#fff" }}>
//           <div
//             className="styles_section"
//             style={{
//               margin: "0 auto",
//               padding: "160px 0",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//             }}
//           >
//             <div>
//               {/* About Us: Who we are */}
//               <div style={{ marginBottom: 24, width: 1040, paddingRight: 41 }}>
//                 <h2
//                   style={{
//                     fontSize: 56,
//                     color: "#111",
//                     fontWeight: 400,
//                     lineHeight: "84px",
//                     marginBottom: 28,
//                   }}
//                 >
//                   About Us:
//                   <br /> Who we are
//                 </h2>
//                 <p
//                   style={{
//                     width: 999,
//                     fontSize: 18,
//                     fontWeight: 400,
//                     color: "#111",
//                     lineHeight: "27px",
//                   }}
//                 >
//                   <b>Algolab</b> is a financial technology company offering
//                   &nbsp;
//                   <b>personalized asset management</b> for investors and&nbsp;
//                   <b>startup valuation</b> services for emerging businesses,
//                   leveraging&nbsp;<b>embedded finance</b>&nbsp;and&nbsp;
//                   <b>innovative financial technologies.</b>&nbsp; <br />
//                   We provide <b>cutting-edge tools</b> to 
//                   <b>financial institutions,</b>
//                   <b> investors,</b>
//                   and <b>startups,</b> and achieve their <b>financial goals.</b>
//                 </p>
//               </div>
//               {/* Our services include */}
//               <div
//                 style={{
//                   marginBottom: 24,
//                   fontSize: 18,
//                   fontWeight: 400,
//                   color: "#111",
//                   lineHeight: "27px",
//                 }}
//               >
//                 Our services include:
//                 <ul>
//                   <li style={{ listStyle: "inside" }}>
//                     Robo-advisory solutions for pension planning and startup
//                     valuation
//                   </li>
//                   <li style={{ listStyle: "inside" }}>
//                     Behavioral economics–based personalized asset management
//                   </li>
//                   <li style={{ listStyle: "inside" }}>
//                     Tailored investment strategies and AI-driven reporting
//                   </li>
//                   <li style={{ listStyle: "inside" }}>
//                     Global theme analysis and alternative investment solutions
//                   </li>
//                 </ul>
//               </div>
//               <div
//                 style={{
//                   fontSize: 18,
//                   fontWeight: 400,
//                   color: "#111",
//                   lineHeight: "27px",
//                 }}
//               >
//                 As we expand beyond <b>Korea into the Asian market,</b> we
//                 empower our clients to <b>make better financial decisions.</b>
//                 <br /> Experience the future of <b>finance with Algolab.</b>
//               </div>
//             </div>
//             <div>
//               <WhoWeAreBigArrow />
//             </div>
//           </div>
//         </div>
//         {/* Why Choose Us? */}
//         <WhyChooseUs />
//         {/* Introduction - ProgressBar */}
//         <div style={{ width: "100%", backgroundColor: "#111" }}>
//           <div
//             className="styles_section"
//             style={{
//               padding: "40px 0",
//               boxSizing: "border-box",
//               color: "#fff",
//             }}
//           >
//             <span style={{ fontSize: 40, fontWeight: "600" }}>
//               AI has shifted global market dynamics
//             </span>
//           </div>
//           <div className="styles_section">
//             <ProgressBar />
//           </div>
//         </div>
//         {/* Top 5 trends at a glance */}
//         <div
//           style={{
//             width: "100%",
//             backgroundColor: "#111",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <div
//             className="styles_section"
//             style={{
//               marginTop: 0,
//               padding: "40px 0",
//               boxSizing: "border-box",
//               width: "100%",
//               color: "#fff",
//             }}
//           >
//             <SliderGrid />
//           </div>
//         </div>
//         {/* The internet's fastest financial onboarding  */}
//         <div style={{ backgroundColor: "#f6f6f6" }}>
//           <div className="styles_section">
//             <video src={Video1} autoPlay loop muted></video>
//           </div>
//           <div className="styles_section" style={{ marginTop: 0 }}>
//             <div style={{ width: "calc(100% *20 / 24", margin: "0 auto" }}>
//               <h2 className="styles_section_title">
//                 The internet’s fastest financial onboarding
//               </h2>
//               <p className="styles_section_article">
//                 Get everything you need to verify identities, connect financial
//                 accounts, and onboard millions of customers. Just by collecting
//                 a phone number.
//               </p>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <a
//                   href="https://plaid.com/layer/"
//                   target="_self"
//                   className="styles_section_button"
//                 >
//                   <div className="button_wrap">
//                     <span className="movingIcon">
//                       <svg
//                         aria-hidden="false"
//                         role="img"
//                         aria-label="arrow right"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M15.0605 8.00003L9.38732 2.32684L8.32666 3.3875L12.1892 7.25L1 7.25V8.75L12.1892 8.75L8.32666 12.6126L9.38732 13.6732L15.0605 8.00003Z"
//                           fill="currentColor"
//                         ></path>
//                       </svg>
//                     </span>
//                     <span className="movingText">See it in action</span>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Fast. Safe. Simple */}
//         <div className="styles_section">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <h3
//               className="eyebrow-heading"
//               style={{
//                 fontSize: "1rem",
//                 textTransform: "uppercase",
//                 fontWeight: "600",
//               }}
//             >
//               Solutions that work together
//             </h3>
//             <h2 style={{ fontSize: "4.0rem", fontWeight: "600" }}>
//               Fast. Safe. Simple.
//             </h2>
//           </div>
//           <SolutionsGrid />
//         </div>

//         <HasImgCtx />

//         <div style={{ width: "100%", backgroundColor: "#111" }}>
//           <div className="styles_section">
//             <ScrollChapters />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
