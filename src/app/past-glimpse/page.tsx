"use client";
import FuzzyText from "@/components/FuzzyText/FuzzyText";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function page() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center pt-10 mb-4 md:pb-12 gap-4">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          Prototype 1.0
        </FuzzyText>
        <p>150+ Participants | 50+ Projects</p>
      </div>
      <ParallaxScroll images={images} />
    </>
  );
}

const images = [
  "/gallary/three.webp",
  "/gallary/eleven.webp",
  "/gallary/twelve.webp",
  "/gallary/thirteen.webp",
  "/gallary/five.webp",
  "/gallary/six.webp",
  "/gallary/two.webp",
  "/gallary/fourteen.webp",
  "/gallary/fifteen.webp",
  "/gallary/ten.webp",
  "/gallary/one.webp",
  "/gallary/four.webp",
  "/gallary/seven.webp",
  "/gallary/eight.webp",
  "/gallary/nine.webp",
];
