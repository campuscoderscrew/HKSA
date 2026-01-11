import { div } from 'motion/react-client';
import React from 'react';

const EventCard = ({eventTitle="Upcoming Event", date, time, location, desc}) => {
    return (
        <div class="relative w-fit">
            <img class="absolute -top-8 z-10 -right-6" src="../src/Images/Home/star.svg" alt="" />
            <div class="flex flex-col gap-4 p-6 w-full bg-linear-[180deg,#6F151C_0%,#6F151C] text-white text-xl font-['Inter']" style={{clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 7.5% 100%, 0 96%)'}}>
                <img src="../src/Images/Home/eventCardPlaceholder.png" alt="" />
                <h3 class="font-bold text-[30px] text-[#E0A552] tracking-[5%]">{eventTitle}</h3>
                
                {/* Event details */}
                <div>
                    <span class="mb-1 flex gap-5">
                    <span class="flex gap-1">
                        <img src="../src/Images/Home/calendar-icon.svg" alt="" />
                        <p class="inline-block">{date}</p>
                    </span>

                    <span class="flex gap-1">
                        <img src="../src/Images/Home/clock-icon.svg" alt="" />
                        <p class="inline-block">{time}</p>
                    </span>
                </span>
                <span class="flex items-start">
                    <img class="pt-1.25" src="../src/Images/Home/social-contact-icon.svg" alt="" />
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