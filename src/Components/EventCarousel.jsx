import React, { useState, useEffect, useRef } from 'react';
import EventCard from './EventCard';

function EventCarousel({ events, currentDate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const autoScrollRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragDeltaXRef = useRef(0);
  const isDraggingRef = useRef(false);

  if (!events || events.length === 0) {
    return (
      <div className="bg-gradient-to-br from-rose-700 via-rose-500 to-amber-400 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
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
    if (events.length <= 1 || isPaused || hasSelection) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      return;
    }

    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [events.length, isPaused, hasSelection, activeIndex]);

  const getClientX = (event) => {
    if (event.touches && event.touches[0]) {
      return event.touches[0].clientX;
    }
    return event.clientX;
  };

  const isSelectingText = () => {
    const selection =
      typeof window !== 'undefined' ? window.getSelection() : null;
    return (
      selection &&
      selection.type === 'Range' &&
      selection.toString().trim().length > 0
    );
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleSelectionChange = () => {
      setHasSelection(isSelectingText());
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () =>
      document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const handlePointerDown = (event) => {
    if (events.length <= 1) return;
    if (isSelectingText()) return;
    isDraggingRef.current = true;
    dragStartXRef.current = getClientX(event);
    dragDeltaXRef.current = 0;
    setIsPaused(true);
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) return;
    if (isSelectingText()) {
      // Let text selection proceed without interfering with the carousel.
      isDraggingRef.current = false;
      dragDeltaXRef.current = 0;
      setIsPaused(false);
      return;
    }
    const currentX = getClientX(event);
    dragDeltaXRef.current = currentX - dragStartXRef.current;
  };

  const finishDrag = () => {
    if (!isDraggingRef.current) return;

    if (isSelectingText()) {
      isDraggingRef.current = false;
      dragDeltaXRef.current = 0;
      setIsPaused(false);
      return;
    }

    const delta = dragDeltaXRef.current;
    const threshold = 50;

    if (delta > threshold) {
      goToPrevious();
    } else if (delta < -threshold) {
      goToNext();
    }

    dragStartXRef.current = 0;
    dragDeltaXRef.current = 0;
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  const handlePointerUp = () => finishDrag();
  const handlePointerCancel = () => finishDrag();
  const handlePointerLeave = () => finishDrag();

  return (
    <div className="bg-gradient-to-br from-rose-700 via-rose-500 to-amber-400 py-12">
      <div className="mx-auto w-full">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          Upcoming Events
        </h2>

        <div className="relative flex items-center">
          {/* Left Click Area */}
          {events.length > 1 && (
            <div
              onClick={goToPrevious}
              className="absolute top-0 bottom-0 left-0 z-10 w-[calc(50%-26rem)] min-w-[2rem] cursor-pointer transition"
              aria-label="Previous event"
            />
          )}

          {/* Carousel Container */}
          <div
            className="mx-auto w-full max-w-4xl overflow-hidden"
            style={{ touchAction: 'pan-y' }}
            title={
              hasSelection
                ? 'Autoscroll paused. Text selected.'
                : 'Swipe left or right to navigate between events'
            }
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerLeave}
          >
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
              className="absolute top-0 right-0 bottom-0 z-10 w-[calc(50%-26rem)] min-w-[2rem] cursor-pointer transition"
              aria-label="Next event"
            />
          )}
        </div>

        {/* Dots Indicator, changes title if focused */}
        {events.length > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {events.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  title={`Click to focus on event and pause autoscroll.`}
                  className={`h-3 w-3 rounded-full transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none ${
                    isActive
                      ? 'scale-110 bg-white'
                      : 'bg-white/40 hover:bg-white/60'
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
