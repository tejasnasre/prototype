"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: string;
}

interface FaqSectionProps {
  data: FAQItem[];
}

export default function FaqSection({ data }: FaqSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-4xl">
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
        className="space-y-6"
      >
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-6">
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-x-4 p-2 rounded-xl hover:bg-white/5"
              >
                <div
                  className="relative flex items-center gap-x-4 rounded-xl p-4 hover:bg-white/5 transition-colors"
                  style={{
                    backgroundColor: openItem === item.id.toString() ? "rgba(108, 99, 255, 0.1)" : "",
                  }}
                >
                  {item.icon && (
                    <span className="text-3xl">{item.icon}</span>
                  )}
                  <span className="text-2xl font-medium text-white">{item.question}</span>
                </div>

                <span className="cursor-pointer text-2xl px-2">
                  {openItem === item.id.toString() ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#6c63ff"
                      className="size-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ff6584"
                      className="size-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            
            <AnimatePresence initial={false}>
              {openItem === item.id.toString() && (
                <Accordion.Content forceMount>
                  <motion.div
                    key={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                          mass: 1.2,
                          duration: 0.4
                        },
                        opacity: { duration: 0.25 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                          mass: 1,
                          duration: 0.2
                        },
                        opacity: { duration: 0.15 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 pr-4 pt-3 pb-5">
                      <motion.div 
                        className="relative max-w-2xl rounded-2xl bg-gradient-to-r from-[#6c63ff] to-[#ff6584] px-8 py-5"
                        initial={{ scale: 0.95, y: -5 }}
                        animate={{ 
                          scale: 1, 
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 20
                          }
                        }}
                      >
                        <p className="text-xl text-white">{item.answer}</p>
                        <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[15px] border-t-[15px] border-l-transparent border-t-[#ff6584]"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Accordion.Content>
              )}
            </AnimatePresence>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}