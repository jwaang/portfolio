"use client"

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
const reviews = [
    {
        name: "Bari",
        img: "/bari.avif",
        about: 'Curious and loud',
    },
    {
        name: "Doja",
        img: "/doja.avif",
        about: 'Cuddly and picky',
    },
    {
        name: "Perla",
        img: "/perla.avif",
        about: 'Independent and sassy',
    },
];

const ReviewCard = ({
    img,
    name,
    about,
}: {
    img: string;
    name: string;
    about: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center justify-center gap-6">
                <div className="flex items-center justify-center shadow-2xl h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full overflow-hidden">
                    <a href={img} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={img}
                            alt={name}
                            width={60}
                            height={60}
                            className="object-cover sm:h-[80px] sm:w-[80px]"
                        />
                    </a>
                </div>
                <div className="flex flex-col w-1/2">
                    <span className="text-xl font-medium dark:text-white">
                        {name}
                    </span>
                    <span className="text-xs font-light dark:text-white/40">{about}</span>
                </div>
            </div>
        </figure>
    );
};

export function Cats() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-4">
            <Marquee pauseOnHover className="[--duration:20s]">
                {reviews.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
