import { Inter } from "next/font/google";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export default function Navbar() {
  return (
    <nav
      className={`${inter.className} z-50 flex w-full flex-row items-center justify-between bg-transparent px-20 py-5`}
    >
      <Image src={logo} alt="TEDxIIITD" className="h-full" />
      <ul className="flex flex-row space-x-8">
        <li className="before:content-[''] before:w-4 before:relative before:inline-block align-top before:bg-ted-red h-full before:h-full">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
      <ul className="flex flex-row space-x-8">
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
<li>
          <Link href="/tickets" className="bg-ted-red px-5 py-3.5 rounded-full">Buy Tickets</Link>
        </li>
	  </ul>
    </nav>
  );
}
