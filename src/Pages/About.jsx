import React from 'react'
import discordIcon from '../Images/discord-brands-solid-full.svg';
import instagramIcon from '../Images/instagram-brands-solid-full.svg';
// import background from '../public/City Background.webp';

import betty from "../Images/Officers/betty.jpg";
import brennen from "../Images/Officers/brennen.jpg";
import darren from "../Images/Officers/darren.jpg";
import davy from "../Images/Officers/davy.jpg";
import ije from "../Images/Officers/ije.jpg";
import karen from "../Images/Officers/karen.jpg";
import kristi from "../Images/Officers/kristi.jpg";
import megan from "../Images/Officers/megan.jpg";
import michelle from "../Images/Officers/michelle.jpg";
import rhea from "../Images/Officers/rhea.jpg";
import rowena from "../Images/Officers/rowena.jpg";

const officers = [
  {
    name: "Michelle Chung",
    role: "President",
    image: michelle,
    objectPosition: "center 30%", // move focus upward
    scale: "scale-180"
  },
  {
    name: "Darren Zheng",
    role: "President",
    image: darren,
    objectPosition: "15% center",
    scale: "scale-150"
  },
  { name: "Brennen Lee", role: "Fundraising Chair", image: brennen, scale: "scale-120"},
  { name: "Betty Au", role: "Secretary", image: betty },
  { name: "Kristi Sunwar", role: "Graphic Designer", image: kristi },
  { name: "Megan Liu", role: "Treasurer", image: megan },
  { name: "Rhea Patel", role: "PR Chair", image: rhea },
  { name: "Davy Ling", role: "Culture Chair", image: davy, scale: "scale-120" },
  { name: "Rowena Liu", role: "Historian", image: rowena },
  { name: "ije", role: "Videographer", image: ije },
  { name: "Karen", role: "Advisor", image: karen },
];

function About() {
  return (
    <div className="bg-[#330008] font-['Inter']">
      {/* Hero Section */}
      <div className="relative w-full h-[420px] bg-[#2a0006] overflow-hidden">

        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, #a21d25 0%, #7a0f16 45%, #2a0006 100%)",
          }}
        />

        {/* Skyline illustration (NOT stretched) */}
        <div
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1200px] max-w-none opacity-90"
          style={{
            backgroundImage: 'url("./City Background.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            height: "500px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-[56px] md:text-[64px] font-bold mb-6">
            About Us
          </h1>

          <p className="text-white text-[18px] md:text-[20px] max-w-[640px] font-semibold leading-relaxed">
            HKSA was founded in 2025 to spread Hong Kong culture in an inclusive
            environment where anyone of all backgrounds are welcomed.
          </p>
        </div>

        {/* Curved bottom (tuned shape) */}
        <svg
          className="absolute bottom-0 w-full h-[110px]"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,55
              C180,85 360,35 540,55
              C720,75 900,95 1080,70
              C1260,45 1380,55 1440,60
              L1440,110
              L0,110
              Z
            "
            fill="#2a0006"
          />
        </svg>
      </div>

      {/* Mission Statement */}
      <div className='flex flex-col justify-center items-center text-[20px]'>
        <span className='py-10'></span>
        <span className="text-[#E0A552] text-[45px] font-bold">Mission Statement</span>
        <span className='mb-[100px] text-white mt-[100px] mr-[20px] ml-[20px] lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px] sm:ml-[20px] sm:mr-[20px] justify-center text-center'>The Hong Kong Student Association (HKSA) at the University of Maryland is a student-governed, non-profit organization dedicated to fostering a strong sense of community. HKSA strives to promote awareness and appreciation of Hong Kong's unique culture, language, and history through social, cultural, and educational events. We serve as a bridge connecting students from Hong Kong, those of Hong Kong heritage, and anyone interested in exploring the region's rich traditions and contemporary identity.</span>
      </div>
      
      {/* Getting Involved */}
      <div className="w-full flex flex-col items-center">
        <span className="text-[#E0A552] text-[45px] font-bold">How to Get Involved</span>

        {/* Card Row */}
        <div className="flex flex-row justify-center gap-10 max-w-7xl px-6 mt-16">

          {/* Join Discord */}
          <div className="bg-[#6a0d14] text-white p-8 w-[260px] shadow-lg clip-card">
            <div className="flex items-center gap-3 mb-4">
              <h2 className='font-bold text-[22px]'>Join Discord</h2>
              <img src={discordIcon} alt="Discord" className="w-8 h-8" />
            </div>
            <p className='text-[18px] mb-4'>
              The best way to stay updated
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-[#6a0d14] text-white p-8 w-[260px] shadow-lg clip-card">
            <div className="flex items-center gap-3 mb-4">
              <h2 className='font-bold text-[22px]'>Follow Our IG</h2>
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              
            </div>
            <p className='text-[18px] mb-4'>
              @umdhksa
            </p>
          </div>

          {/* Events */}
          <div className="bg-[#6a0d14] text-white p-8 w-[260px] shadow-lg clip-card">
            <h2 className='font-bold text-[22px] mb-4'>
              Come to General Body Meetings
            </h2>
            <p className='text-[18px]'>
              Or attend other events
            </p>
          </div>

          {/* Questions */}
          <div className="relative bg-[#6a0d14] text-white p-8 w-[280px] shadow-lg clip-card">
            <h2 className='font-bold text-[22px] mb-3'>
              Have Questions?
            </h2>

            <p className='text-[18px] leading-relaxed'>
              Reach out to us at<br />
              placeholder@umd.edu
            </p>
          </div>
        </div>
      </div>

      {/* Officers Section */}
      <div className="w-full py-24 flex flex-col items-center">

        <h1 className="text-[#E0A552] text-[45px] font-bold mb-20">
          Officers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl px-10">

          {officers.map((officer, index) => (
            <div key={index} className="relative bg-[#6a0d14] p-6 w-[350px] clip-card shadow-xl">

              {/* Role */}
              <div className="absolute left-[-52px] top-1/2 -translate-y-1/2 rotate-[-90deg]">
                <p className="whitespace-nowrap w-[120px] text-center tracking-wide text-[#f5b15c]">
                  {officer.role}
                </p>
              </div>

              {/* Image */}
              <div className="bg-[#e6dccf] p-2 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-[280px] object-cover transition-transform duration-300 ${
                      officer.scale ?? ""
                    }`}
                    style={{
                      objectPosition: officer.objectPosition ?? "center"
                    }}
                  />
                </div>
              </div>

              {/* Name */}
              <div className="absolute right-[-52px] top-1/2 -translate-y-1/2 rotate-[90deg]">
                <p className="whitespace-nowrap w-[120px] text-center tracking-wide text-[#EC9393]">
                  {officer.name}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default About