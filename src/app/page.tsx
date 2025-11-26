import { WorkExperience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { DiJsBadge } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { SiReact } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen">

      <div className="fixed inset-0 grid-bg grid-overlay z-0" aria-hidden="true" />

      <main className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center">

        <div className="absolute top-[15%] left-[18%] z-10">
          <div className="animate-float">
            <SiReact style={{ width: '3.7rem', height: '3.7rem' }} className="text-gray-300 dark:text-gray-800" />
          </div>
        </div>

        <div className="absolute bottom-[40%] right-[12%] z-10">
          <div className="animate-float">
            <FaDatabase style={{ width: '3.2rem', height: '3.2rem' }} className="text-gray-300 dark:text-gray-800" />
          </div>
        </div>

        <div className="absolute bottom-[20%] left-[12%] z-10">
          <div className="animate-float">
            <DiJsBadge style={{ width: '3.5rem', height: '3.5rem' }} className="text-gray-300 dark:text-gray-800" />
          </div>
        </div>

        <div className="relative z-20 flex h-screen">
          <div className="w-full max-w-3xl mx-auto text-center sm:text-left flex justify-center items-center flex-col">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hey, I'm{" "}
              <span className="relative inline-block">
                Pranav
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 -z-10 -skew-y-1 md:h-4" />
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-black/70 dark:text-gray-500 mb-6 sm:mb-8">
              Software Engineer & Full-Stack Developer
            </p>

            <div className="flex flex-row gap-4 md:gap-6 justify-center sm:justify-start">
              <Link href="#footer" className="px-6 md:px-8 py-2 md:py-3 text-xl cursor-pointer transition-colors rounded-full  duration-300 text-black bg-white border border-black hover:text-white hover:bg-black/80 dark:bg-transparent dark:text-white dark:border dark:border-white dark:hover:bg-white dark:hover:text-black">
                Get in touch
              </Link>
              <Link href="#projects" className="px-6 md:px-8 py-2 md:py-3 text-xl cursor-pointer transition-colors rounded-full duration-300 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
                Proof of work
              </Link>
            </div>
          </div>
        </div>

      </main>

      <div>
        <div id="experience" className="relative z-40 bg-gray-100 dark:bg-[#2b2b2b] py-12">
          <WorkExperience />
        </div>

        <div id="projects" className="relative z-40 bg-[#fafafa] dark:bg-black py-12">
          <Projects />
        </div>

        <div id="skills" className="relative z-40 bg-gray-100 dark:bg-[#2b2b2b] py-12">
          <TechStack />
        </div>

        <div id="footer" className="relative z-40 bg-[#fafafa] dark:bg-black py-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
