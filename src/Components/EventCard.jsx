import { div } from 'motion/react-client';
import React from 'react';

const EventCard = ({eventTitle="Upcoming Event", date, time, location, desc}) => {
    return (
        <div class="relative w-fit">
            <img class="absolute -top-8 z-10 -right-6" src="/images/home/star.svg" alt="" />
            <div class="flex flex-col gap-4 p-6 w-full bg-linear-[180deg,#6F151C_0%,#6F151C] text-white text-lg md:text-xl font-['Inter']" style={{clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 7.5% 100%, 0 96%)'}}>
                <img src="/images/home/eventCardPlaceholder.png" alt="" />
                <h3 class="font-bold text-xl lg:text-[30px] text-[#E0A552] tracking-[5%]">{eventTitle}</h3>
                
                {/* Event details */}
                <div>
                    <span class="mb-1 flex max-[1081px]:flex-col max-[1081px]:gap-1.25 gap-5">
                        <span class="flex flex-nowrap gap-1">
                            <img class="w-[18px] mr-1 h-auto" src="/images/home/calendar-icon.svg" alt="" />
                            <p class="inline-block whitespace-nowrap">{date}</p>
                        </span>

                        <span class="flex flex-nowrap gap-1">
                            <img class="w-[18px] mr-1 h-auto" src="/images/home/clock-icon.svg" alt="" />
                            <p class="inline-block whitespace-nowrap">{time}</p>
                        </span>
                    </span>
                <span class="flex items-start">
                    <img class="w-[18px] mr-1 pt-1.25 h-auto" src="/images/home/social-contact-icon.svg" alt="" />
                    <p>{location}</p>
                </span>
                <p>{desc}</p>
                </div>

                <button class="w-fit py-3 px-6 text-white bg-[#AD1F26]" style={{clipPath: 'polygon(0% 0%, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)'}}>See Post</button>
            </div>
        </div>
    )
}

export default EventCard;