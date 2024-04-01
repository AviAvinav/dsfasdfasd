import { Bricolage_Grotesque, Pinyon_Script } from "next/font/google";
import graphicX from "@/app/assets/heroX.png";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={`${bricolage.className}`}>
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
          <span className="absolute text-center text-[35rem] font-extrabold text-ted-red">
            X
          </span>
          <Image src={graphicX} alt="TEDx IIITDelhi" className="opacity-40" />
        </div>
      </div>
    </div>
  );
}
