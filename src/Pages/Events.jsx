import { useState } from "react";
import eventsData from "../mock-data/events-data.json";
import { motion, AnimatePresence } from "motion/react";

function EventCard(props) {
  var [month, day] = props.date.split(" ");
  month = month.slice(0, 3);
  const tags = props.tags;
  return (
    <div className="w-[900px] h-[320px] border-[#cccccc] border-1 rounded-2xl px-[30px] py-[55px] flex flex-row mb-[50px]">
      <div className="flex flex-row w-full">
        <div
          className="uppercase mr-[30px] gap-0 leading-none text-center"
          style={{ fontFamily: `" ZCOOL XiaoWei"` }}
        >
          <p className="text-[25px]">{month}</p>
          <p className="text-[55px]">{day}</p>
        </div>
        {/* Graphic Design */}
        <img
          src={props.graphicDesign}
          alt={props.title}
          className="w-[270px] h-[200px] rounded-[6px] object-cover"
        />
        <div className="flex flex-col ml-[20px] w-[90%]">
          {/* Title */}
          <h2
            className="uppercase text-[23px] tracking-[11px] leading-8.5 whitespace-nowrap"
            style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          >
            {" "}
            {props.title}
          </h2>
          {/* Location and date */}
          <div
            className="text-[15px] flex flex-row mt-[15px] items-center"
            style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          >
            <img src="/Location.png" className="scale-70 mr-[10px]" />
            <p className="mr-[20px]">{props.location}</p>
            <div className="border-l-1 border-black h-full" />
            <p className="ml-[20px]">{props.time}</p>
          </div>
          {/* Description */}
          <p
            className="text-[17px] max-w-[400px] h-[90px] leading-none flex items-center justify-center"
            style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          >
            {props.eventDescription}
          </p>
          {/* The tag buttons */}
          <div className="flex flex-row flex-wrap gap-7">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="py-[8px] px-[10px] border-1 border-[#D9D9D9] rounded-[6px] text-[17px]"
                style={{ fontFamily: `"Poppins"` }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  const eventsList = eventsData.events;
  const [upcoming, setUpcoming] = useState(true);
  const today = new Date();
  const upcomingEvents = eventsList
    .filter((event) => new Date(event.exactDate) > today)
    .sort((a, b) => new Date(a.exactDate) - new Date(b.exactDate));
  const pastEvents = eventsList
    .filter((event) => new Date(event.exactDate) <= today)
    .sort((a, b) => new Date(b.exactDate) - new Date(a.exactDate));
  const mostRecentEvent = upcomingEvents[0];
  const [upcomingEventMonth, upcomingEventDay] =
    mostRecentEvent?.date.split(" ");
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-neutral-100">
      {/* top of page that displays the most recent event */}
      <div className="flex justify-center relative">
        {/* Image of Most Recent Event */}
        <div className="relative w-full">
          <img
            src="/lanternfestivalhksa.png"
            className="h-[550px] w-full object-cover"
          />
          <div className="absolute inset-0 w-[99%] h-[98%] bg-[#513132] opacity-40 pointer-events-none z-10" />

          {/* Card with the event details */}
        </div>
        <div className="w-[816px] h-[432px] absolute left-20 top-8 text-white backdrop-blur-[4px] bg-[rgba(0,0,0,0.2)] rounded-xl border border-[#E7DBDB] z-20">
          <h1
            className="text-[56px] text-center tracking-[10px] text-shadow-white text-shadow-md mt-5 uppercase leading-15"
            style={{ fontFamily: `"Lexend Deca"` }}
          >
            {mostRecentEvent?.eventName}
          </h1>
          <p
            className="text-2xl ml-10 w-[718px] absolute mt-[33px] left-12 drop-shadow-lg"
            style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          >
            {mostRecentEvent?.eventDescription}
          </p>
          <div
            className="flex flex-col absolute left-10 bottom-17 text-center leading-11"
            style={{ fontFamily: `"Lexend Deca"` }}
          >
            <h1 className="text-[48px] font-bold drop-shadow-lg">
              {upcomingEventDay}
            </h1>
            <strong className="text-[18px] drop-shadow-lg">
              {upcomingEventMonth}
            </strong>
          </div>
          <div
            className="absolute bottom-20 left-36 text-2xl drop-shadow-lg"
            style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          >
            <p>{mostRecentEvent?.location}</p>
            <p>{mostRecentEvent?.time}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-[136px] mb-[100px] flex flex-col items-center justify-center space-y-[8px]">
        <h1
          style={{ fontFamily: `"Tiro Bangla"` }}
          className="text-[55px] text-[#BD3921]"
        >
          Events
        </h1>
        <p
          style={{ fontFamily: `" ZCOOL XiaoWei"` }}
          className="text-[27px] w-[753px] text-center"
        >
          As part of our club, we host various events throughout the semester.
          Check them out!
        </p>
      </div>

      {/* Buttons */}
      <div className="ml-[132px]">
        <button
          className={`${
            upcoming
              ? "bg-[#AE282D] text-white"
              : "bg-transparent text-[#989898]"
          } w-[150px] h-[60px] rounded-[13px] text-[23px] transition-colors duration-200`}
          style={{ fontFamily: `"Lexend Deca"` }}
          onClick={() => setUpcoming(true)}
        >
          Upcoming
        </button>
        <button
          className={`${
            !upcoming
              ? "bg-[#AE282D] text-white"
              : "bg-transparent text-[#989898]"
          }  w-[150px] h-[60px] rounded-[13px] text-[23px] transition-colors duration-200`}
          style={{ fontFamily: `"Lexend Deca"` }}
          onClick={() => setUpcoming(false)}
        >
          Previous
        </button>
      </div>

      {/* Events List */}
      <div className="w-full flex flex-col items-center justify-center mt-[50px] perspective-distant">
        <AnimatePresence mode="wait">
          {(upcoming ? upcomingEvents : pastEvents).map((event) => (
            <motion.div
              key={event.id}
              initial={{ rotateX: 0, opacity: 0 }}
              animate={{ rotateX: 360, opacity: 1 }}
              exit={{ rotateX: 720, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <EventCard
                key={event.id}
                title={event.eventName}
                date={event.date}
                location={event.location}
                time={event.time}
                graphicDesign={event.graphicDesign}
                eventDescription={event.eventDescription}
                tags={event.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Events;
