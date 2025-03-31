import React from "react";
import Image from "next/image"; // Import Image from next/image
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  imageClassName?: string;
  title: string;
  subtitle?: string;
  rotate?: "x" | "y";
  cardClassName?: string;
  fromColor?: string; // Gradient start color
  viaColor?: string; // Gradient middle color
  toColor?: string; // Gradient end color
}

export default function FlipCard({
  image,
  imageClassName,
  title,
  subtitle,
  rotate = "y",
  className,
  cardClassName = "h-80 w-64",
  fromColor = "#4158D0",
  viaColor = "#C850C0",
  toColor = "#FFCC70",
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        `group [perspective:1000px] m-5 ${cardClassName}`, // Apply cardClassName for size
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front with Transparent Gradient Background */}
        <div
          className="absolute h-full w-full rounded-2xl p-4 [backface-visibility:hidden] flex flex-col items-center justify-center"
          style={{
            background: `linear-gradient(to right, ${fromColor}66, ${viaColor}66, ${toColor}66)`, // Added transparency using 'CC' (80% opacity)
          }}
        >
          <Image
            src={image}
            alt={title}
            className={`h-32 w-32 object-cover rounded-lg shadow-lg mb-4 ${imageClassName}`} // Square image with rounded corners
            width={128} // Provide width
            height={128} // Provide height
          />
          <div className="text-xl font-bold text-white text-center">{title}</div>
        </div>

        {/* Back with Transparent Background */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-[#030014]/50 p-4 text-slate-200 [backface-visibility:hidden]", // Reduced opacity to 50%
            self[1]
          )}
        >
          {/* Glow Effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-500 filter blur-20 group-hover:brightness-150 z-[-1]"
            style={{
              background: `linear-gradient(to right, ${fromColor}33, ${viaColor}33, ${toColor}33)`, // Added transparency using 'CC' (80% opacity)
            }}
          ></div>

          {/* Back Content */}
          <div className="relative flex min-h-full flex-col gap-2 items-center justify-center">
            <h1
              className="text-2xl font-bold text-transparent bg-clip-text"
              style={{
                background: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {subtitle}
            </h1>
            <p className="text-sm text-gray-300 text-center">
              Explore the rewards and opportunities waiting for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
