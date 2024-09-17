"use client";

import Image, { StaticImageData } from "next/image";
import Benefits1Image from "../../../public/benefits/benefits-1.png";
import Benefits2Image from "../../../public/benefits/benefits-2.png";
import Benefits3Image from "../../../public/benefits/benefits-3.png";
import Benefits4Image from "../../../public/benefits/benefits-4.png";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { SectionContent } from "../section-content";

const containerVariants: Variants = {
  hidden: {
    width: ["24rem", 0],
    transition: {
      duration: 0.5,
      times: [0.9, 1],
    },
  },
  active: {
    width: [0, "24rem"],
    transition: {
      duration: 0.5,
      times: [0.9, 1],
    },
  },
};

const bodyVariants: Variants = {
  hidden: {
    width: 0,
    opacity: [1, 0],
    transition: {
      duration: 0.5,
      times: [],
    },
  },
  active: {
    width: "24rem",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const borderVarients: Variants = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.5,
    },
  },
  active: {
    width: "100%",
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const BenefitsCard = ({
  image,
  name,
  isActive,
}: {
  image: StaticImageData;
  name: string;
  isActive: boolean;
}) => {
  return (
    <motion.div
      className={cn("flex flex-col gap-4")}
      variants={containerVariants}
      animate={isActive ? "active" : "hidden"}
      initial={false}
    >
      <motion.div
        className={cn("flex flex-col overflow-hidden mr-auto")}
        variants={bodyVariants}
        initial={false}
      >
        <div className="flex flex-col gap-10 w-[24rem]">
          <Image
            src={image}
            alt="Benefits Image"
            className="w-[24rem] h-[20rem] object-cover"
          />
          <p className="text-3xl font-light pb-5">{name}</p>
        </div>
      </motion.div>
      <motion.div
        className={cn("h-0.5 bg-[#707070] ms-auto")}
        variants={borderVarients}
        initial={false}
      />
    </motion.div>
  );
};
function ProgramBenefitsSection() {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section id="benefits" className="bg-white scroll-mt-52">
      <SectionContent
        className={"flex flex-col items-start py-36 px-14 md:px-[90px] gap-14 "}
      >
        <div>
          <h3 className="text-5xl font-bold">Program Benefits:</h3>
          <h3 className="text-7xl font-bold">Why Content Masters?</h3>
        </div>
        <div className="flex w-full flex-wrap gap-y-32 justify-between items-center text-black">
          <div className="flex flex-col gap-10">
            <div
              className={cn(
                "flex gap-3 items-end opacity-50 transition-all duration-300",
                activeItem === 1 ? "opacity-100" : "",
              )}
              onClick={() => setActiveItem(1)}
            >
              <span className="text-xl font-semibold">01</span>
              <button className="text-4xl font-bold">Boost Your Skills</button>
            </div>
            <div
              className={cn(
                "flex gap-3 items-end opacity-50 transition-all duration-300",
                activeItem === 2 ? "opacity-100" : "",
              )}
              onClick={() => setActiveItem(2)}
            >
              <span className="text-xl font-semibold">02</span>
              <button className="text-4xl font-bold">
                Expand Your Influence
              </button>
            </div>
            <div
              className={cn(
                "flex gap-3 items-end opacity-50 transition-all duration-300",
                activeItem === 3 ? "opacity-100" : "",
              )}
              onClick={() => setActiveItem(3)}
            >
              <span className="text-xl font-semibold">03</span>
              <button className="text-4xl font-bold">
                Engage With Communities
              </button>
            </div>
            <div
              className={cn(
                "flex gap-3 items-end opacity-50 transition-all duration-300",
                activeItem === 4 ? "opacity-100" : "",
              )}
              onClick={() => setActiveItem(4)}
            >
              <span className="text-xl font-semibold">04</span>
              <button className="text-4xl font-bold">
                Nurture Your Creativity
              </button>
            </div>
          </div>
          <div className="md:pe-32 flex flex-1 justify-center md:justify-end">
            <BenefitsCard
              image={Benefits1Image}
              name="Master content creation techniques."
              isActive={activeItem === 1}
            />
            <BenefitsCard
              image={Benefits2Image}
              name="Establish a strong online presence to inspire audiences."
              isActive={activeItem === 2}
            />
            <BenefitsCard
              image={Benefits3Image}
              name="Connect and impact specialized audiences through content."
              isActive={activeItem === 3}
            />
            <BenefitsCard
              image={Benefits4Image}
              name="Empower yourself to make a difference online."
              isActive={activeItem === 4}
            />
          </div>
        </div>
      </SectionContent>
    </section>
  );
}

export { ProgramBenefitsSection };
