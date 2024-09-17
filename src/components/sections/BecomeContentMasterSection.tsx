import Image from "next/image";
import HeroBackground from "../../../public/hero-background.svg";
import HeroImage from "../../../public/hero-image.svg";
import WatchVideoIcon from "../../../public/watch-video-icon.svg";
import BecomeContentMasterArrow from "../../../public/become-content-master-arrow.svg";
import BecomeContentMasterDecore from "../../../public/become-content-master-decore.svg";
import BecomeContentMasterHero from "../../../public/become-master-hero.png";
import Link from "next/link";
import BackgroundImage from "../../../public/become-master-bg.png";
import { SectionContent } from "../section-content";

function BecomeContentMasterSection() {
  return (
    <section className="relative">
      <Image
        src={BackgroundImage}
        alt="Hero Image"
        className="absolute top-0 left-0 min-w-full min-h-full object-cover -z-10"
      />

      <SectionContent
        className={
          "flex gap-40 relative pt-32 px-10 flex-wrap md:flex-nowrap overflow-hidden"
        }
      >
        <Image
          src={BecomeContentMasterDecore}
          alt="Hero Background"
          className="absolute bottom-0 right-1/4 -translate-x-1/2 z-30 w-96 hidden md:block"
        />
        <div className="md:ps-[90px] flex flex-col gap-16 flex-1">
          <div>
            <h1 className="text-9xl font-bold text-start">
              Become a Master today
              <span className="w-7 inline-block" />
              <Image
                src={BecomeContentMasterArrow}
                alt="Become Content Master Arrow"
                className="inline-block h-24 w-24"
              />
            </h1>
          </div>
          <div className="py-10 flex gap-10 items-center justify-center">
            <Link href={"#join"} tabIndex={-1}>
              <button
                type="button"
                className="bg-[#29E966] text-black px-10 h-24 text-4xl rounded-full font-bold border-b-4 border-black"
              >
                SIGN UP NOW
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={BecomeContentMasterHero}
          alt="Hero Image"
          className="flex-1 object-cover w-auto"
        />
      </SectionContent>
    </section>
  );
}

export { BecomeContentMasterSection };
