import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Backend Engineering.", "API Development.", "Software Developer.", "Full-Stack Web Development.", "Cloud & Solution Deployment."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rahul Bhola</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a backend-focused software engineer skilled in building scalable, reliable, and maintainable systems using C#, .NET Core, ASP.NET MVC, Web API, and SQL Server. 
          With strong experience across React, Angular, and modern frontend workflows, I deliver complete end-to-end features that integrate seamlessly with backend services. 
          I work extensively with Azure and DevOps pipelines to deploy secure, automated, and cloud-ready solutions. 
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
