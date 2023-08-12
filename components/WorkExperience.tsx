"use client";

import { useRef, useState } from "react";
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
  const ref = useRef(null);

  const handlePreviousClick = () => {
    if (idx === 0) {
      return;
    }
    const element = ref.current?.children[idx - 1];
    setIdx(idx - 1);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const handleNextClick = () => {
    if (idx === experiences.length - 1) {
      return;
    }
    const element = ref.current?.children[idx + 1];
    setIdx(idx + 1);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow:hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl invisible md:visible">&nbsp;Experience</h3>

      <div className="visible md:invisible absolute flex w-full justify-between px-1">
        <ChevronLeftIcon
          className="h-8 w-8 text-gray-500 hover:text-accent-50 transition-all ease-in-out cursor-pointer"
          onClick={handlePreviousClick}
        />
        <ChevronRightIcon
          className="h-8 w-8 text-gray-500 hover:text-accent-50 transition-all ease-in-out cursor-pointer"
          onClick={handleNextClick}
        />
      </div>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-80"
        ref={ref}
      >
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
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default Experience;
