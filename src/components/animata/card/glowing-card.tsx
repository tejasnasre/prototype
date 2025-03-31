import React from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  children?: React.ReactNode;
}

export default function GlowingCard({
  fromColor = "#4158D0",
  viaColor = "#C850C0",
  toColor = "#FFCC70",
  children,
}: GlowCardProps) {
  return (
    <div className="group relative z-10">
      {/* Glow effect wrapper - using the tailwind classes */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-500 filter blur-20 group-hover:brightness-150 z-[-1]"
      ></div>
      
      {/* Card gradient border */}
      <div
        className="rounded-3xl p-0.5 transition-all duration-300"
        style={{
          background: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
        }}
      >
        {/* Content */}
        <div className="flex h-72 w-64 flex-col gap-3 rounded-3xl bg-[#030014]/80 backdrop-blur-md p-5 overflow-hidden">
          {children ? children : (
            <>
              <div className="mb-2 text-xl font-bold text-gray-50">Glowing</div>
              <div className="flex-1 text-sm font-medium text-gray-100 text-opacity-80">
                A glowing card is a card that glows.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}