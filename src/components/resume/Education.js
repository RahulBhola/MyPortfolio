import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science And Engineering"
            subTitle="Lovely Professional University (2020 - 2024)"
            result="79.2%"
            des="The training provided by universities in order to prepare people to work in various sectors of the technology or areas of culture."
          />
          <ResumeCard
            title="12th"
            subTitle="Green Land Convent School (2018 - 2020)"
            result="79.0%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="10th"
            subTitle="Green Land Convent School (2018)"
            result="92%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Competitive Coding"
            subTitle="CipherSchools - Jun-July (2023)"
            result="India"
            des="Participants at Cipher School share a profound commitment to their cohorts and the individuals that comprise them."
          />
          <ResumeCard
            title="Flutter"
            subTitle="Programming Pathshala - Jan-Feb (2023)"
            result="India"
            des="Learn Flutter and Dart to built amazing apps for all Devices. Through this I am able to work with team."
          />
          <ResumeCard
            title="Data Structure and Algorithm"
            subTitle="GeeksforGeeks - June-July (2022)"
            result="India"
            des="Learn Data Structure and algorithm for Basic to Advance Level. This helps me in inproving my logic building and brush up concepts of DSA."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;