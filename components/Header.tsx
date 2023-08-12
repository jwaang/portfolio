"use client";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className="text-gray-500 hover:text-accent-50 transition-all ease-in-out"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer group"
        >
          {isClient && (
            <SocialIcon
              className="text-gray-500 group-hover:text-accent-50 transition-all ease-in-out"
              network="email"
              fgColor="currentColor"
              bgColor="transparent"
            />
          )}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-accent-50 transition-all ease-in-out">Get in touch</p>
        </motion.div>
      </Link>
    </header>
  );
}
