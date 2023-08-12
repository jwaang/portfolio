"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { Experience } from "@/typings";
import dayjs from "dayjs";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow:hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">&nbsp;Experience</h3>

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
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default Experience;
