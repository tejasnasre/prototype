import React from 'react';
import BlurryBlob from "@/components/animata/background/blurry-blob";
import MovingGradient from '@/components/animata/background/moving-gradient';
import FlipCard from '@/components/animata/card/flip-card';
import Image from 'next/image';
const PrizeMoney = () => {
    return (
      <>
      <div className='flex flex-wrap justify-center h-dvh align-center p-20 m-5'>
      <BlurryBlob
  className="rounded-xl opacity-45"
  firstBlobColor="bg-purple-400"
  secondBlobColor="bg-blue-400"
/>
        
          <FlipCard
          image="https://m.media-amazon.com/images/I/81U0xatrQzL._AC_SL1500_.jpg"
          imageClassName='h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40 border-2 border-solid border-white'
          rotate="y"
          subtitle="1st-$$$$"
          title="Cash Prizes"
        />
          <FlipCard
          image="https://supabase.store/cdn/shop/products/supaverified-regular_600x.png?v=1696841559"
          imageClassName="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40 border-2 border-solid border-white"
          rotate="y"
          subtitle="For Best Use Of Supabase "
          title="Supabase Swags"
        />
          <FlipCard
          image= "/Microsoft_Azure.svg"
          imageClassName=" h-full w-full object-contain flex justify-center items-center rounded-2xl object-cover shadow-2xl shadow-black/40 border-2 border-solid border-white"
          rotate="y"
          subtitle="For Best Beginner Team"
          title="Azure Swags"
        />


      </div>
</>
    );
};

export default PrizeMoney;