import Image, { type StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

import CousrsOverViewArrowImage from "../../../public/course-overview/course-overview-arrow.svg";
import CousrsOverView1Image from "../../../public/course-overview/course-overview-1.png";
import CousrsOverView2Image from "../../../public/course-overview/course-overview-2.png";
import CousrsOverView3Image from "../../../public/course-overview/course-overview-3.png";
import CousrsOverView4Image from "../../../public/course-overview/course-overview-4.png";
import CousrsOverView5Image from "../../../public/course-overview/course-overview-5.png";
import CousrsOverView6Image from "../../../public/course-overview/course-overview-6.png";
import CousrsOverView7Image from "../../../public/course-overview/course-overview-7.png";
import CousrsOverView8Image from "../../../public/course-overview/course-overview-8.png";
import CousrsOverView9Image from "../../../public/course-overview/course-overview-9.jpg";
import CousrsOverView10Image from "../../../public/course-overview/course-overview-10.jpg";
import { cn } from "@/lib/utils";
import { SectionContent } from "../section-content";
import { ReactNode } from "react";

const CurriculumOverviewItem = ({
  image,
  title,
  date,
  description,
  className,
}: {
  image: StaticImageData;
  title: ReactNode;
  date: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className="group relative flex flex-col items-center w-[30rem] aspect-square rounded-xl overflow-hidden">
      <Image src={image} alt={""} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 flex flex-col gap-5 bg-gradient-to-t from-black to-100% w-full text-white items-start pt-52 pb-10 px-10">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="max-h-0 group-hover:max-h-[30rem] text-xl transition-all overflow-hidden duration-500 ease-in-out">
          {description}
        </p>
        <p
          className={cn(
            "bg-[#29E966] rounded-full py-1 px-4 text-black font-bold text-lg",
            className,
          )}
        >
          {date}
        </p>
      </div>
    </div>
  );
};
function CurriculumOverviewSection() {
  return (
    <section id="curriculum" className="bg-white scroll-mt-52">
      <SectionContent className={"flex flex-col items-center py-20 gap-7 "}>
        <div className="flex flex-col items-start w-full text-start px-14 md:px-[90px] gap-10">
          <h3 className="text-7xl font-bold">Sessions Overview</h3>
          <h3 className="text-3xl font-bold">
            Access the Number 1 Content Curriculum
          </h3>
        </div>
        <div className="flex flex-col w-full">
          <Carousel
            opts={{
              align: "start",
              skipSnaps: true,
            }}
            className="w-full flex flex-col gap-7"
          >
            <div className="flex flex-col w-full items-end text-black px-14 md:px-[90px]">
              <div className="flex gap-5">
                <CarouselPrevious>
                  <Image
                    src={CousrsOverViewArrowImage}
                    alt="previous"
                    className="h-24 w-24"
                  />
                </CarouselPrevious>
                <CarouselNext>
                  <Image
                    src={CousrsOverViewArrowImage}
                    alt="next"
                    className="h-24 w-24 rotate-180"
                  />
                </CarouselNext>
              </div>
            </div>
            <CarouselContent className="mx-14 md:mx-[90px] gap-7">
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView1Image}
                  title={"Scripting & Storytelling"}
                  date="15-Oct-24"
                  description={
                    "Master the art of crafting compelling narratives that captivate your audience and enhance your content's impact."
                  }
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView9Image}
                  title={"Scripting & Storytelling"}
                  date="17-Oct-24"
                  description={
                    "Learn how to structure your stories with precision, ensuring every piece of content resonates and engages effectively."
                  }
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView2Image}
                  title={"Filming & Editing"}
                  date="22-Oct-24"
                  description="Discover essential techniques for shooting high-quality video and seamlessly editing it to create polished, professional content"
                  className="bg-[#A5EE00]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView10Image}
                  title={"Filming & Editing"}
                  date="24-Oct-24"
                  description="Gain hands-on experience in capturing and refining visuals, transforming raw footage into captivating final products."
                  className="bg-[#A5EE00]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView3Image}
                  title={<>Workshop <br /> Script writing & Filming</>}
                  date="29-Oct-24"
                  description="Dive deep into the process of scriptwriting and filming, with practical exercises to bring your creative vision to life."
                  className="bg-[#F136E6]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView4Image}
                  title={"Podcasts & Hosting"}
                  date="31-Oct-24"
                  description="Explore the key rules for successful podcasting, from engaging hosting techniques to creating content that keeps listeners coming back."
                  className="bg-[#DAD6F7]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView5Image}
                  title={"Social Media Branding"}
                  date="05-Nov-24"
                  description="Build a strong personal brand that authentically represents you and stands out in the crowded content creation landscape."
                  className="bg-[#A5ED00]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView6Image}
                  title={"Social media strategy & Management"}
                  date="07-Nov-24"
                  description="Develop a strategic approach to managing your social media presence, optimizing content to grow and engage your audience."
                  className="bg-[#DAD6F7]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView7Image}
                  title={"Brand Partnerships & Responsibilities"}
                  date="12-Nov-24"
                  description="Learn how to navigate brand partnerships effectively, understanding the responsibilities and opportunities that come with collaboration."
                  className="bg-[#29E966]"
                />
              </CarouselItem>
              <CarouselItem>
                <CurriculumOverviewItem
                  image={CousrsOverView8Image}
                  title={"Content Creator Journey"}
                  date="14-Nov-24"
                  description="Reflect on the holistic journey of content creation, from concept to execution, and prepare for the challenges and rewards ahead."
                  className="bg-[#F136E6]"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </SectionContent>
    </section>
  );
}

export { CurriculumOverviewSection };
