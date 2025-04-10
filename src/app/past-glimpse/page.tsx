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
  "/gallery/one.webp",
  "/gallery/eleven.webp",
  "/gallery/twelve.webp",
  "/gallery/thirteen.webp",
  "/gallery/five.webp",
  "/gallery/six.webp",
  "/gallery/two.webp",
  "/gallery/fourteen.webp",
  "/gallery/fifteen.webp",
  "/gallery/ten.webp",
  "/gallery/one.webp",
  "/gallery/four.webp",
  "/gallery/seven.webp",
  "/gallery/eight.webp",
  "/gallery/nine.webp",
];
