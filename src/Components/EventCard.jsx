import React, { useMemo } from "react";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="m12 2.75 2.45 5.31 5.83.5a.75.75 0 0 1 .42 1.31l-4.44 3.86 1.36 5.69a.75.75 0 0 1-1.11.82L12 17.96l-4.51 2.28a.75.75 0 0 1-1.1-.82l1.35-5.69-4.43-3.86a.75.75 0 0 1 .41-1.31l5.84-.5L12 2.75Z" />
  </svg>
);

function EventCard({ event, currentDate }) {
  const eventDate = useMemo(() => new Date(event.date), [event.date]);
  const formattedDate = useMemo(
    () =>
      eventDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    [eventDate]
  );

  const showStar = currentDate ? eventDate >= currentDate : false;
  const hasImage = Boolean(event.graphicDesign);
  const timeWindow = [event.startTime, event.endTime].filter(Boolean).join(" – ");

  return (
    <card className="relative flex flex-col bg-white border border-slate-100 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] overflow-hidden">
      {showStar && (
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg text-amber-500">
          <StarIcon />
        </div>
      )}

      <div className="h-48 bg-slate-100 relative">
        {hasImage ? (
          <img
            src={event.graphicDesign}
            alt={`${event.eventName} graphic`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center text-rose-700 font-semibold">
            HKSA Event
          </div>
        )}
        <span className="absolute bottom-3 left-3 bg-white/90 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full border border-rose-100">
          {formattedDate}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-slate-900 leading-tight">{event.eventName}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{event.eventDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-slate-700">
          {event.locationURL ? (
            <a
              href={event.locationURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-4 h-4 text-rose-600"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.75c-3.5 0-6.25 2.74-6.25 6.25 0 4.67 5.25 11.14 6 12 .1.12.3.12.4 0 .75-.86 6-7.33 6-12 0-3.51-2.75-6.25-6.25-6.25Zm0 8.25a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
              </svg>
              <span>{event.location}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.75c-3.5 0-6.25 2.74-6.25 6.25 0 4.67 5.25 11.14 6 12 .1.12.3.12.4 0 .75-.86 6-7.33 6-12 0-3.51-2.75-6.25-6.25-6.25Zm0 8.25a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
              </svg>
              <span>{event.location}</span>
            </span>
          )}
          {timeWindow && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8.25" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.75v4.25l2.75 1.75" />
              </svg>
              <span>{timeWindow}</span>
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-auto flex-wrap">
          {event.postURL && (
            <a
              href={event.postURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition"
            >
              Event Post
            </a>
          )}
          {event.galleryURL && (
            <a
              href={event.galleryURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition"
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
