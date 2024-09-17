import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import FacebookImage from "../../../public/facebook.svg";
import InstagramImage from "../../../public/instagram.svg";
import Influencer1Image from "../../../public/instructors/instructor-1.png";
import Influencer2Image from "../../../public/instructors/instructor-2.png";
import Influencer3Image from "../../../public/instructors/instructor-3.png";
import Influencer5Image from "../../../public/instructors/instructor-5.png";
import Influencer6Image from "../../../public/instructors/instructor-6.png";
import Influencer7Image from "../../../public/instructors/instructor-7.png";

import SnapchatImage from "../../../public/snapchat.svg";
import TiktokImage from "../../../public/tiktok.svg";
import XImage from "../../../public/x.svg";
import YoutubeImage from "../../../public/youtube.svg";
import { SectionContent } from "../section-content";

const InstructorCard = ({
  image,
  name,
  followers,
  title,
  instagramLink,
  youtubeLink,
  tiktokLink,
  xLink,
  facebookLink,
  snapchatLink,
  className,
}: {
  image: StaticImageData;
  name: string;
  followers?: string;
  instagramLink?: string;
  youtubeLink?: string;
  tiktokLink?: string;
  xLink?: string;
  facebookLink?: string;
  snapchatLink?: string;
  title?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative bg-[#A4ED00] rounded-t-full w-[25rem] aspect-[2/3] overflow-hidden",
        className,
      )}
    >
      <Image
        src={image}
        alt="Influencer Image"
        className="absolute w-full object-cover bottom-0"
      />
      <div className="flex flex-col mt-auto py-7 gap-6 items-center justify-center z-10 bg-gradient-to-t from-black">
        <h3 className="text-2xl text-white font-bold w-min text-center uppercase">
          {name}
        </h3>
        {title ? (
          <h3 className="text-xl text-center px-16 text-white font-bold">
            {title}
          </h3>
        ) : (
          <div className="flex z-20 px-16 w-full justify-center gap-11 h-7">
            {instagramLink ? (
              <Link href={instagramLink} target="_blank">
                <Image
                  src={InstagramImage}
                  alt="Instagram Logo"
                  className="h-7"
                />
              </Link>
            ) : null}
            {youtubeLink ? (
              <Link href={youtubeLink} target="_blank">
                <Image src={YoutubeImage} alt="Youtube Logo" className="h-7" />
              </Link>
            ) : null}
            {tiktokLink ? (
              <Link href={tiktokLink} target="_blank">
                <Image src={TiktokImage} alt="Tiktok Logo" className="h-7" />
              </Link>
            ) : null}
            {xLink ? (
              <Link href={xLink} target="_blank">
                <Image src={XImage} alt="X Logo" className="h-7" />
              </Link>
            ) : null}
            {facebookLink ? (
              <Link href={facebookLink} target="_blank">
                <Image
                  src={FacebookImage}
                  alt="Facebook Logo"
                  className="h-7"
                />
              </Link>
            ) : null}
            {snapchatLink ? (
              <Link href={snapchatLink} target="_blank">
                <Image
                  src={SnapchatImage}
                  alt="Snapchat Logo"
                  className="h-7"
                />
              </Link>
            ) : null}
          </div>
        )}

        {followers ? (
          <h4 className="text-white font-bold text-xl">{followers}</h4>
        ) : null}
      </div>
    </div>
  );
};
function InstructorsSection() {
  return (
    <section id="instructors" className={cn("bg-white scroll-mt-52")}>
      <SectionContent className={"py-36 flex flex-col items-center"}>
        <h2 className="text-7xl font-bold pb-12">The Instructors</h2>
        <Marquee speed={100} pauseOnHover>
          <div className="flex gap-10 w-full ps-14 md:ps-[90px] [&>*:nth-child(even)]:rounded-t-none [&>*:nth-child(even)]:rounded-b-full">
            <InstructorCard
              image={Influencer3Image}
              name="Taline AlRasheed"
              followers="329K followers"
              instagramLink="https://www.instagram.com/taline.mov/"
              tiktokLink="https://www.tiktok.com/@taline.mov?_r=1"
              className="bg-[#F136E6]"
            />
          <InstructorCard
              image={Influencer6Image}
              name="Maitha Mohammed"
              followers="949K followers"
              instagramLink="https://www.instagram.com/mythjourney/?hl=en"
              youtubeLink="https://www.youtube.com/@Mythjourney"
              tiktokLink="https://www.tiktok.com/@mythjourney?lang=en"
              xLink="https://x.com/mythjourney?lang=en"
              className="bg-[#DAD6F7]"
            />
            <InstructorCard
              image={Influencer1Image}
              name="Bader AlEssa"
              followers="720K followers"
              instagramLink="https://www.instagram.com/bonabeel/?hl=en"
              youtubeLink="https://www.youtube.com/@RichterCreativekw"
              tiktokLink="https://www.tiktok.com/@bonabeel"
              className="bg-[#86FABC]"
            />
         <InstructorCard
              image={Influencer2Image}
              name="Alex Ghanem"
              title="Brand Partnerships & Talent Management Director"
              className="bg-[#86FABC]"
            />
            <InstructorCard
              image={Influencer5Image}
              name="Riham Alhamimi"
              followers="1.7M followers"
              instagramLink="https://www.instagram.com/vl0sca/"
              youtubeLink="https://m.youtube.com/@vl0sca"
              tiktokLink="https://www.tiktok.com/@vl0sca?_t=8iy9DJHGEae&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaasu3v29NjQIouTdKCNFqEB3pTBINNZduqW_Uujc8-b2vr0tEXy54MhAdQ_aem_Ysko7PTfs9xc36dPYE_92A"
              className="bg-[#A4ED00]"
            /> 
            
            <InstructorCard
            image={Influencer7Image}
            name="Khalid AlAmeri"
            followers="21.3M followers"
            instagramLink=" https://www.instagram.com/khalidalameri/?hl=en"
           facebookLink="https://www.facebook.com/khalidalameri/"
                youtubeLink=" https://www.youtube.com/khalidalameri"
            tiktokLink="https://www.tiktok.com/@khalidalameri?lang=en"
            xLink=" https://www.threads.net/@khalidalameri?hl=en"
              className="bg-[#DAD6F7]"
            />
        
          </div>
        </Marquee>
      </SectionContent>
    </section>
  );
}

export { InstructorsSection as InfluencerSection };
