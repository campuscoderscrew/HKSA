import React, { useMemo } from 'react';

const StarIcon = () => (
  <svg
    width="2rem"
    height="2rem"
    viewBox="0 0 85 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.46919 44.4476L31.3854 52.2123C31.7187 52.3084 32.0221 52.4875 32.2673 52.7327C32.5125 52.9779 32.6916 53.2813 32.7877 53.6146L40.5524 81.5308C40.6733 81.9541 40.9288 82.3264 41.2802 82.5915C41.6316 82.8566 42.0598 83 42.5 83C42.9402 83 43.3684 82.8566 43.7198 82.5915C44.0712 82.3264 44.3267 81.9541 44.4476 81.5308L52.2123 53.6146C52.3084 53.2813 52.4875 52.9779 52.7327 52.7327C52.9779 52.4875 53.2813 52.3084 53.6146 52.2123L81.5308 44.4476C81.9541 44.3267 82.3264 44.0712 82.5915 43.7198C82.8566 43.3684 83 42.9402 83 42.5C83 42.0598 82.8566 41.6316 82.5915 41.2802C82.3264 40.9288 81.9541 40.6733 81.5308 40.5524L53.6146 32.7877C53.2813 32.6916 52.9779 32.5125 52.7327 32.2673C52.4875 32.0221 52.3084 31.7187 52.2123 31.3854L44.4476 3.46919C44.3267 3.04593 44.0712 2.67358 43.7198 2.40849C43.3684 2.1434 42.9402 2 42.5 2C42.0598 2 41.6316 2.1434 41.2802 2.40849C40.9288 2.67358 40.6733 3.04593 40.5524 3.46919L32.7877 31.3854C32.6916 31.7187 32.5125 32.0221 32.2673 32.2673C32.0221 32.5125 31.7187 32.6916 31.3854 32.7877L3.46919 40.5524C3.04593 40.6733 2.67358 40.9288 2.40849 41.2802C2.1434 41.6316 2 42.0598 2 42.5C2 42.9402 2.1434 43.3684 2.40849 43.7198C2.67358 44.0712 3.04593 44.3267 3.46919 44.4476Z"
      fill="url(#paint0_linear_7689_3609)"
      stroke="#E0B552"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7689_3609"
        x1="24.8154"
        y1="11.883"
        x2="60.1846"
        y2="73.117"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E0C852" />
        <stop offset="1" stop-color="#E0A552" />
      </linearGradient>
    </defs>
  </svg>
);

function EventCard({ event, currentDate, variant = 'grid' }) {
  const eventDate = useMemo(() => new Date(event.date), [event.date]);
  const formattedDate = useMemo(
    () =>
      eventDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    [eventDate],
  );

  const showStar = currentDate ? eventDate >= currentDate : false;
  const hasImage = Boolean(event.graphicDesign);
  const timeWindow = [event.startTime, event.endTime]
    .filter(Boolean)
    .join(' – ');
  const isCarousel = variant === 'carousel';

  const cardClasses = [
    'relative flex',
    isCarousel ? 'h-full flex-col md:flex-row' : 'flex-col',
    'bg-[#6B141D] border border-[#AD1F26]/30 rounded-2xl',
  ].join(' ');

  return (
    <card className={cardClasses}>
      {showStar && (
        <div
          title={`Upcoming in ${Math.ceil((eventDate - currentDate) / (1000 * 60 * 60 * 24))} days`}
          className="absolute -top-2 -right-2 z-1 text-[#E0A552]"
        >
          <StarIcon />
        </div>
      )}

      <div
        className={`relative ${isCarousel ? 'h-56 md:h-auto md:w-1/2 md:rounded-l-2xl' : 'h-48'} overflow-hidden rounded-t-2xl bg-[#4a0e15]`}
      >
        {hasImage ? (
          <img
            src={event.graphicDesign}
            alt={`${event.eventName} graphic`}
            className={`h-full w-full object-cover ${isCarousel ? 'md:h-fll' : ''}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-t from-[#4a0e15] to-[#6B141D] text-4xl font-semibold text-[#E0A552]">
            HKSA Event
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-full border border-[#E0A552]/60 bg-[#6B141D]/70 px-3 py-1 text-xs font-semibold text-rose-100 backdrop-blur">
          {formattedDate}
        </span>
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 p-5 ${isCarousel ? 'md:w-1/2' : ''}`}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-xl leading-tight font-semibold text-[#E0A552]">
            {event.eventName}
          </h3>
          <p className="text-sm leading-relaxed text-white/85">
            {event.eventDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-white">
          {event.locationURL ? (
            <a
              href={event.locationURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#AD1F26] px-3 py-1 transition hover:bg-[#AD1F26]/35"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[#E0A552]"
                aria-hidden="true"
              >
                <g fill="#E0A552" fillRule="evenodd">
                  <path d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341M12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.7 15.7 0 0 1-2.418 2.008l-.373.246l-.332.209l-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189l-.171-.109l-.373-.246a15.7 15.7 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7m0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path>
                </g>
              </svg>
              <span>{event.location}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#AD1F26] px-3 py-1 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[#E0A552]"
                aria-hidden="true"
              >
                <g fill="#E0A552" fillRule="evenodd">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" />
                </g>
              </svg>
              <span>{event.location}</span>
            </span>
          )}
          {timeWindow && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#AD1F26] px-3 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[#E0A552]"
                aria-hidden="true"
              >
                <g fill="#E0A552" fillRule="evenodd">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"></path>
                </g>
              </svg>
              <span>{timeWindow}</span>
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {event.postURL && (
            <a
              href={event.postURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#AD1F26] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c72830]"
            >
              Event Post
            </a>
          )}
          {event.galleryURL && (
            <a
              href={event.galleryURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#E0A552] bg-transparent px-4 py-2 text-sm font-semibold text-[#E0A552] transition hover:bg-[#E0A552]/15"
            >
              Gallery
            </a>
          )}
        </div>
      </div>
    </card>
  );
}

export default EventCard;
