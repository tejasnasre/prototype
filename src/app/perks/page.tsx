import React from 'react';
import FlipCard from '@/components/animata/card/flip-card';
import Footer from '@/components/footer';

const PrizeMoney = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 sm:p-10 lg:p-20">
        
        {/* Heading Section */}
        <h1 className="relative z-10 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          Amazing and hefty cash prize is waiting for you. <br />
          <span className="text-blue-400">So get ready to Code, Build and Hack!</span>
        </h1>

        {/* Flip Cards Section */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-center items-center px-4">
          <FlipCard
            image="/money.jpg"
            imageClassName="object-cover"
            rotate="y"
            subtitle="1st-$$$$"
            title="Cash Prizes"
            cardClassName="h-80 w-64"
            fromColor="#4158D0"
            viaColor="#C850C0"
            toColor="#FFCC70"
          />
          <FlipCard
            image="/supaverified-regular_600x.webp"
            imageClassName="object-cover"
            rotate="y"
            subtitle="For Best Use Of Supabase"
            title="Supabase Swags"
            cardClassName="h-80 w-64"
            fromColor="#6c63ff"
            viaColor="#ff6584"
            toColor="#63ffda"
          />
          <FlipCard
            image="/Microsoft_Azure.svg"
            imageClassName="object-contain"
            rotate="y"
            subtitle="For Best Beginner Team"
            title="Azure Swags"
            cardClassName="h-80 w-64"
            fromColor="#63a1ff"
            viaColor="#63ffda"
            toColor="#ff63a1"
          />
        </div>

        {/* Additional Header Text */}
        <h2
          className="relative z-10 mt-12 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(to right, #4158D0, #C850C0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The journey doesn&apos;t end here! Join an exclusive community of developers, mentors, and tech enthusiasts. Build connections that last beyond the hackathon.
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default PrizeMoney;