import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
//import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";   , FaReact
const Media = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-5 lgl:gap-5 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" >
              <FaGithub onClick={()=> window.open("https://github.com/RahulBhola","_blank","noopener noreferrer")}/>
            </span>
            <span className="bannerIcon" onClick={()=> window.open("https://auth.geeksforgeeks.org/user/rahulbhola","_blank","noopener noreferrer")} >
            <SiGeeksforgeeks />
            </span>
            <span className="bannerIcon" onClick={()=> window.open("https://leetcode.com/rahul_bhola/","_blank","noopener noreferrer")}>
              <SiLeetcode />
            </span>
            <span className="bannerIcon" onClick={()=> window.open("https://www.instagram.com/iamrahulbhola/","_blank","noopener noreferrer")}>
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn onClick={() => window.open("https://www.linkedin.com/in/rahul-bhola-340b491b9/", "_blank", "noopener noreferrer")}/>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            DOWNLOAD RESUME
          </h2>
          <div className="flex gap-4">
            <a className="bannerDownload" href="RahulBhola.pdf" download="RahulBhola.pdf">
              Download
            </a>
          </div>
        </div>
            {/*
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            */}
      </div>
  )
}

export default Media;