import React from "react";

import Michelle from "../Images/Sanrio/Michelle Chung (President) - Pochacco.png";
import Darren from "../Images/Sanrio/Darren Zheng (Vice President) - Tuxedo Sam.png";
import Brennen from "../Images/Sanrio/Brennen Le (Fundraising Chair) - Hangyodon.png";
import Megan from "../Images/Sanrio/Megan Liu (Treasurer) - Keroppi.png";
import Betty from "../Images/Sanrio/Betty Au (Secretary) - Hanamaruobake.png";
import Ijeoma from "../Images/Sanrio/Ijeoma Nwaka (Graphic Designer) - Cinnamoroll.png";
import Rhea from "../Images/Sanrio/Rhea Patel (PR Chair) - Gudetama.png";
import Davy from "../Images/Sanrio/Davy Ling (Culture Chair) - Pekkle.png";
import Rowena from "../Images/Sanrio/Rowena Liu (Historian) - Hello Kitty.png";
import Ruka from "../Images/Sanrio/Ruka Fakoya (Advisor) - Pompompurin.png";

const members = [
  { name: "Michelle Chung", role: "President", sanrio: Michelle },
  { name: "Darren Zheng", role: "Vice President", sanrio: Darren },
  { name: "Brennen Le", role: "Fundraising Chair", sanrio: Brennen },
  { name: "Megan Liu", role: "Treasurer", sanrio: Megan },
  { name: "Betty Au", role: "Secretary", sanrio: Betty },
  { name: "Ijeoma Nwaka", role: "Graphic Designer", sanrio: Ijeoma },
  { name: "Kristi Sunwar", role: "Graphic Designer", sanrio: "" },
  { name: "Rhea Patel", role: "PR Chair", sanrio: Rhea },
  { name: "Davy Ling", role: "Culture Chair", sanrio: Davy },
  { name: "Rowena Liu", role: "Historian", sanrio: Rowena },
  { name: "Alvin Zhou", role: "Videographer", sanrio: "" },
  { name: "Ruka Fakoya", role: "Advisor", sanrio: Ruka },
];

function Officers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-orange-700 to-yellow-600 px-4 sm:px-10 py-10 relative pb-24">
      {/* Lantern decorations */}
      <img src={"Lantern.png"} alt="lantern" className="absolute top-6 left-10 w-14 animate-bounce max-sm:w-10 max-sm:left-4" />
      <img src={"Lantern.png"} alt="lantern" className="absolute top-3 left-80 w-14 animate-bounce max-sm:left-1/3 max-sm:w-10" />
      <img src={"Lantern.png"} alt="lantern" className="absolute top-3 right-80 w-14 animate-bounce max-sm:right-1/3 max-sm:w-10" />
      <img src={"Lantern.png"} alt="lantern" className="absolute top-6 right-10 w-14 animate-bounce max-sm:w-10 max-sm:right-4" />

      <h1
        className="text-center text-3xl font-bold text-white mb-12 max-sm:text-2xl max-sm:mb-8"
        style={{ fontFamily: "Lexend Deca" }}
      >
        Officers
      </h1>

      <div className="bg-[#ffdcac] rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto relative z-10 max-sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 max-sm:gap-6">
          {members.map((member, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative bg-[#B578ED] p-[4px] border border-[#9E162D] rounded-t-full rounded-b-2xl shadow-lg w-47 max-sm:w-full max-sm:max-w-[10rem]">
                <div className="bg-white rounded-t-full rounded-b-2xl overflow-hidden">
                  <img
                    src={member.sanrio}
                    className="w-40 h-48 object-cover max-sm:w-full max-sm:h-40"
                    alt={member.name}
                  />
                </div>

                {/* Ribbon / Heart decorations */}
                {index % 2 === 1 && (
                  <img
                    src={"Ribbon.png"}
                    alt="ribbon"
                    className="absolute -top-22 left-1/2 transform -translate-x-1/2 w-60 max-sm:-top-16 max-sm:w-36"
                  />
                )}

                {index % 2 === 0 && (
                  <img
                    src={"Heart.png"}
                    alt="heart"
                    className="absolute top-4 -left-22 w-65 max-sm:-left-15 max-sm:w-32"
                  />
                )}

                {/* Sanrio sticker */}
                {member.sanrio && (
                  <img
                    src={member.sanrio}
                    alt={member.name}
                    className="absolute bottom-0 right-0 w-14 h-15 translate-x-4 translate-y-4 max-sm:w-10 max-sm:h-10 max-sm:translate-x-2 max-sm:translate-y-2"
                  />
                )}
              </div>

              <h2
                className="mt-3 text-base font-semibold text-black max-sm:text-sm"
                style={{ fontFamily: "Exo" }}
              >
                {member.name}
              </h2>
              <p
                className="text-sm text-gray-800 max-sm:text-xs"
                style={{ fontFamily: "ZCOOL XiaoWei" }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        src={"LanternBackground.png"}
        alt="lantern background"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "40%",
          objectFit: "cover",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}

export default Officers;
