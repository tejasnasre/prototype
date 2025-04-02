import React from 'react';
import FlipCard from '@/components/animata/card/flip-card';
import Footer from '@/components/footer';

const PrizeMoney = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-16 sm:p-10 lg:p-16">
        
        {/* Heading Section - Simplified and more impactful */}
        <h1 className="relative z-10 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
          Win Amazing Prizes
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-blue-400 font-medium">Code. Build. Win.</span>
        </h1>

        {/* Flip Cards Section - Improved grid layout */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto justify-items-center">
          <FlipCard
            image="/money.jpg"
            imageClassName="object-cover"
            rotate="y"
            subtitle="₹10,000 in prizes"
            title="Cash Prizes"
            cardClassName="h-72 w-full max-w-[280px]"
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
            cardClassName="h-72 w-full max-w-[280px]"
            fromColor="#6c63ff"
            viaColor="#ff6584"
            toColor="#63ffda"
          />
          <FlipCard
            image="/Microsoft_Azure.svg"
            imageClassName="object-contain bg-white/90 rounded-lg p-2"
            rotate="y"
            subtitle="For Best Beginner Team"
            title="Azure Swags"
            cardClassName="h-72 w-full max-w-[280px]"
            fromColor="#63a1ff"
            viaColor="#63ffda"
            toColor="#ff63a1"
          />
        </div>

        {/* Additional Benefits - Simplified */}
        <div className="relative z-10 mt-12 sm:mt-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-white mb-4">
            Beyond The Prizes
          </h2>
          <p className="text-center text-lg text-white/80">
            Connect with developers, mentors, and tech enthusiasts. Build relationships that last beyond the hackathon, maybe you can find your co-founder.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrizeMoney;