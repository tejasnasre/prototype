import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            About Prototype Hackathon
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            An immersive 8+ hour event where innovation meets creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-400">Our Mission</h2>
            <p className="text-zinc-300 leading-relaxed">
              Prototype Hackathon aims to bring together creative minds,
              developers, designers, and problem solvers to collaborate and
              build innovative solutions in a fast-paced, energetic environment.
              We believe that when talented individuals come together with
              limited time and focused goals, extraordinary things can happen.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our event provides a platform for participants to showcase their
              skills, learn from peers, and push the boundaries of what's
              possible in technology and design. Whether you're a seasoned
              developer or just starting your journey, Prototype Hackathon
              welcomes all skill levels and backgrounds.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Event Highlights
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-zinc-300">
                  <span className="font-medium text-white">
                    8+ Hours of Intensive Coding
                  </span>{" "}
                  - Push your limits and create a functional prototype in a
                  single day
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-zinc-300">
                  <span className="font-medium text-white">
                    Mentorship & Support
                  </span>{" "}
                  - Get guidance from industry experts throughout the event
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-zinc-300">
                  <span className="font-medium text-white">
                    Networking Opportunities
                  </span>{" "}
                  - Connect with like-minded individuals and potential
                  collaborators
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-zinc-300">
                  <span className="font-medium text-white">
                    Exciting Prizes
                  </span>{" "}
                  - Compete for recognition and valuable rewards for top
                  projects
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ideation",
                description:
                  "Brainstorm innovative solutions to real-world problems or create something entirely new",
                icon: (
                  <svg
                    className="h-10 w-10 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
              {
                title: "Team Building",
                description:
                  "Form diverse teams with complementary skills to tackle challenges together",
                icon: (
                  <svg
                    className="h-10 w-10 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Rapid Prototyping",
                description:
                  "Design, build, and test your ideas in a fast-paced, collaborative environment",
                icon: (
                  <svg
                    className="h-10 w-10 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Who Can Participate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-400">
                Everyone is Welcome!
              </h3>
              <p className="text-zinc-300">
                Our hackathon is designed to be inclusive and open to
                participants from all backgrounds. Whether you're a student,
                professional, or hobbyist, you'll find a place in our community.
              </p>
              <p className="text-zinc-300">
                No prior hackathon experience is required - just bring your
                enthusiasm, creativity, and willingness to learn and
                collaborate.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-400">Ideal for:</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-zinc-300 font-medium mr-2">
                    Technology Enthusiasts
                  </span>
                  <svg
                    className="h-5 w-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-300 font-medium mr-2">
                    Software Developers & Engineers
                  </span>
                  <svg
                    className="h-5 w-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-300 font-medium mr-2">
                    UX/UI Designers
                  </span>
                  <svg
                    className="h-5 w-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-300 font-medium mr-2">
                    Product Managers
                  </span>
                  <svg
                    className="h-5 w-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-300 font-medium mr-2">
                    Students & Beginners
                  </span>
                  <svg
                    className="h-5 w-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Ready to Join Us?
          </h2>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto">
            Don't miss this opportunity to challenge yourself, learn new skills,
            and build something amazing. Register now to secure your spot at
            Prototype Hackathon 2.0!
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
