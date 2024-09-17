"use client";

import Video from "next-video";
import type { Asset } from "next-video/dist/assets.js";
import Image, { type StaticImageData } from "next/image";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import nadinZidaniVideo from "/videos/nadine-zidani.mp4";
import mohamedAlnaqbiVideo from "/videos/mohammed-alnaqbi.mp4";
import rayanAlraeesiVideo from "/videos/rayan-alraeesi.mp4";
import saeedAlzubaidiVideo from "/videos/saeed-alzubaidi.mp4";
import wafaYahyaVideoVideo from "/videos/wafa-yahya.mp4";
import { SectionContent } from "../section-content";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import Influencer1Image from "../../../public/testmonials/1.jpg";
import Influencer2Image from "../../../public/testmonials/2.jpg";
import Influencer3Image from "../../../public/testmonials/3.jpg";
import Influencer4Image from "../../../public/testmonials/4.jpg";
import Influencer5Image from "../../../public/testmonials/5.jpg";

const TestimonialItem = ({
  image,
  name,
  title,
  video,
}: {
  image: StaticImageData;
  name: string;
  title: string;
  video: Asset;
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      ref={hoverRef}
      className="group relative flex flex-col flex-1 items-center hover:grow-[4] md:hover:grow-[2] h-[40rem] rounded-xl transition-all ease-in-out duration-300 bg-gradient-to-tl from-[#5DD977] via-90% via-[#EFE272] to-[#F5E43F] overflow-hidden"
    >
      {isHover ? (
        <Video
          src={video}
          autoPlay
          disablePictureInPicture
          style={{ width: "100", height: "100%", aspectRatio: "9/16" }}
        />
      ) : (
        <Image src={image} alt={name} className="flex-1 w-auto object-cover" />
      )}
    </div>
  );
};
function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white scroll-mt-52">
      <SectionContent
        className={"flex flex-col items-center py-20 gap-7 px-14 md:px-[90px] "}
      >
        <div className="flex flex-col items-center text-center gap-10">
          <h3 className="text-5xl font-bold">Success Stories/Testimonials:</h3>
          <h3 className="text-7xl font-bold">Take it from our Stars!</h3>
        </div>
        <div className="flex w-full justify-between items-center text-black py-14 gap-5">
          <TestimonialItem
            image={Influencer2Image}
            name="Wafa Yahya"
            title={"Travel & Tourism"}
            video={wafaYahyaVideoVideo}
          />
          <TestimonialItem
            image={Influencer1Image}
            name="Mohammed Alnaqbi"
            title={"Cybersecurity & Tech"}
            video={mohamedAlnaqbiVideo}
          />
          <TestimonialItem
            image={Influencer5Image}
            name="Rayan AlRaeesi"
            title={"Space Science & Robotics"}
            video={rayanAlraeesiVideo}
          />
          <TestimonialItem
            image={Influencer4Image}
            name="Saeed AlZubaidi"
            title={"Education"}
            video={saeedAlzubaidiVideo}
          />
          <TestimonialItem
            image={Influencer3Image}
            name="Nadine Zidani"
            title={"Sustainibility & Entrepreneurship"}
            video={nadinZidaniVideo}
          />
        </div>
      </SectionContent>
    </section>
  );
}

export { TestimonialsSection };
