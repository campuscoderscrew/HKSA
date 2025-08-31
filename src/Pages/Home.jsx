import React from 'react';
import { Link } from 'react-router-dom';
import MemoriesPhoto from "../Components/MemoriesPhoto.jsx"
import memoryPlaceholder from '../Images/Home/memory-placeholder.png'; // Import the image

function Home() {
  return (
    <div>
      {/* Header */}
      <div class="w-full h-auto relative overflow-hidden">
        <img src="../src/Images/Home/hero-image.png" alt="" />
        <div class="absolute top-1/5 lg:top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/5 lg:-translate-y-1/6 flex flex-col gap-2 text-center text-white w-9/10 lg:w-[620px] font-[Lexend Deca]">
          <h1>
            <span class="block text-[12px] lg:text-[32px] font-bold leading-0 lg:leading-12">University of Maryland's</span>
            <span class="block text-[32px] uppercase lg:text-[89.48px] font-bold leading-14 lg:leading-26">Hong Kong</span>
            <span class="block text-[12px] uppercase lg:text-[33.56px] font-bold leading-0 lg:leading-16 tracking-[0.24em]">Student Association</span>
          </h1>
          <p class="max-w-3/5 lg:max-w-full mt-2 lg:mt-0 text-[12px] lg:text-[28px] mx-auto">A student organization dedicated to promoting awareness and appreciation of Hong Kong’s unique culture</p>
        </div>
      </div>

      {/* Immersion */}
      <div class="w-9/10 h-fit mt-4 mb-12 mx-auto overflow-hidden">
        <img src="../src/Images/Home/immersion-decor-right.svg" alt="" class="block ml-auto relative w-1/4 lg:w-auto h-auto top-8" />
        {/* Main content */ }
        <div class="flex flex-col lg:flex-row w-9/10 m-auto gap-5 lg:gap-22.5 text-center">
          <div class="flex flex-col lg:w-1/3 gap-1 lg:gap-2">
            <h2 class="text-[#DA0100] text-[24px] lg:text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Immersion</h2>
            <p class="text-[13px] lg:text-[28px] lg:leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Bringing Hong Kong’s culture to campus - through food, festivals, and community</p>
          </div>
          <div class="flex gap-9 lg:gap-14 lg:w-2/3 lg:justify-end ml-[18px] lg:ml-0 mb-2 lg:mb-0">
            <img src="../src/Images/Home/immersion-1.png" alt="" class="w-[calc(33%-23px)] h-auto rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
            <img src="../src/Images/Home/immersion-2.png" alt="" class="w-[calc(33%-23px)] h-auto relative lg:top-8 rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
            <img src="../src/Images/Home/immersion-3.png" alt="" class="w-[calc(33%-23px)] h-auto relative lg:bottom-8 rounded-[12px] shadow-[-18px_18px_#E0E0E0]" />
          </div>
        </div>
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block relative w-1/6 lg:w-auto h-auto" />
      </div>

      {/* Memories */}
      <img class="mb-[-1px] overflow-hidden" src="../src/Images/Home/memories-transition.png" alt="" />
      <div class="w-full h-full bg-gradient-to-b from-[#B0282D] to-[#6C0F20] overflow-hidden">
        <div class="w-fit max-w-450 h-full mx-auto relative">
          <img className='lg:hidden' src="../src/Images/Home/memories-background-mobile.png" alt="" />
          <img class="hidden lg:block" src="../src/Images/Home/memories-background.png" alt="" />
          <div class="w-full flex flex-col absolute top-1/100 lg:gap-2 text-center">
            <h2 class="text-[#DEDEDE] text-[36px] lg:text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Memories</h2>
            <p class="text-[24px] lg:text-[28px] text-white leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>These are some of our favorite moments</p>
          </div>
          <div class="absolute top-[40.5%] left-[11%] lg:top-[38.5%] lg:left-[7.5%] 2xl:top-[38%] 2xl:left-[6.75%] w-[30%] h-auto lg:w-[160px] lg:h-[210px] xl:w-[200px] xl:h-[250px] 2xl:w-[17%] 2xl:h-auto">
            <MemoriesPhoto imageURL={memoryPlaceholder} />
          </div>
          <div class="absolute top-[39%] lg:top-[32.5%] left-[65%] lg:left-[40.5%] 2xl:left-[39.75%] w-[30%] lg:w-[160px] lg:h-[210px] xl:w-[200px] xl:h-[250px] 2xl:w-[17%] 2xl:h-auto">
            <MemoriesPhoto imageURL={memoryPlaceholder} />
          </div>
          <div class="hidden lg:inline absolute top-[38.5%] left-[70%] 2xl:top-[37%] 2xl:left-[69.15%] w-[30%] lg:w-[160px] lg:h-[210px] xl:w-[200px] xl:h-[250px] 2xl:w-[17%] 2xl:h-auto" >
            <MemoriesPhoto imageURL={memoryPlaceholder} />
          </div>
          <div class="absolute top-[72.5%] left-[29.5%] lg:top-[68%] lg:left-[27%] 2xl:top-[67.6%] 2xl:left-[26.2%] w-[30%] lg:w-[160px] lg:h-[210px] xl:w-[200px] xl:h-[250px] 2xl:w-[17%] 2xl:h-auto">
            <MemoriesPhoto imageURL={memoryPlaceholder} />
          </div>
          <div class="hidden lg:inline absolute top-[67.5%] left-[70%] 2xl:top-[66.5%] 2xl:left-[69.2%] w-[30%] lg:w-[160px] lg:h-[210px] xl:w-[200px] xl:h-[250px] 2xl:w-[17%] 2xl:h-auto">
            <MemoriesPhoto imageURL={memoryPlaceholder} />
          </div>
        </div>
      </div>
      

      {/* Learn More */}
      <div class="w-9/10 h-fit mx-auto mt-[-24px] mb-12 text-center overflow-hidden">
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block top-18 relative rotate-90 w-1/6 lg:w-auto" />
        <div className='flex flex-col items-center gap-10 mt-12 lg:mt-0'>
          <div class="flex gap-4">
            <img class="relative top-4 w-[10%] lg:w-full" src="../src/Images/Home/learn-more-decor.svg" alt="" />
            <div class="flex flex-col gap-2 text-center">
              <h2 class="text-[#DA0100] text-[32px] lg:text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Learn More</h2>
              <p class="lg:w-[560px] inline-block text-[20px] lg:text-[28px] leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Want to learn more about what we do and who we are</p>
            </div>
            <img class="relative top-4 w-[10%] lg:w-full" src="../src/Images/Home/learn-more-decor.svg" alt="" />
          </div>
          <button class="w-fit bg-[#AE282D] hover:bg-[#8B0428] text-white font-bold font-[Lexend Deca] text-[14px] lg:text-[28px] py-4 lg:py-6 px-10 lg:px-23 rounded">
            <Link to="/about">About Us</Link>
          </button>
        </div>
        <div class="w-4/5 max-w-300 h-fit pt-8 lg:pt-12 pb-10 lg:pb-16 px-9 lg:px-50 mx-auto mt-16 bg-[linear-gradient(125deg,_#A9262C,_#8B0428)] text-center rounded-[22px]">
          <div className='flex flex-col gap-2'>
            <h3 class="font-[Lexend Deca] text-white text-[16px] lg:text-[40px]">For all the updates</h3>
            <p class="text=[14px] leg:text-[28px] text-white lg:leading-[28px]" style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Drop your email and stay up to date on our club</p>
          </div>

          <div class="flex justify-center mt-5 lg:mt-10">
            <input type="text" class="lg:hidden w-full bg-white rounded-[15px_0_0_15px]" style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }} />
            <input type="text" placeholder='example@gmail.com' class="hidden lg:inline w-full px-8.75 bg-white rounded-[15px_0_0_15px] text-[28px] leading-4" style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }} />
            <button class="lg:hidden bg-[linear-gradient(125deg,_#DC9536,_#FFC476,_#DC9536)] cursor-pointer rounded-[0_15px_15px_0] w-[36px] h-[33px]"></button>
            <button class="hidden lg:inline bg-[linear-gradient(125deg,_#DC9536,_#FFC476,_#DC9536)] cursor-pointer rounded-[0_15px_15px_0] w-[125px] h-[77px]"></button>
          </div>
        </div>
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block lg:mt-[-48px] ml-auto relative rotate-270 w-1/6 lg:w-auto" />
      </div>
    </div>
  );
}

export default Home;