"use client";

import Image from "next/image";
import HeroImage from "../../../public/hero-image-2.gif";
import HeroBackgroundImage from "../../../public/hero.png";
import WatchVideoIcon from "../../../public/watch-video-icon.svg";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { TopNavbar } from "../TopNavebar";
import { HeroNav } from "../hero-nav";
import Video from "next-video";
import HeroVideo from "../../../videos/hero-video.mp4";

function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-52">
      <div className="relative flex flex-col">
        <div className="relative flex flex-col">
          <Image
            src={HeroBackgroundImage}
            alt="Hero Background"
            className="absolute top-0 left-0 min-w-full min-h-full object-cover -z-10"
          />
          <TopNavbar />
          <div className="flex flex-row-reverse gap-10 xl:gap-28 items-center ps-14 md:ps-[90px] pe-10">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="hidden lg:block mt-auto w-2/5 h-auto"
            />
            <div className="w-full lg:w-3/5 flex flex-col gap-8">
              <h1 className="text-[5.5rem] font-bold">
                Join as a Visionary Grow as a Master
              </h1>
              <h2 className="text-[2.5rem] font-bold font-baiJamjuree">
                Turn your passion into Influence and Impact
              </h2>
              <p className="text-3xl font-baiJamjuree">
                The first program in Abu Dhabi designed to empower aspiring
                content creators like you. <br />
                Learn from the pros, find your voice, craft killer content, and
                watch your online presence explode!
              </p>
              <div className="py-10 flex gap-10 items-center">
                <Link href={"#join"} tabIndex={-1}>
                  <button
                    type="button"
                    className="bg-[#29E966] text-black px-10 h-24 text-4xl rounded-full font-bold border-b-4 border-black"
                  >
                    SIGN UP NOW
                  </button>
                </Link>
                <DialogTrigger>
                  <Button className="flex text-black gap-4 justify-center items-center px-10 h-24 text-4xl rounded-full">
                    <Image src={WatchVideoIcon} alt="s" className="h-24" />
                    Watch video
                  </Button>
                  <ModalOverlay
                    isDismissable
                    className={
                      "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-50 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-sm"
                    }
                  >
                    <Modal
                      isDismissable
                      className={
                        "max-w-[66%] max-h-[90%] aspect-[9/16] h-screen rounded-2xl bg-white overflow-hidden dark:bg-zinc-800/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] text-left align-middle text-slate-700 dark:text-zinc-300 shadow-2xl bg-clip-padding animate-zoomin"
                      }
                    >
                      <Dialog className="h-full w-full outline-none">
                        <Video
                          src={HeroVideo}
                          autoPlay
                          disablePictureInPicture
                          style={{
                            width: "100",
                            height: "100%",
                            aspectRatio: "9/16",
                          }}
                        />
                      </Dialog>
                    </Modal>
                  </ModalOverlay>
                </DialogTrigger>
              </div>
            </div>
          </div>
          <div className="w-full px-[90px]">
            <div className="w-full h-0.5 bg-black" />
          </div>
        </div>

      </div>
    </section>
  );
}

export { HeroSection };
