import Image from "next/image";
import AboutProgrameImage from "../../../public/about-section.gif";
import AboutProgrameSquaresImage from "../../../public/about-section-squares.svg";
import { cn } from "@/lib/utils";
import { SectionContent } from "../section-content";

function AboutProgrameSection() {
  return (
    <section id="about" className={cn("bg-white scroll-mt-52")}>
      <SectionContent
        className={
          "px-14 md:px-[90px] pt-36 flex flex-wrap md:flex-nowrap gap-10"
        }
      >
        <div className="flex flex-col gap-10 w-full lg:w-3/5">
          <h2 className="text-7xl font-bold">About the Program:</h2>
          <p className="font-bold text-3xl leading-relaxed">
            Are you an aspiring content creator full of creative ideas,
            <br />
            but unsure of how to bring them to life? <br />
            Eager to make your mark in the digital world, but you need guidance
            and support to turn your dreams into reality?
            <br />
            <span className="italic font-normal">
              
            </span>
          </p>
          <Image
            src={AboutProgrameSquaresImage}
            alt="About Programe Squares Image"
            className="h-44 w-44"
          />
        </div>
        <Image
          src={AboutProgrameImage}
          alt="About Programe Image"
          className="w-full lg:w-2/5 object-fill"
        />
      </SectionContent>
    </section>
  );
}

export { AboutProgrameSection };
