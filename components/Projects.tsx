"use client";

import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow:hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl invisible md:visible">&nbsp;Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-80">
        {projects.map((project, index) => {
          const { image, title, summary, technologies, linkToBuild } = project;
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen" key={index}>
              <motion.div
                initial={{
                  y: -200,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-4/5 h-[150px] md:h-4/5 max-h-80"
              >
                <Image fill className="object-contain" src={urlFor(image).url()} alt="Project image" />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-lg md:text-4xl font-semibold text-center">
                  Project {index + 1} of {projects.length}:{" "}
                  <Link href={linkToBuild} target="_blank">
                    <span className="underline decoration-accent-50">{title}</span>
                  </Link>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {(technologies || []).map((technology) => (
                    <div className="relative h-7 w-7 md:h-10 md:w-10" key={technology._id}>
                      <Image fill src={urlFor(technology.image).url()} alt="Technology icon" />
                    </div>
                  ))}
                </div>
                <div className="overflow-y-auto max-h-[250px] sm:max-h-[500px] md:max-h-[750px]">
                  <p className="text-sm md:text-lg text-center md:text-left">{summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-accent-10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
