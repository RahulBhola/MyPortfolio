import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
import { contactImg } from "../../assets/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ContactLeft = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Full Stack Developer.", "Data Analytics."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rahul Bhola</h3>
        <p className="text-lg font-normal text-gray-400">
        <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Having multiple skills like web development, strong concepts of Data Structure and Algorithm as well as Data managment skills.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 82830411140</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rahulbhola2804@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft