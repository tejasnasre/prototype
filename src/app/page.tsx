import { BackgroundLines } from "@/components/ui/background-lines";
import GlitchText from "@/components/GlitchText/GlitchText";
import Link from "next/link";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <BackgroundLines className="flex flex-col justify-center items-center w-full min-h-[70vh] py-36 gap-6 pb-44">
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="custom-class mb-4"
        >
          Prototype 2.0
        </GlitchText>

        <div className="flex flex-col items-center gap-4">
          <Link href="/past-glimpse">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs md:text-xl font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Register Now</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </Link>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-2">
            8+ hours of hackathon to build a prototype. Stay tuned for more
            updates.
          </p>
        </div>
      </BackgroundLines>
      <About />
    </>
  );
}
