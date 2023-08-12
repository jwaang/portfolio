"use client";

import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const { profilePic, backgroundInformation } = pageInfo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center justify-center gap-5 md:text-left md:flex-row max-w-7xl px-10 md:justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl invisible md:visible">&nbsp;About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[500px] xl:h-[600px]"
        src={urlFor(profilePic).url()}
      />
      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here&apos;s a <span className="underline decoration-accent-50">little</span> background
        </h4>
        <div className="space-y-5">
          {backgroundInformation.map((p, i) => (
            <p key={i} className="text-xs md:text-base">
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
