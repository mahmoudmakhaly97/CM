import Image, { StaticImageData } from "next/image";
import FooterPhoneImage from "../../public/footer-phone.svg";
import FooterImage from "../../public/footer-image.svg";
import FooterFacebookImage from "../../public/footer-facebook.png";
import FooterInstagramImage from "../../public/footer-instagram.png";
import FooterLinkedInImage from "../../public/footer-linkedin.png";
import FooterTwitterImage from "../../public/footer-twitter.png";
import FooterYoutubeImage from "../../public/footer-youtube.png";
import FooterTiktokImage from "../../public/footer-ticktok.png";
import Link from "next/link";

function Footer() {
  return (
    <section className="flex flex-wrap justify-center md:justify-between py-20 gap-7 gap-y-10 bg-black px-14 md:px-[90px] text-white">
      <div>
        <div className="flex items-center gap-5">
          <Image
            src={FooterPhoneImage}
            alt="footer phone image"
            className="h-16 w-16"
          />
          <div>
            <h2 className="font-bold text-lg">
              Office No. 402 | Level 4 | Building No.4 | Yas Creative Hub | Yas
              Island | Abu Dhabi | U.A.E.
            </h2>
            <h2 className="text-lg font-light">
              <span className="font-bold">Phone</span> +971 2 309 4655 | Email:
              Talent@magnitudedigital.ae
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start">
          <div className="h-16 w-16" />
          <div>
            <Image
              src={FooterImage}
              alt="footer phone image"
              className="h-24 max-w-full w-auto"
            />
            <p className="font-extralight">
              COPYRIGHTS © 2022 MAGNITUDE DIGITAL - AMPLIFY YOUR GROWTH
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-auto mb-8">
        <Link
          href={"https://www.facebook.com/profile.php?id=61563796961207"}
          target="_blank"
        >
          <Image src={FooterFacebookImage} alt="" className="h-12 w-12" />
        </Link>
        <Link
          href={
            "https://www.instagram.com/contentmastershub?igsh=ODZjeGFsbnc0Znk="
          }
          target="_blank"
        >
          <Image src={FooterInstagramImage} alt="" className="h-12 w-12" />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/showcase/104768721/admin/settings/manage-admins/"
          }
          target="_blank"
        >
          <Image src={FooterLinkedInImage} alt="" className="h-12 w-12" />
        </Link>
        <Link href={"https://x.com/contentmaster_H"} target="_blank">
          <Image src={FooterTwitterImage} alt="" className="h-12 w-12" />
        </Link>
        <Link
          href={"https://www.youtube.com/@ContentMastersHub"}
          target="_blank"
        >
          <Image src={FooterYoutubeImage} alt="" className="h-12 w-12" />
        </Link>
        <Link
          href={
            "https://www.tiktok.com/@contentmasters_hub?_t=8ojEltaaBip&_r=1"
          }
          target="_blank"
        >
          <Image src={FooterTiktokImage} alt="" className="h-12 w-12" />
        </Link>
      </div>
    </section>
  );
}

export { Footer };
