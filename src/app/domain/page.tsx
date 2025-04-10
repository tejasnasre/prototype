"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function ProblemStatementsPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">Hackathon</span>{" "}
            <span className="text-[#6c63ff]">Problem Statements</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We will be providing 2-3 problem statements for the hackathon
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#6c63ff]/20 to-[#ff6584]/20 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
              Flexible Technology Approach
            </h2>

            <p className="text-white/80 mb-6 text-lg">
              Our problem statements are designed to be technology-agnostic. You
              can implement your solution using any tech stack of your choice:
            </p>

            <ul className="space-y-4 text-white/80 mb-8">
              <li className="flex items-center">
                <span className="text-[#63ffda] mr-2">•</span>
                <span>Web2 (React, Angular, Vue, etc.)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#ff6584] mr-2">•</span>
                <span>Web3 (Blockchain, Smart Contracts, DApps)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#6c63ff] mr-2">•</span>
                <span>AI/ML (TensorFlow, PyTorch, etc.)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#ff9f63] mr-2">•</span>
                <span>IoT (Arduino, Raspberry Pi, etc.)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#63a1ff] mr-2">•</span>
                <span>Cloud (AWS, Azure, GCP, etc.)</span>
              </li>
            </ul>

            <p className="text-white/80 text-lg">
              Our team is focused on creating problem statements that can be
              tackled using any technology stack. We believe in giving you the
              freedom to leverage your strengths and explore new technologies!
            </p>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-24 py-12 px-6 rounded-2xl text-center bg-gradient-to-r from-[#6c63ff]/10 to-[#ff6584]/10 backdrop-blur-sm border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#ff6584]">
              Get Ready for the Challenges!
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Problem statements will be revealed during the kickoff. Our mentors
            will be available to help guide you through any technical
            challenges.
          </p>
          <motion.button
            className="mt-8 bg-gradient-to-r from-[#6c63ff] to-[#ff6584] px-8 py-3 rounded-lg font-medium text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
