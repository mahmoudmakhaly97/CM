import Image from "next/image";
import LogoImage from "../../public/logo.svg";
import MagnitudeImage from "../../public/magnitude-logo.svg";

function TopNavbar() {
  return (
    <div className="py-10 md:py-[50px] px-[92px] flex justify-center md:justify-between">
      <div className="flex flex-col gap-4">
        <Image
          src={LogoImage}
          alt="Content Masters Logo"
          priority
          className="h-40 md:h-20"
        />
        <div className="flex gap-3 items-center justify-center">
          <span className="font-semibold font-baiJamjuree w-max">
            Powerd By
          </span>
          <Image
            src={MagnitudeImage}
            alt="Content Masters Logo"
            priority
            className="w-52 md:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export { TopNavbar };
