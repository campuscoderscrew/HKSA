import React, { useState, useEffect, useRef } from "react";
import EventCard from "./EventCard";

function EventCarousel({ events, currentDate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  if (!events || events.length === 0) {
    return (
      <div className="bg-gradient-to-br from-rose-700 via-rose-500 to-amber-400 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-semibold">No upcoming events</p>
          <p className="mt-2 text-white/85">Check back later for new events!</p>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  const handleFocus = () => {
    setIsPaused(true);
  };

  const handleBlur = () => {
    setIsPaused(false);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (events.length <= 1 || isPaused) return;

    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [events.length, isPaused]);

  return (
    <div className="bg-gradient-to-br from-rose-700 via-rose-500 to-amber-400 py-12">
      <div className="w-full mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
          Upcoming Events
        </h2>
        
        <div className="relative flex items-center">
          {/* Left Click Area */}
          {events.length > 1 && (
            <div
              onClick={goToPrevious}
              className="absolute left-0 top-0 bottom-0 w-[calc(50%-26rem)] min-w-[2rem] z-10 cursor-pointer transition"
              aria-label="Previous event"
            />
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden mx-auto w-full max-w-4xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0 px-4">
                  <EventCard event={event} currentDate={currentDate} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Click Area */}
          {events.length > 1 && (
            <div
              onClick={goToNext}
              className="absolute right-0 top-0 bottom-0 w-[calc(50%-26rem)] min-w-[2rem] z-10 cursor-pointer transition"
              aria-label="Next event"
            />
          )}
        </div>

        {/* Dots Indicator */}
        {events.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`w-3 h-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                    isActive
                      ? "bg-white scale-110"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCarousel;
