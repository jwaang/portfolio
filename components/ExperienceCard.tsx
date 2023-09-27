import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import dayjs from "dayjs";

type Props = { experience: Experience; id: string };

function ExperienceCard({ experience, id }: Props) {
  const { company, companyImage, dateStarted, dateEnded, jobTitle, technologies, isCurrentlyWorkingHere, points } = experience;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-9/12 snap-center bg-[#292929] p-10 opacity-100 cursor-pointer overflow-hidden"
      id={id}
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(companyImage).url()}
        alt=""
      />

      <div className="md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{company}</h4>
        <p className="text-lg font-bold md:text-2xl mt-1">{jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {technologies.map((technology) => (
            <div className="w-6 h-6 md:h-10 md:w-10 rounded-full relative" key={technology._id}>
              <Image fill src={urlFor(technology.image).url()} alt="Technology icon" />
            </div>
          ))}
        </div>
        <p className="text-sm md:text-base uppercase py-3 md:py-5 text-gray-300">
          {dayjs(dateStarted).format("MMM YYYY")} - {isCurrentlyWorkingHere ? "Present" : dayjs(dateEnded).format("MMM YYYY")}
        </p>
        {/* <ul className="m-0 list-disc space-y-4 text-sm md:text-lg max-h-40 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-accent-80">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul> */}
      </div>
    </article>
  );
}

export default ExperienceCard;
