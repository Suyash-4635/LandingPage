// import React from "react";
// import "../index.css";

// const Footer = () => {
//   return (
//     <>
//       <div className="container fixed-bottom custom-footer-color">
//         <footer className="navbar navbar-expand-lg mb-4">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active text-white" aria-current="page" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="/about">
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };
// export default Footer;

import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <footer className="navbar navbar-expand-lg custom-footer-color">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
