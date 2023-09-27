"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { Experience } from "@/typings";
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  const [idx, setIdx] = useState(0);

  const scroll = (idx: number) => {
    const element = document.getElementById(`experience_card_${idx}`);
    setIdx(idx);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreviousClick = () => {
    scroll(idx === 0 ? experiences.length - 1 : idx - 1);
  };
  const handleNextClick = () => {
    scroll(idx === experiences.length - 1 ? 0 : idx + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow:hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl invisible md:visible">&nbsp;Experience</h3>

      <div className="visible absolute flex w-full justify-between px-1 cursor-pointer">
        <ChevronLeftIcon className="h-8 w-8 text-gray-500" onClick={handlePreviousClick} />
        <ChevronRightIcon className="h-8 w-8 text-gray-500" onClick={handleNextClick} />
      </div>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-80">
        {experiences
          .sort((a, b) => {
            if (dayjs(a.dateStarted) < dayjs(b.dateStarted)) {
              return -1;
            }
            if (dayjs(a.dateStarted) > dayjs(b.dateStarted)) {
              return 1;
            }
            return 0;
          })
          .map((experience, i) => (
            <ExperienceCard key={experience._id} experience={experience} id={`experience_card_${i}`} />
          ))}
      </div>
    </motion.div>
  );
}

export default Experience;
