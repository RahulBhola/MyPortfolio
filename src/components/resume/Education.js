import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part two */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience & Training</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full min-h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Capgemini Technology Services Pvt. Ltd. – Mumbai, India"
            result="India"
            des={[
              "Designed and developed scalable backend solutions using C#, .NET Core, ASP.NET MVC, and Web API following SOLID principles and clean architecture.",
              "Built and optimized RESTful APIs supporting 100K+ daily users, improving performance and maintainability.",
              "Integrated React.js and Angular applications with REST APIs, ensuring seamless full-stack functionality.",
              "Optimized SQL Server queries, stored procedures, and triggers; improved overall data performance by 40%.",
              "Developed modular, reusable UI components using TypeScript, Bootstrap, and Tailwind CSS to accelerate delivery.",
              "Automated deployments using Azure and CI/CD pipelines, increasing release consistency and reducing manual errors.",
              "Collaborated with global Agile/Scrum teams (PMs, Architects, QA) to deliver business-focused solutions.",
              "Implemented JWT authentication, security best practices, and API documentation using Swagger.",
              "Provided production support by diagnosing and resolving API, database, and application-level issues efficiently.",
            ]}
          />

          <ResumeCard
            title="Competitive Coding"
            subTitle="CipherSchools – Jun–Jul 2023"
            result="India"
            des={[
              "Participated in focused competitive programming challenges to improve algorithmic thinking.",
              "Collaborated with peers and mentors to solve timed problems and optimize solutions.",
            ]}
          />

          {/* Additional entries (commented out) can be re-added as needed */}
        </div>
      </div>
      {/* part one */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full min-h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="Lovely Professional University (2020 - 2024)"
            result="79.2%"
            des={[
              "Completed B.Tech in Computer Science with focus on software engineering and system design.",
              "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Software Architecture.",
              "University projects included backend services, REST API development, and full-stack integrations.",
            ]}
          />

          <ResumeCard
            title="12th"
            subTitle="Green Land Convent School (2018 - 2020)"
            result="79.0%"
            des={[
              "Higher secondary education with emphasis on core science subjects.",
              "Developed foundational problem-solving and analytical skills.",
            ]}
          />

          <ResumeCard
            title="10th"
            subTitle="Green Land Convent School (2018)"
            result="92%"
            des={[
              "Secondary education with strong academic performance.",
              "Built discipline and study habits that supported higher education success.",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

// import React from 'react'
// import { motion } from 'framer-motion';
// import ResumeCard from './ResumeCard';

// const Education = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       {/* part one */}
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2004 - 2024</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="BTech in Computer Science And Engineering"
//             subTitle="Lovely Professional University (2020 - 2024)"
//             result="79.2%"
//             des="The training provided by universities in order to prepare people to work in various sectors of the technology or areas of culture."
//           />
//           <ResumeCard
//             title="12th"
//             subTitle="Green Land Convent School (2018 - 2020)"
//             result="79.0%"
//             des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
//           />
//           <ResumeCard
//             title="10th"
//             subTitle="Green Land Convent School (2018)"
//             result="92%"
//             des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
//           />
//         </div>
//       </div>
//       {/* part Two */}

//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Competitive Coding"
//             subTitle="CipherSchools - Jun-July (2023)"
//             result="India"
//             des="Participants at Cipher School share a profound commitment to their cohorts and the individuals that comprise them."
//           />
//           <ResumeCard
//             title="Flutter"
//             subTitle="Programming Pathshala - Jan-Feb (2023)"
//             result="India"
//             des="Learn Flutter and Dart to built amazing apps for all Devices. Through this I am able to work with team."
//           />
//           <ResumeCard
//             title="Data Structure and Algorithm"
//             subTitle="GeeksforGeeks - June-July (2022)"
//             result="India"
//             des="Learn Data Structure and algorithm for Basic to Advance Level. This helps me in inproving my logic building and brush up concepts of DSA."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Education;

