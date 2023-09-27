"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const { heroImage, role, typewriterWords } = pageInfo;

  const [text] = useTypewriter({
    words: typewriterWords,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto object-cover">
        <Image fill className="rounded-full" src={urlFor(heroImage).url()} alt="Hero image" />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{role}</h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
