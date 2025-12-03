import React from "react";
import { logo, logo1 } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants';

const Footer = () => {
  return (
    <div className="w-full py-20 border-b border-gray-900 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-10">

      {/* Logo + Video CV */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-center gap-3">
          <img src={logo} alt="Profile" className="w-28 h-28 rounded-full" />
          <img src={logo1} alt="R Logo" className="w-28 h-28" />
        </div>

        {/* Video CV Button (same as your original "bannerDownload") */}
        <div>
          <span
            className="bannerDownload cursor-pointer bg-black bg-opacity-30 text-white px-6 py-3 rounded-lg shadow-shadowOne hover:bg-opacity-60 transition duration-300"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=ci6A19XMVtQ",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            Video CV
          </span>
        </div>
      </div>

      {/* Quick Links (scroll to sections) */}
      <div className="w-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
                aria-label={`Go to ${title}`}
              >
                {title}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Links */}
      <div className="w-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Social
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/iamrahulbhola/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              LinkedIn
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/RahulBhola"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              GitHub
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

          {/* leetCode */}
          <li>
            <a
              href="https://leetcode.com/u/rahul_bhola/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              leetCode
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

          {/* GeeksforGeeks */}
          <li>
            <a
              href="https://www.geeksforgeeks.org/profile/rahulbhola"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              GeeksforGeeks
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/iamrahulbhola/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              Instagram
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

          {/* YouTube */}
          <li>
            <a
              href="https://www.youtube.com/@rahulbhola5574"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg relative group cursor-pointer transition duration-300 hover:text-designColor"
            >
              YouTube
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>

        </ul>
      </div>


      {/* Contact */}
      <div className="w-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Contact
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          <li className="text-lg">Email: rahulbhola2804@gmail.com</li>
          <li className="text-lg">Location: Mumbai, India</li>
          <li className="text-lg">Phone Number: +91 8283041140</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

// import React from 'react'
// import {logo,logo1} from "../../assets/index"

// const Footer = () => {
//   return (
//     <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
//       <div className="w-full h-full flex flex-col gap-8">
//       <div className='flex flex-row items-center'>
//       <img src={logo} alt="logo" className='w-28 lgl:w-32 lgl:h-32'/>
//       <img src={logo1} alt="logo1" className='w-32 lgl:w-32 h-32'/>
//       </div>
//         <div className="flex gap-4">
//         <span className="bannerDownload" onClick={() => window.open("https://www.youtube.com/watch?v=ci6A19XMVtQ", "_blank", "noopener noreferrer")}>
//           Video CV
//         </span>
//         </div>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           Quick Link
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               About
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Portfolio
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Services
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Blog
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Contact
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           RESOURCES
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Authentication
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               System Status
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Terms of Service
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Pricing
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Over Right
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           DEVELOPERS
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Documentation
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Authentication
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               API Reference
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Support
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Open Source
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer;