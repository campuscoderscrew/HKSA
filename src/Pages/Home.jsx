import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, Autoplay, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import EventCard from '../Components/EventCard';
import Footer from "../Components/Footer";

function Home() {
  const [message, setMessage] = useState();

  function announceMessage(newMessage) {
    console.log(newMessage)
    setMessage(newMessage);
    setTimeout(() => {
      setMessage('');
    }, 1000);
  }

  return (
    <div class="bg-[#330008] font-['Inter']">
      {/* Header */}
      <div class="w-full h-auto relative overflow-hidden">
        <img class="h-auto w-screen" src="../src/Images/Home/hero-section.svg" alt="" />
        <div class="absolute top-1/5 lg:top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/5 lg:-translate-y-1/6 flex flex-col gap-2 text-center w-9/10 md:w-[620px]">
          <h1 class="h-fit">
            <span class="h-fit block text-[#E0A552] text-[16px] md:text-[32px] font-bold leading-0 md:leading-16">University of Maryland's</span>
            <span class="h-fit block text-white text-[32px] uppercase md:text-[90px] font-bold leading-16 md:leading-26"> Hong Kong </span>
            <span class="h-fit block text-white text-[16px] uppercase md:text-[40px] font-bold leading-0 md:leading-12">Student Association</span>
          </h1>
          <p class="max-w-4/5 text-[#E0A552] mt-2 text-[16px] md:text-[28px] mx-auto md:leading-8">A student organization dedicated to promoting awareness and appreciation of Hong Kong’s unique culture</p>
        </div>
      </div>

      {/* Immersion */}
      <div class="w-9/10 h-fit md:-mt-12 mb-12 mx-auto overflow-hidden">
        <img src="../src/Images/Home/immersion-decor-right.svg" alt="" class="block ml-auto relative w-1/4 lg:w-auto h-auto top-8" />
        {/* Main content */ }
        <div class="w-9/10 m-auto -mt-10 flex flex-col gap-2 text-center">
          <h2 class="font-bold text-[#E0A552] text-[24px] md:text-[60px] tracking-[5%]">Immersion</h2>
          <p class="lg:w-3/5 m-auto p-5 lg:p-0 text-[16px] md:text-[30px] lg:leading-[36px] text-white">Bringing Hong Kong’s culture to campus through food, festivals, and community</p>

          {/* Images */ }
          <div class="w-4/5 m-auto lg:mt-20 px-4 md:px-0 flex gap-10 lg:gap-25 justify-center">
            <img src="../src/Images/Home/immersion-1.png" alt="" class="w-1/3 lg:w-[calc(33%-66px)] h-auto rounded-sm drop-shadow-sm drop-shadow-[#AD721F]" />
            <img src="../src/Images/Home/immersion-2.png" alt="" class="w-1/3 lg:w-[calc(33%-66px)] h-auto relative rounded-sm drop-shadow-[#AD721F]" />
            <img src="../src/Images/Home/immersion-3.png" alt="" class="w-1/3 lg:w-[calc(33%-66px)] h-auto relative rounded-sm drop-shadow-[#AD721F]" />
          </div>
        </div>

        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block relative w-1/6 lg:w-auto h-auto -mt-8" />
      </div>

      { /* Upcoming Events */ }
      <div class="w-9/10 h-fit m-auto mb-35">
        <div class="flex gap-8 lg:gap-20 justify-center mb-12.5">
          <img class="w-3/20 md:w-1/5 md:max-w-[125px] lg:max-w-[175px] h-auto" src="../src/Images/Home/red-clouds.svg" alt="" />
          <div class="flex flex-col gap-4 text-center">
            <h2 class="font-bold text-[#E0A552] text-[24px] md:text-[60px] tracking-[5%]">Upcoming Events</h2>
            <p class="text-white text-[16px] md:text-[30px]">Come out to our events</p>
          </div>
          <img class="w-3/20 md:w-1/5 md:max-w-[125px] lg:max-w-[175px] h-auto" src="../src/Images/Home/red-clouds.svg" alt="" />
        </div>

        <div class="flex flex-col lg:flex-row gap-13">
          <EventCard eventTitle='Upcoming Event'
                     date="Sat. Apr 01"
                     time="4:30pm"
                     location="McKeldin Mall (near the front desk)"
                     desc="Lorem ipsum dolor sit amet consectetur adipiscing elit duis sagittis nascetur aliquet ornare hendrerit blandit conubia, vestibulum."
          />
          <EventCard eventTitle='Upcoming Event'
                     date="Sat. Apr 01"
                     time="4:30pm"
                     location="McKeldin Mall (near the front desk)"
                     desc="Lorem ipsum dolor sit amet consectetur adipiscing elit duis sagittis nascetur aliquet ornare hendrerit blandit conubia, vestibulum."
          />
          <EventCard eventTitle='Upcoming Event'
                     date="Sat. Apr 01"
                     time="4:30pm"
                     location="McKeldin Mall (near the front desk)"
                     desc="Lorem ipsum dolor sit amet consectetur adipiscing elit duis sagittis nascetur aliquet ornare hendrerit blandit conubia, vestibulum."
          />
        </div>
      </div>

      {/* Memories */}
      {/* <div class="w-full h-screen relative overflow-hidden"> */}
      <div class="w-full h-fit flex items-center justify-center overflow-hidden bg-[url(../src/Images/Home/memories-background.png)] bg-cover md:bg-size-[100%_100%] bg-repeat-y md:bg-no-repeat pt-5 pb-16">
        {/* <img class="w-auto h-[200vh] md:h-auto" src="../src/Images/Home/memories-background.png" alt="" /> */}
        <div class="w-9/10 h-full  my-15 flex flex-col md:flex-row items-center gap-12.5 md:gap-15">
        {/* <div class="w-9/10 flex items-center gap-15 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"> */}
          <div class="w-full md:w-1/2 flex flex-col text-center">
            <h2 class="font-bold text-[#E0AC52] text-[32px] md:text-[60px] tracking-[5%]">Memories</h2>
            <p class="inline-block text-white text-[20px] md:text-[30px] lg:leading-[36px]">These are some of our favorite moments</p>
            <div class="relative mt-12.5">
              <img class="absolute -top-2 left-0" src="../src/Images/Home/opening-quote.svg" alt="" />
              <p class="text-left text-white text-[20px] md:text-[24px] 2xl:text-[30px] traacking-tight leading-8 border-8 [border-image-source:url(/src/Images/Home/quote-box.svg)] [border-image-slice:10] p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <img class="absolute -bottom-2 right-0" src="../src/Images/Home/closing-quote.svg" alt="" />
            </div>
            <p class="font-bold text-[#E0AC52] text-[20px] md:text-[30px] 2xl:text-[40px] text-right tracking-[5%]"><span aria-hidden="true">- </span>John Doe</p>
            <p class="font-bold text-[#E0AC52] text-[20px] md:text-[24px] 2xl:text-[30px] text-right tracking-[5%] -mt-1">9/28/2025</p>
          </div>
          <div class="w-full md:w-1/2 h-fit pb-15 overflow-x-hidden" >
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              loop
              keyboard={{enabled:true}}
              a11y={{itemRoleDescriptionMessage:"slide", wrapperLiveRegion:false}}
              // autoplay={{delay: 3500}}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return '<button type="button" class="' + className + '" aria-label="Go to slide ' + (index + 1) + '"></button>';
                }
              }}
              onSlideChangeTransitionEnd={(swiper) => announceMessage("Showing slide " + (swiper.realIndex + 1))}
            >
              <SwiperSlide>
                <a href="">
                  <img src="../placeholder.png" alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="../placeholder.png" alt="" /></SwiperSlide>

              <div class='sr-only custom-swiper-live' aria-live='polite' aria-atomic="true">{message}</div>
            </Swiper>
          </div>
        </div>
      </div>
      

      {/* Learn More */}
      <div class="w-9/10 h-fit mx-auto mb-20 text-center overflow-hidden">
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block top-18 relative rotate-90 w-1/6 lg:w-auto" />
        <div className='flex flex-col items-center gap-10 mt-8 lg:-mt-8'>
          <div class="flex gap-4">
            <img class="relative top-4 w-[10%] lg:w-full" src="../src/Images/Home/learn-more-decor.svg" alt="" />
            <div class="flex flex-col gap-2 text-center">
              <h2 class="font-bold text-[#E0AC52] text-[32px] md:text-[60px] tracking-[5%]">Learn More</h2>
              <p class="lg:w-[560px] inline-block text-white text-[20px] md:text-[30px] lg:leading-[36px]">Want to learn more about what we do and who we are</p>
            </div>
            <img class="relative top-4 w-[10%] lg:w-full" src="../src/Images/Home/learn-more-decor.svg" alt="" />
          </div>
          <button class="w-fit bg-[#AE282D] hover:bg-[#8B0428] text-white font-bold text-[14px] md:text-[28px] py-4 lg:py-6 px-10 lg:px-23 rounded">
            <Link to="/about">About Us</Link>
          </button>
        </div>
        <div class="max-w-300 h-fit pt-8 lg:pt-12 pb-10 lg:pb-16 px-9 lg:px-50 mx-auto mt-16 bg-[linear-gradient(135deg,_#5D3238,_#5D3238) text-center rounded-[22px]">
          <div className='flex flex-col gap-2'>
            <h3 class="font-bold text-white text-[16px] md:text-[40px]">For all the updates</h3>
            <p class="text-[14px] md:text-[24px] text-white tracking-[5%]">Drop your email and stay up to date on our club</p>
          </div>

          <div class="flex justify-center mt-5 lg:mt-10">
            <input type="text" class="lg:hidden w-full bg-white rounded-sm" />
            <input type="text" placeholder='example@gmail.com' class="hidden lg:inline w-full px-8.75 bg-white rounded-[15px_0_0_15px] text-[20px] leading-4" />
            <button class="lg:hidden bg-[linear-gradient(125deg,_#DC9536,_#FFC476,_#DC9536)] cursor-pointer rounded-[0_15px_15px_0] w-[36px] h-[33px]"></button>
            <button class="hidden lg:inline bg-[linear-gradient(125deg,_#DC9536,_#FFC476,_#DC9536)] cursor-pointer rounded-[0_15px_15px_0] w-[125px] h-[77px]"></button>
          </div>
        </div>
        <img src="../src/Images/Home/immersion-decor-left.svg" alt="" class="block ml-auto relative rotate-270 w-1/6 lg:w-auto -mt-2" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;