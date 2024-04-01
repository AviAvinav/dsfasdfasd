import { Bricolage_Grotesque, Pinyon_Script, Inter } from "next/font/google";
import graphicX from "@/app/assets/heroX.png";
import Image from "next/image";
import X from "@/app/assets/X.svg";

const pinyon = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["900"] });

export default function Home() {
  return (
    <div className={``}>
      {/* Hero section */}
      <div className="px-20 pt-10">
        <div className="flex flex-row justify-between">
          <p className="text-8xl font-extrabold">
            THIS MARCH <br />
            2024 <span className={pinyon.className}>TEDx IIITDelhi</span>
          </p>
          <p className="text-xl uppercase">8th edition</p>
        </div>
        <div className="relative flex items-center justify-center">
          <span
            className={`${inter.className} absolute text-center text-[33rem]  font-black text-ted-red`}
          >
            X
          </span>
          <Image className="absolute" src={X} alt="X" />
          <Image
            src={graphicX}
            alt="TEDx IIITDelhi"
            className="mix-blend-luminosity"
          />
        </div>
      </div>
    </div>
  );
}
