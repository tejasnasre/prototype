'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GlowingCard from '../../components/animata/card/glowing-card'
import Footer from '@/components/footer';

// Domains data with code snippets
const domains = [
    { 
      id: 1, 
      name: "AI/ML", 
      description: "Build innovative AI solutions to solve real-world problems.",
      codeSnippet: `import tensorflow as tf
model = tf.keras.Sequential([
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dense(10, activation='softmax')
])`
    },
    { 
      id: 2, 
      name: "WEB3", 
      description: "Create decentralized apps using blockchain technologies.",
      codeSnippet: `// Smart Contract
contract Token {
  mapping(address => uint) public balances;
  
  function transfer(address to, uint amount) external {
    balances[msg.sender] -= amount;
    balances[to] += amount;
  }
}`
    },
    { 
      id: 3, 
      name: "IOT", 
      description: "Connect devices to build smart, interactive systems.",
      codeSnippet: `#include <Arduino.h>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`
    },
    { 
      id: 4, 
      name: "CYBER", 
      description: "Develop secure applications to protect digital assets.",
      codeSnippet: `from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"secret data")
decrypted = cipher.decrypt(encrypted)`
    },
    { 
      id: 5, 
      name: "CLOUD", 
      description: "Build scalable, resilient applications with global reach.",
      codeSnippet: `resource "aws_lambda_function" "example" {
  function_name = "ServerlessFunction"
  role          = aws_iam_role.lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs14.x"
  
  environment {
    variables = {
      REGION = "us-west-2"
    }
  }
}`
    },
    { 
      id: 6, 
      name: "WEB2", 
      description: "Create modern web apps with cutting-edge technologies.",
      codeSnippet: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
    }
];

// Colors for each domain
const domainColors = [
  { primary: "#6c63ff", secondary: "#ff6584" }, // AI/ML
  { primary: "#ff6584", secondary: "#6c63ff" }, // WEB3
  { primary: "#63ffda", secondary: "#6c63ff" }, // IOT
  { primary: "#ff9f63", secondary: "#ff63a1" }, // CYBER
  { primary: "#63a1ff", secondary: "#63ffda" }, // CLOUD
  { primary: "#ff63a1", secondary: "#63a1ff" }  // WEB2
];


// Domain Card Component - Fixed for mobile display
function DomainCard({ domain, index }: { domain: Domain; index: number }) {
    return (
      <div className="flex flex-col items-center">
        <GlowingCard 
          fromColor={domainColors[index].primary}
          viaColor={`${domainColors[index].primary}90`}
          toColor={domainColors[index].secondary}
        >
          <div className="mb-3 text-2xl font-bold text-white text-center">{domain.name}</div>
          <div className="text-sm font-medium text-white/80 mb-3">
            {domain.description}
          </div>
          
          {/* Mobile-friendly code snippet with glowing text */}
          <div className="flex-1 w-full rounded-lg bg-[#030014]/50 p-3 sm:p-3 overflow-auto text-xs font-mono">
            <pre className="text-[#50fa7b]">
              <code style={{ 
                textShadow: "0 0 2px rgba(0, 255, 0, 0.3)",
                display: "block",
                overflowX: "auto" 
              }}>
                {domain.codeSnippet}
              </code>
            </pre>
          </div>
        </GlowingCard>
      </div>
    )
  }

// Interface for domain
interface Domain {
  id: number;
  name: string;
  description: string;
  codeSnippet: string;
}

export default function DomainPage() {
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
          <span className="gradient-text">Hackathon</span> <span className="text-[#6c63ff]">Domains</span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Choose from a variety of cutting-edge tech domains for Prototype 2.0
        </motion.p>
      </motion.div>

      <motion.div 
        className="w-full max-w-7xl mx-auto mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Floating number with increased opacity */}
              <motion.div
                className="absolute -top-10 -left-8 text-8xl font-bold text-white/30 z-0 pointer-events-none"
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3 + Math.random() * 2,
                    ease: "easeInOut"
                  },
                  x: {
                    repeat: Infinity,
                    duration: 4 + Math.random() * 2,
                    ease: "easeInOut"
                  },
                  opacity: {
                    repeat: Infinity,
                    duration: 2 + Math.random() * 3,
                    ease: "easeInOut"
                  }
                }}
              >
                {domain.id}
              </motion.div>
              
              {/* Domain card */}
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <DomainCard domain={domain} index={index} />
              </motion.div>
            </motion.div>
          ))}
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
          <span className="text-[#ff6584]">Not Sure Which Domain to Choose?</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our mentors will be available to help guide you through any technical challenges.
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
    <Footer/>
    </>
  )
}