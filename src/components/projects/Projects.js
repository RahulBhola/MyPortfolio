import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectZero,
  projectSeven,
  projectEight,
  projectNine
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Optimizing reomte patient monetering app"
          des="Consult doctors online, manage blood donations & requests, book lab tests, predict diabetes risk, and find specialists."
          src={projectNine}
          projectLink="https://github.com/RahulBhola/DoctorAtDoorStep"
          webLink="https://remote-patient-monitor.netlify.app/"
        />
        <ProjectsCard
          title="Face Recognition System"
          des=" Developed a robust facial recognition system using Python, incorporating data science and machine learning 
          concepts."
          src={projectSeven}
          projectLink="https://github.com/RahulBhola/FacialRecognitionSystem"
        />
        <ProjectsCard
          title="Hair Salon Website"
          des=" Developed a fully functional Website using React and tailwindcss, demonstrating proficiency in frontend 
          technologies and responsive design."
          src={projectZero}
          projectLink="https://github.com/RahulBhola/HairSalonWebsite"
          webLink="https://rahulbhola.github.io/HairSalonWebsite/"
        />
        <ProjectsCard
          title="SPOTIFY CLONE"
          des="Used React for Frontend, node and mongoDb for Backend. Postman for backend verification.
          This project allow users to upload and listen song through API."
          src={projectOne}
          projectLink="https://github.com/RahulBhola/Spotify-Clone/"
        />
        <ProjectsCard
          title="ATM-Simulator"
          des=" Created an exact ATM-Simulator with the help of Java and Java Springboot 
          Managed data with the help of MySQL for signup, Login, Deposit, Withdraw, FastCash, and Many More!"
          src={projectTwo}
          projectLink="https://github.com/RahulBhola/ATM-Simulator-Project"
        />
        <ProjectsCard
          title="Python Weather App"
          des=" Acquired and applied advanced skills in Python programming, demonstrating competence in leveraging 
          dependencies to create a sophisticated Weather App"
          src={projectEight}
          projectLink="https://github.com/RahulBhola/PythonWeatherApp"
        />
        <ProjectsCard
          title="Shortest Path Finder"
          des="Constructed an application to find Shortest Path between source and 
          Destination by using Dijkstra's algorithm. This project is taken from the reference of google maps working flow."
          src={projectThree}
          projectLink="https://github.com/RahulBhola/dijkastra-s-algorithm-project/tree/main/src"
        />
        <ProjectsCard
          title="Netflix Data Visualization"
          des=" Used Visualization tool Tableau for implementing Netflix data from Kaggle.com. It basically shows data of particular TV shows and Movie watched per year or a month."
          src={projectFour}
          projectLink="https://github.com/RahulBhola/Netflix-Data-Tableau"
        />
        <ProjectsCard
          title="Personal Portfolio"
          des="Created a personal portfolio using React, Tailwindcss, contact form details on email to website holder. Shows everything that I can do in this project."
          src={projectFive}
          projectLink="https://github.com/RahulBhola/MyPortfolio"
          webLink="https://rahulbhola.github.io/MyPortfolio/"
        />
        <ProjectsCard
          title="Sudoku Solver"
          des=" Created this project with the help of DSA (Data Structure and Algorithm), Backtracking Concept."
          src={projectSix}
          projectLink="https://github.com/RahulBhola/SudokuSolver"
        />
      </div>
    </section>
  );
};

export default Projects;
