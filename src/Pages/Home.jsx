import React from 'react'

function Home() {
  return (
    <div>
      {/* Header */}
      <div class="w-fit h-fit">
        <img src="../src/Images/Home/hero-image.png" alt="" />
        <div class="absolute top-5/8 left-1/2 -translate-x-1/2 -translate-y-5/8 flex flex-col gap-9 text-center text-white w-[620px] font-[Lexend Deca]">
          <h1>
            <span class="block text-[32px] font-bold leading-12">University of Maryland's</span>
            <span class="block uppercase text-[89.48px] font-bold leading-26">Hong Kong</span>
            <span class="block uppercase text-[33.56px] font-bold leading-16 tracking-[0.24em]">Student Association</span>
          </h1>
          <p class="text-[28px]">A student organization dedicated to promoting awareness and appreciation of Hong Kong’s unique culture</p>
        </div>
      </div>

      {/* Immersion */}
      <div class="w-9/10 mt-[182px] mb-[212px] mx-auto">
        <img src="../src/Images/Home/immersion-decor-right.svg" alt="" class="block ml-auto mb-10 relative bottom-8" />
        <div class="flex w-9/10 m-auto gap-22.5">
          <div class="flex flex-col w-1/3">
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
    </div>
  )
}

export default Home