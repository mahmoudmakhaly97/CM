import Image from "next/image";
import ThankYouBackground from '../../../public/thank-you-bg.png'
import ThankYouMark from '../../../public/thank-you-mark.svg'
import LogoImage from "../../../public/logo.svg";

export default function Home() {
    return (
        <section id="thank-you" className="flex flex-col gap-32 items-center justify-center h-screen w-screen px-24 md:px-96">
            <Image
                src={ThankYouBackground}
                alt="Thank you Background"
                className="absolute top-0 left-0 w-screen h-screen object-cover -z-10"
            />

            <div className="flex flex-col gap-8 items-center justify-center">
                <h1 className="text-[5.6rem] font-bold uppercase leading-10">
                    Thank You
                </h1>
                <h2 className="text-[4rem] font-bold uppercase leading-10 text-justify">
                    for Signing Up!
                </h2>
            </div>
            <Image src={ThankYouMark} alt="Thank you Mark" className="h-28 w-28" />
            <div className="flex flex-col items-center justify-center text-center">
                <h4 className="font-baiJamjuree font-bold text-5xl">We’re excited about your interest in our program.</h4>
                <p className="font-baiJamjuree text-5xl">Stay tuned—if you’re selected, we’ll be in touch soon with the next steps!</p>
            </div>

            <div>
                <Image
                    src={LogoImage}
                    alt="Content Masters Logo"
                    priority
                    className="h-40 md:h-32 w-auto"
                />
            </div>
        </section>
    );
}
