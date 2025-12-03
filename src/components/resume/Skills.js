import React from "react";
import { motion } from "framer-motion";

const skillsLeft = [
  { name: "C#", pct: 95 },
  { name: "C++", pct: 90 }, // added
  { name: ".NET Core / ASP.NET", pct: 92 },
  { name: "Data Structures & Algorithms", pct: 88 },
  { name: "SQL Server (T-SQL, SPs)", pct: 90 },
  { name: "Entity Framework Core", pct: 88 },
  { name: "Python", pct: 70 },
];

const skillsRight = [
  { name: "React.js / TypeScript", pct: 92 },
  { name: "Angular", pct: 80 },
  { name: "JavaScript (ES6+)", pct: 85 },
  { name: "Azure (App Services, Functions)", pct: 85 },
  { name: "CI/CD (Azure DevOps)", pct: 85 },
  { name: "Git / GitHub", pct: 90 },
];

const tools = [
  { name: "Postman", pct: 90 },
  { name: "Swagger / API Docs", pct: 85 },
  { name: "Docker (basic)", pct: 70 },
  { name: "MongoDB", pct: 75 },
  { name: "Tailwind / Bootstrap", pct: 88 },
  { name: "Jenkins", pct: 85 },        // added
  { name: "Jira", pct: 90 },           // added
  { name: "TFS / Azure DevOps (classic)", pct: 80 }, // added TFS
  { name: "Scrum / Agile (Scrum Master experience)", pct: 80 }, // added
];

const SkillBar = ({ name, pct, delay = 0 }) => {
  return (
    <div className="overflow-hidden" role="listitem" aria-label={`${name} ${pct}%`}>
      <p className="text-sm uppercase font-medium">{name}</p>

      <div className="w-full h-2 bg-opacity-10 bg-white rounded-md inline-flex mt-2 relative">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay }}
          className="h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
          style={{ width: `${pct}%` }}
        >
          <span className="absolute -top-7 right-0 text-xs font-medium">{pct}%</span>
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Core & Backend</h2>
        </div>

        <div className="mt-6 w-full flex flex-col gap-6">
          {skillsLeft.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} delay={0.05 * i} />
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Frontend, Cloud & Tools</h2>
        </div>

        <div className="mt-6 w-full flex flex-col gap-6">
          {skillsRight.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} delay={0.05 * i} />
          ))}

          <div className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Other Tools & Processes</h3>
            <div className="flex flex-col gap-4">
              {tools.map((t, i) => (
                <SkillBar key={t.name} name={t.name} pct={t.pct} delay={0.05 * i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;


// import React from 'react'
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Programming Skills</h2>
//         </div>
//         <div className='className="mt-14 w-full flex flex-col gap-6'>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">C/C++</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Java</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Data Structure And Algorithm</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">85%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">PYTHON</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Excel</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">R Programming</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">70%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Tableau</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Predictive Analysis</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">65%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Big Data</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">75%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Technology/Data Management</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">React</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">HTML 5</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">CSS3</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">75%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">SOFTWARE</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">flutter</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">75%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Git/Github</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">85%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">SQL/MYSQL</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">MONGODB/ POSTMAN/ NODEJS</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">75%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Skills;