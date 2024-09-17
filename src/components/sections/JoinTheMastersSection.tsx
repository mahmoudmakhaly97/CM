import Image from "next/image";

import BackgroundImage from "../../../public/join-masters/join-masters-bg.png";
import { CardStack } from "../cards-stack";
import Link from "next/link";
import { SectionContent } from "../section-content";

function JoinTheMastersSection() {
  return (
    <section className="relative">
      <Image
        src={BackgroundImage}
        alt="Hero Image"
        className="absolute top-0 left-0 min-w-full min-h-full object-cover -z-10"
      />
      <SectionContent
        className={
          "relative py-36 px-14 md:px-[90px] flex flex-wrap md:flex-nowrap gap-7 items-center"
        }
      >
        <div className="flex gap-24 flex-col flex-1 items-center md:items-start justify-center w-full md:w-1/2">
          <div className="flex flex-col gap-10">
            <h2 className="text-7xl font-bold">Join the Masters!</h2>
            <p className="text-3xl font-medium">
              Our program is designed specifically for creators like you.
              <br />
              We understand your desire to learn, grow, and make a difference
              online.
            </p>
          </div>
          <Link href={"#join"} tabIndex={-1}>
            <button
              type="button"
              className="bg-[#29E966] text-black px-10 h-24 text-4xl rounded-full font-bold border-b-4 border-black"
            >
              SIGN UP NOW
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <CardStack />
        </div>
      </SectionContent>
    </section>
  );
}

export { JoinTheMastersSection };
