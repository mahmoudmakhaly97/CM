"use client";
import Image from "next/image";

import UAERecidenceImage from "../../../public/uae-recidence.svg";
import AdultImage from "../../../public/18+.svg";
import LanguageImage from "../../../public/ar-en.svg";
import MaleFemalImage from "../../../public/male-female.svg";
import SkillImage from "../../../public/skill.svg";
import GrowthImage from "../../../public/growth.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContent } from "../section-content";

function WhyYouShouldApplySection() {
  return (
    <section className="bg-[#F8F9FA]">
      <SectionContent
        className={"flex flex-col items-center py-20 px-[90px] gap-7"}
      >
        <div className="flex flex-col items-center text-center gap-10">
          <h3 className="text-7xl font-bold">Who Should Apply</h3>
          <h3 className="text-3xl font-bold">
            Do you fit the Master Criteria?
          </h3>
        </div>
        <div className="flex w-full justify-center items-center text-black py-14">
          <ol className="items-start flex flex-col sm:flex-row gap-y-10">
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={UAERecidenceImage}
                alt={"UAE Residents"}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0, 0.02, 1],
                      duration: 3,
                    }}
                  />
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0, 0.1, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  {"UAE Residents"}
                </h3>
              </div>
            </li>
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={AdultImage}
                alt={"Age range: 19-45 years old."}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0.18, 0.2, 1],
                      duration: 3,
                    }}
                  />
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0.1, 0.3, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  Age range:<br />19-45 years old.
                </h3>
              </div>
            </li>
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={LanguageImage}
                alt={"UAE Residents"}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0.38, 0.4, 1],
                      duration: 3,
                    }}
                  />{" "}
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0.3, 0.5, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  Arabic & English<br />
                  Professional speakers
                </h3>
              </div>
            </li>
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={MaleFemalImage}
                alt={"UAE Residents"}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0.58, 0.6, 1],
                      duration: 3,
                    }}
                  />{" "}
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0.5, 0.7, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  Male & Female
                </h3>
              </div>
            </li>
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={SkillImage}
                alt={"UAE Residents"}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0.78, 0.8, 1],
                      duration: 3,
                    }}
                  />{" "}
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0.7, 0.9, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  Specialized knowledge
                </h3>
              </div>
            </li>
            <li className="group flex flex-col gap-8 relative flex-1 h-full w-full">
              <Image
                src={GrowthImage}
                alt={"UAE Residents"}
                className="h-16 m-auto"
              />
              <div className="flex items-center justify-center center">
                <div className="absolute w-full flex items-center justify-center">
                  <span className="absolute z-10 flex items-start justify-center w-4 h-4 bg-gray-300 rounded-full" />
                  <motion.span
                    className="absolute z-20 flex items-start justify-center w-4 h-4 bg-[#F136E6] rounded-full  scale-0"
                    animate={{
                      scale: [0, 1, 1],
                    }}
                    transition={{
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0,
                      repeatDelay: 1,
                      times: [0.98, 1, 1],
                      duration: 3,
                    }}
                  />{" "}
                </div>
                <div className="flex relative w-full group-[:first-of-type]:justify-end">
                  <div className="flex relative group-[:first-of-type]:w-1/2 group-[:last-of-type]:w-1/2 w-full h-1">
                    <div className="h-full absolute sm:flex w-full bg-gray-300" />
                    <motion.div
                      className="h-full absolute sm:flex bg-[#F136E6] w-0"
                      animate={{
                        width: ["0%", "100%", "100%"],
                      }}
                      transition={{
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0,
                        repeatDelay: 1,
                        duration: 3,
                        times: [0.9, 1, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h3 className="text-xl font-normal text-gray-900">
                  +5000 followers<br />
                  across platforms
                </h3>
              </div>
            </li>
          </ol>
        </div>
        <Link href={"#join"} tabIndex={-1}>
          <button
            type="button"
            className="bg-[#29E966] text-black px-10 h-24 text-4xl rounded-full font-bold border-b-4 border-black"
          >
            SIGN UP NOW
          </button>
        </Link>
      </SectionContent>
    </section>
  );
}

export { WhyYouShouldApplySection };
