"use client";

import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useWindowSize } from "usehooks-ts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative uppercase text-black/20 tracking-widest justify-center items-center px-16 font-bold flex w-inline-block max-w-full w-min hover:text-black"
    >
      <div className="relative">
        <p className="mb-0 text-8xl">{children}</p>
        <div className="h-5 transition-[width] duration-300 bg-black w-0 group-hover:w-full" />
      </div>
    </Link>
  );
}

const HeroNav = () => {
  const { width = 0 } = useWindowSize();

  const ref = useRef<HTMLDivElement>();
  const parallaxFactor = (width - 1024) * 0.00018 + 1.9;

  return (
    <>
      <div className="sticky bg-white z-40 top-0 block lg:hidden">
        <div className="absolute left-0 flex items-center h-full bg-white/70 z-20">
          <ChevronLeft size={48} />
        </div>

        <div className="bg-white py-16 overflow-auto px-20">
          <div className="flex flex-nowrap relative w-min">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#instructors">Instructors</NavLink>
            <NavLink href="#instructors">Agenda</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#curriculum">Curriculum</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#join">JOIN</NavLink>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex items-center h-full bg-white/70 z-20">
          <ChevronRight size={48} />
        </div>
      </div>

      <div className="sticky bg-white z-40 top-0 hidden lg:block">
        <div className="absolute left-0 flex items-center h-full bg-white/70 z-20">
          <ChevronLeft size={48} />
        </div>
        <MouseParallaxContainer
          className="bg-white pt-16 pb-8 w-full"
          resetOnLeave
        >
          <MouseParallaxChild factorY={0} factorX={parallaxFactor}>
            <div className="flex flex-nowrap relative left-1/2 -translate-x-1/2 w-min">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#instructors">Instructors</NavLink>
              <NavLink href="#agenda">Agenda</NavLink>
              <NavLink href="#benefits">Benefits</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#curriculum">Curriculum</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <NavLink href="#join">JOIN</NavLink>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className="absolute right-0 top-0 flex items-center h-full bg-white/70 z-20">
          <ChevronRight size={48} />
        </div>
      </div>
    </>
  );
};

export { HeroNav };

// <div className="relative flex gap-10 bg-white">
//   <div
//     className="hidden lg:block py-16 overflow-auto scroll-smooth"
//     ref={ref}
//   >
//     <div className="flex flex-nowrap relative w-min px-16">
//       <NavLink href="#home">Home</NavLink>
//       <NavLink href="#about">About</NavLink>
//       <NavLink href="#instructors">Instructors</NavLink>
//       <NavLink href="#benefits">Benefits</NavLink>
//       <NavLink href="#testimonials">Testimonials</NavLink>
//       <NavLink href="#curriculum">Curriculum</NavLink>
//       <NavLink href="#faq">FAQ</NavLink>
//       <NavLink href="#join">JOIN</NavLink>
//     </div>
//   </div>
//   <div className="absolute right-0 flex items-center h-full bg-white/70 z-20">
//     <ChevronRight size={48} />
//   </div>
// </div>
