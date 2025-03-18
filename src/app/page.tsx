import { BackgroundLines } from "@/components/ui/background-lines";
import GlitchText from "@/components/GlitchText/GlitchText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col px-4">
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="custom-class"
        >
          Prototype 2.0
        </GlitchText>

        <h3 className="bg-clip-text text-transparent text-center bg-white text-2xl md:text-4xl lg:text-4xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight flex flex-col justify-center gap-4">
          Comming Soon....
          <Link href="/past-glimpse">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs md:text-xl font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>See Past Glimpse</span>
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
        </h3>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          8+ hours of hackathon to build a prototype. Stay tuned for more
          updates.
        </p>
      </BackgroundLines>
    </>
  );
}
