import Image from "next/image";
import ExperienceBlock from "./componenets/experience-block";
import SectionHeader from "./componenets/section-header";

const experience = [{
  name: 'Palo Alto Networks',
  title: 'Principal Engineer',
  dates: 'August 2021 - Current',
  imageUrl: '/images/paloalto_logo.jpeg',
  description: 'Owner of the XQL editor, mentoring, lecturing and much much more. I did a lot of cool stuff there. It was awesome'
}, {
  name: 'Google',
  title: 'Senior Software Engineer (Level 4)',
  dates: 'February 2018 - July 2021',
  imageUrl: '/images/google_logo.jpeg',
  description: 'Owner of the XQL editor, mentoring, lecturing and much much more. I did a lot of cool stuff there. It was awesome'
}, {
  name: 'Logz.io',
  title: 'Full Stack Team Leader',
  dates: 'December 2014 - December 2017',
  imageUrl: '/images/logzio_logo.jpeg',
  description: ''
}, {
  name: 'Sears Israel',
  title: 'Full Stack Developer',
  dates: 'October 2011 - May 2014',
  imageUrl: '/images/sears_logo.jpeg',
  description: ''
}, {
  name: 'Visa CAL (ICC)',
  title: '.NET Developer',
  dates: 'August 2009 - November 2011',
  imageUrl: '/images/cal_logo.jpeg',
  description: ''
}, {
  name: 'Israel Defense Force (IDF)',
  title: 'Software Engineer',
  dates: 'February 2006 - August 2009',
  imageUrl: '/images/idf_logo.jpeg',
  description: ''
}];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-2xl w-full justify-between text-5xl font-semibold tracking-tighter lg:flex mb-8">
        <h1>🚀 Gilly Barr</h1>
      </div>
      <p className="max-w-2xl text-left w-full">
        👋🏻 Hi! My name is Gilly. I've been programming since the age 13, working
        with various languages and technologies, mostly web-related. I love
        making stuff, have a lot of hobbies. I'm also a husband and father of
        two. Currently living in Israel.
      </p>

      <div className="mt-4 max-w-2xl text-left w-full flex gap-10">
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
          <Image src="/images/openu_logo.png" width="48" height="48" alt="The Open University" />
          <div className="ml-4">
            <span className="text-lg font-bold leading-snug">The Open University</span>
            <div className="text-sm leading-snug">
              Bachelors Degree - Computer Science
            </div>
          </div>
        </div>
      </div>

      {/* Side projects */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Side Projects" />
        <div className="">
        </div>
      </div>

      {/* Hobbies */}
      <div className="max-w-2xl w-full text-left">
        <SectionHeader name="Hobbies" />
        <div className="">
          hello
        </div>
      </div>

    </main>
  );
}
