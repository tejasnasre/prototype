"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

function Page() {
  const feedbackList = [
    "Challenge",
    "Competative was real hard",
    'During this hackathon, much like a marathon, you are constantly proving yourself: "I can do this!"',
    "Everything",
    "The organisation",
    "Hackthon organized is good , I love the thing that you provided extension boards that we didn't expected so it will create positive impact of the team who organised , team is also great who cordinate with us and polite as well.... Over-all great experience 🙌💯",
    "The problem statement",
    "I got to know about how the time management is important while working on a project with different kinds of mind .",
    "Team collaboration",
    "Best Seat Arrangements for all",
    "We had a good experience in this hackathon and overall arrangements were well and good. Also all the volunteers were kind n supportive.",
    "Expirence",
    "NA",
    "Everyone is so helpful and good",
    "There were too many problems you need to find them like poor communication and like you guy's just didn't given complete information",
    "This was the first hackathon which I have experienced it was nice",
    "I loved overall management and also Samosa 😂",
    "Arrangements",
    "Dunno",
    "Refreshments",
    "Got to learn new things",
    "Working with team",
    "Management, & supportive volunteers",
    "Problem statement",
    "Yes",
    "As a frontend developer for my team",
    "EVERYTHING",
    "NA",
    "Passion towards tech",
    "I loved the way, this event was organized and how all students were working upon a goal to complete the task.",
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
            Participant Feedback
          </h1>
          <p className="text-xl text-gray-300 flex items-center justify-center">
            <FaHeart className="text-red-400 mr-2" /> What our hackers loved
            about the experience
          </p>
          <Link href="/past-glimpse">
            <button
              className="cursor-pointer
                        bg-gradient-to-r from-[#6c63ff] to-[#ff6584] 
                        px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-white 
                        hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all
                        scale-100 hover:scale-105 duration-300
                        border border-white/10
                        text-sm sm:text-base
                      "
            >
              Past Photos
            </button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feedbackList
            .filter((feedback) => feedback !== "NA" && feedback !== "Dunno")
            .map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                  index % 3 === 0
                    ? "border-purple-500"
                    : index % 3 === 1
                    ? "border-blue-500"
                    : "border-indigo-500"
                }`}
              >
                <FaQuoteLeft className="text-gray-600 mb-3 text-xl" />
                <p className="text-gray-300 font-medium leading-relaxed">
                  {feedback}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
