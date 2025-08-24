import React from 'react';
import { Link } from 'react-router-dom';
import MemoriesPhoto from "../Components/MemoriesPhoto.jsx"
import memoryPlaceholder from '../Images/Home/memory-placeholder.png'; // Import the image

function Home() {
  return (
    <div>
      {/* Header */}
      <div class="w-fit h-fit relative">
        <img src="../src/Images/Home/hero-image.png" alt="" />
        <div class="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/6 flex flex-col gap-9 text-center text-white w-[620px] font-[Lexend Deca]">
          <h1>
            <span class="block text-[32px] font-bold leading-12">University of Maryland's</span>
            <span class="block uppercase text-[89.48px] font-bold leading-26">Hong Kong</span>
            <span class="block uppercase text-[33.56px] font-bold leading-16 tracking-[0.24em]">Student Association</span>
          </h1>
          <p class="text-[28px]">A student organization dedicated to promoting awareness and appreciation of Hong Kong’s unique culture</p>
        </div>
      </div>

      {/* Immersion */}
      <div class="w-9/10 h-fit my-[182px] mx-auto">
        <img src="../src/Images/Home/immersion-decor-right.svg" alt="" class="block ml-auto mb-10 relative bottom-8" />
        <div class="flex w-9/10 m-auto gap-22.5">
          <div class="flex flex-col w-1/3 gap-2">
            <h2 class="text-[#DA0100] text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Immersion</h2>
            <p class="text-[28px] leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Bringing Hong Kong’s culture to campus - through food, festivals, and community</p>
          </div>
          <div class="flex gap-14 w-2/3 justify-end">
            <img src="../src/Images/Home/immersion-1.png" alt="" class="w-[calc(33%-37.33px)] h-auto rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
            <img src="../src/Images/Home/immersion-2.png" alt="" class="w-[calc(33%-37.33px)] h-auto relative top-8 rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
            <img src="../src/Images/Home/immersion-3.png" alt="" class="w-[calc(33%-37.33px)] h-auto relative bottom-8 rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
          </div>
        </div>
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block mt-10 relative top-8" />
      </div>

      {/* Memories */}
      <div class="w-fit h-fit relative">
        <img src="../src/Images/Home/memories-background.png" alt="" />
        <div class="w-full flex flex-col absolute top-1/10 gap-2 text-center">
          <h2 class="text-[#DEDEDE] text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Memories</h2>
          <p class="text-[28px] text-white leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>These are some of our favorite moments</p>
        </div>
        <div style={{position: "absolute", top: "44.5%", left: "7.5%"}}>
          <MemoriesPhoto imageURL={memoryPlaceholder} />
        </div>
        <div style={{position: "absolute", top: "38%", left: "40.5%"}}>
          <MemoriesPhoto imageURL={memoryPlaceholder} />
        </div>
        <div style={{position: "absolute", top: "42.75%", left: "70%"}}>
          <MemoriesPhoto imageURL={memoryPlaceholder} />
        </div>
        <div style={{position: "absolute", top: "70%", left: "27%"}}>
          <MemoriesPhoto imageURL={memoryPlaceholder} />
        </div>
        <div style={{position: "absolute", top: "68.5%", left: "70%"}}>
          <MemoriesPhoto imageURL={memoryPlaceholder} />
        </div>
      </div>

      {/* Learn More */}
      <div class="w-9/10 h-fit mx-auto mt-18 mb-26 text-center">
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block mb-10 relative rotate-90" />
        <div className='flex flex-col items-center gap-20'>
          <div class="flex gap-6.5">
            <img class="relative top-4" src="../src/Images/Home/learn-more-decor.svg" alt="" />
            <div class="flex flex-col gap-2 text-center">
              <h2 class="text-[#DA0100] text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Learn More</h2>
              <p class="w-[560px] inline-block text-[28px] leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Want to learn more about what we do and who we are</p>
            </div>
            <img class="relative top-4" src="../src/Images/Home/learn-more-decor.svg" alt="" />
          </div>
          <button class="w-fit bg-[#AE282D] hover:bg-[#8B0428] text-white font-bold font-[Lexend Deca] text-[28px] py-7.25 px-23 rounded">
            <Link to="/about">About Us</Link>
          </button>
        </div>
        <div class="w-4/5 h-fit py-28 px-50 mx-auto mt-31 bg-[linear-gradient(125deg,_#A9262C,_#8B0428)] text-center rounded-[22px]">
          <div className='flex flex-col gap-5'>
            <h3 class="font-[Lexend Deca] text-white text-[40px]">For all the updates</h3>
            <p class="text-[28px] text-white " style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Drop your email and stay up to date on our club</p>
          </div>

          <div class="flex justify-center mt-16.5">
            <input type="text" placeholder='example@gmail.com' class="w-full px-8.75 bg-white rounded-[15px_0_0_15px] text-[28px] leading-4" style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }} />
            <button class="bg-[linear-gradient(125deg,_#DC9536,_#FFC476,_#DC9536)] cursor-pointer rounded-[0_15px_15px_0] w-[125px] h-[77px]"></button>
          </div>
        </div>
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block mt-[-32px] ml-auto relative rotate-270" />
      </div>
    </div>
  );
}

export default Home;