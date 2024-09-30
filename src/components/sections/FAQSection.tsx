import Image, { type StaticImageData } from "next/image";
import CousrsOverViewImage from "../../../public/course-overview-1.png";
import CousrsOverViewArrowImage from "../../../public/course-overview-arrow.svg";
import InfluencerImage from "../../../public/influencer-1.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { SectionContent } from "../section-content";

const CurriculumOverviewItem = ({
  image,
  title,
  date,
}: {
  image: StaticImageData;
  title: string;
  date: string;
}) => {
  return (
    <div className="group relative flex flex-col items-center min-w-[440px] h-[440px] rounded-xl overflow-hidden">
      <Image src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 flex flex-col gap-5 bg-gradient-to-t from-black to-100% w-full text-white items-start transition-opacity ease-in-out duration-300 pt-52 pb-10 px-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="group-hover:bg-[#A5EE00] bg-[#29E966] rounded-full py-1 px-4 text-black font-bold text-sm">
          {date}
        </p>
      </div>
    </div>
  );
};
function FAQSection() {
  return (
    <section id="faq" className="bg-[#F8F9FA] scroll-mt-52">
      <SectionContent
        className={"flex flex-col items-center py-20 gap-10 px-14 md:px-[90px]"}
      >
        <div className="flex flex-col items-start w-full text-start">
          <h3 className="text-7xl font-bold">Frequently Asked Question</h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-8"
        >
          <AccordionItem
            value="item-1"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              Does the social media branding session cover things like social media account themes?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              Yes, the social media branding session covers various aspects, including social media account themes, 
              to help participants establish a strong and cohesive online presence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              Will you manage communications with brands regarding partnership deals?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              If selected to continue with Magnitude Creative after the program, their Brand Partnerships team will manage 
              communications with brands regarding partnership deals, ensuring that exclusive creators are seen by as many brands and government entities as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              Is Destination Abu Dhabi Managed by Magnitude Creative?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              Yes, Destination Abu Dhabi is an initiative by Magnitude Creative dedicated to creating awareness about Abu Dhabis business sectors.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              Are there any script writing sessions?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              Yes, the program includes script writing sessions as part of its curriculum to help participants effectively craft compelling content.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              What is the format of the program?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              The program consists of in-person sessions held in Yas Island, Abu Dhabi. Sessions are conducted by top local and regional content creators 
              and cover various aspects of content creation, including storytelling, script writing, filming, editing, and social media branding.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              How does the program help with social media branding?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              The program offers sessions dedicated to social media branding, providing participants with the knowledge and skills to establish a strong 
              online presence, engage audiences effectively, and enhance their digital influence.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              Do I need special equipment or software to join the program?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              All you need is a device with internet access.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-8"
            className="bg-white rounded-xl px-10 py-3"
          >
            <AccordionTrigger className="text-2xl font-bold gap-5">
              In which language the sessions will be held?
            </AccordionTrigger>
            <AccordionContent className="text-2xl font-light">
              The sessions will be a mix of both English and Arabic. However, the majority of the content will be in English.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </SectionContent>
    </section>
  );
}

export { FAQSection };
