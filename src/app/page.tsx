import Image from "next/image";
import Link from "next/link";
import ExperienceBlock from "./components/experience-block";
import SectionHeader from "./components/section-header";
import SideProject from "./components/side-project";

import { experience } from "./data/experience";
import { sideProjects } from "./data/side-projects";
import OnlinePresence from "./components/online-presence";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="z-10 max-w-2xl w-full justify-between text-5xl font-semibold tracking-tighter lg:flex mb-8">
        <h1>🚀 Gilly Barr</h1>
      </div>
      <p className="max-w-2xl text-left w-full">
        I'm Gilly. I've been programming since I was 11 years old, back before 
        anyone knew it would be cool one day. I taught myself to build desktop apps with
        Visual Basic, discovered the web with php and worked throughout high-school building
        many eCommerce sites.<br/>
        Since then, I've worked at quite a few companies and used many different technologies.<br/>
        I love moving fast <span className="italic text-gray-600">(while trying not to break stuff)</span>, mentoring junior developers,
        and experimenting with new technologies.
      </p>
      <p className="max-w-2xl text-left w-full mt-2">
        I'm also a husband and dad to two amazing kids.<br/>
        A true maker at heart.
      </p>

      <div className="mt-4 max-w-2xl text-left w-full flex flex-wrap gap-x-10 gap-y-2">
        <div className="flex text-md text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="inline-block ml-1">Israel</span>
        </div>
        <div className="flex text-md text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span className="inline-block ml-1">gillyb@gmail.com</span>
        </div>
        <div className="flex text-md text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span className="inline-block ml-1">+972-545623450</span>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-2xl w-full text-left mt-8">
        <SectionHeader name="Experience" />
        {experience.map(e => <ExperienceBlock {...e} />)}
      </div>

      {/* Education */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Education" />
        <div className="flex">
          <div className="relative w-6 md:w-12 flex-shrink-0 text-left content-start">
            <Image src="/images/openu_logo.png" width="48" height="48" style={{objectFit: 'contain'}} alt="The Open University" />
          </div>
          <div className="ml-2 md:ml-4">
            <span className="text-lg font-semibold leading-snug">The Open University</span>
            <div className="text-sm leading-snug">
              Bachelors Degree - Computer Science & Psychology
            </div>
          </div>
        </div>
      </div>

      {/* Side projects */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Side Projects" />
        <div className="grid grid-cols-1">
          {sideProjects.map(s => <SideProject {...s} />)}
        </div>
      </div>

      {/* Hobbies */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Hobbies" />
        <p className="text-sm text-gray-600 mb-4 -mt-4">Click on one of them, I DARE you!</p>
        <div className="flex flex-wrap gap-4">
          <span className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">3D Printing</span>
          <span className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">Woodworking</span>
          <Link href="https://connect.garmin.com/modern/profile/gilly914" className="border dark:bg-orange-200 dark:text-gray-900 rounded-md bg-orange-50 border-orange-400 py-1 px-3 font-mono cursor-pointer hover:underline hover:bg-orange-100">Running</Link>
        </div>
      </div>

      {/* Online Presence */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Online Presence" />
        <OnlinePresence />
      </div>

    </main>
  );
}
