import type { Metadata } from "next";
import { Bai_Jamjuree, Montserrat } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Content Masters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth text-[7px] md:text-[7px] lg:text-[8px] xl:text-[12px] 2xl:text-[16px]"
    >
      <GoogleTagManager gtmId="GTM-MCSX6KF3" />
      <head>
        <Script type="text/javascript" id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nqrxcv68dd");
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.className} ${baiJamjuree.variable} text-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
