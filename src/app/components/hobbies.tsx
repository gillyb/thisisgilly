'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hobbies() {

  const [showWoodworking, setShowWoodworking] = useState(false);
  const [showPrinting, setShowPrinting] = useState(false);

  const toggleWoodworking = () => {
    setShowPrinting(false);
    setShowWoodworking(!showWoodworking);
  };

  const togglePrinting = () => {
    setShowWoodworking(false);
    setShowPrinting(!showPrinting);
  };

  return (
    <>
      <p className="italic text-sm text-gray-600 mb-4 -mt-4">Click on one of them, I DARE you!</p>
      <div className="flex flex-wrap gap-4">
        <span onClick={() => togglePrinting()} className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">3D Printing</span>
        <span onClick={() => toggleWoodworking()} className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">Woodworking</span>
        <Link href="https://connect.garmin.com/modern/profile/gilly914" className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">Running</Link>

        <div className="">
          <div className={"woodworking" + (showWoodworking ? '' : ' hidden')}>
            <div className="mb-4 text-gray-600">A few things I built. Check out my instagram for more.</div>
            <div className="flex flex-wrap gap-10">
              <Image src="/images/woodworking1.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="woodworking project 1" />
              <Image src="/images/woodworking2.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="woodworking project 2" />
              <Image src="/images/woodworking3.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="woodworking project 3" />
              <Image src="/images/woodworking4.jpeg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="woodworking project 4" />
            </div>
          </div>

          <div className={"3dprinting" + (showPrinting ? '' : ' hidden')}>
            <div className="mb-4 text-gray-600">A few things I worked on... Check out my instagram for more.</div>
            <div className="flex flex-wrap gap-10">
              <Image src="/images/printing1.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="RC car" />
              <Image src="/images/printing2.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="Curta Calculator model" />
              <Image src="/images/printing3.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="Light Saber" />
              <Image src="/images/printing4.jpg" className="rounded-lg w-48 md:w-64" width={220} height={220} objectFit="contain" alt="A reading lamp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
