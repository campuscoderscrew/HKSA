import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventCard from '../Components/EventCard';
import EventCarousel from '../Components/EventCarousel';
import yearsData from '../mock-data/years.json';

function Events() {
  const { year: yearParam } = useParams();
  const navigate = useNavigate();
  const availableYears = yearsData.years;
  const currentDate = useMemo(() => new Date(), []);

  // Check if year is valid and redirect if not
  useEffect(() => {
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      if (!availableYears.includes(parsedYear)) {
        navigate('/events', { replace: true });
      }
    }
  }, [yearParam, availableYears, navigate]);

  const activeYear = useMemo(() => {
    const parsedYear = yearParam ? parseInt(yearParam, 10) : availableYears[0];
    return availableYears.includes(parsedYear) ? parsedYear : availableYears[0];
  }, [yearParam, availableYears]);

  const [eventsForYear, setEventsForYear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortDescending, setSortDescending] = useState(true);

  // Dynamically import events for the active year
  useEffect(() => {
    setLoading(true);
    import(`../mock-data/events-${activeYear}.json`)
      .then((module) => {
        setEventsForYear(module.default.events || []);
        setLoading(false);
      })
      .catch(() => {
        setEventsForYear([]);
        setLoading(false);
      });
  }, [activeYear]);

  const isCurrentYear = activeYear === currentDate.getFullYear();

  const { upcomingEvents, allEvents } = useMemo(() => {
    const upcoming = eventsForYear.filter(
      (event) => new Date(event.date) >= currentDate,
    );
    return { upcomingEvents: upcoming, allEvents: eventsForYear };
  }, [eventsForYear, currentDate]);

  const sortedEvents = useMemo(() => {
    const sorted = [...allEvents].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortDescending ? dateB - dateA : dateA - dateB;
    });
    return sorted;
  }, [allEvents, sortDescending]);

  const toggleSort = () => {
    setSortDescending((prev) => !prev);
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#330008]">
        <p className="text-lg text-white/85">Loading events...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#330008] text-white">
      {/* Header Section */}
      {isCurrentYear ? (
        <EventCarousel events={upcomingEvents} currentDate={currentDate} />
      ) : (
        <section className="relative overflow-hidden bg-linear-to-b from-[#330008] to-[#AD1F26] px-6 pt-12 pb-0 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-base font-semibold tracking-[0.2em] text-white/85 uppercase">
              Archive
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#E0A552] md:text-4xl">
              Events from {activeYear}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">
              Browse past events from {activeYear}.
            </p>
          </div>
        </section>
      )}

      {/*Curved SVG divider background of white and svg of green*/}
      <svg
        width="1512"
        height="176"
        viewBox="0 0 1512 176"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: 'block',
          width: '100%',
          height: '4rem',
          border: 'none',
        }}
      >
        <rect width="1512" height="170" fill="#AD1F26" />
        <path
          d="M787 85.0693C378 157 149.875 79.7964 0 0V175.094H1519.07V85.0693C1377.07 71.0082 1055.19 37.903 787 85.0693Z"
          fill="#330008"
        />
      </svg>

      {/* Events Flexbox Section */}
      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-[#E0A552]">
            {isCurrentYear ? 'All Events' : `${activeYear} Events`}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSort}
              className="flex items-center gap-2 rounded-lg border border-[#E0A552]/30 bg-[#AD1F26] px-4 py-2 text-base font-semibold text-white shadow transition hover:bg-[#c72830]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                {sortDescending ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h7.25m3.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                  />
                )}
              </svg>
              {sortDescending ? 'Newest First' : 'Oldest First'}
            </button>

            {/* Year Dropdown */}
            <div className="relative">
              <select
                value={activeYear}
                onChange={(e) =>
                  (window.location.href = `/Events/${e.target.value}`)
                }
                className="cursor-pointer appearance-none rounded-lg border border-[#AD1F26]/60 bg-[#6B141D] px-4 py-2 pr-10 text-base font-semibold text-white transition hover:border-[#E0A552] focus:ring-2 focus:ring-[#AD1F26] focus:outline-none"
              >
                {availableYears.map((yearValue) => (
                  <option key={yearValue} value={yearValue}>
                    {yearValue}
                  </option>
                ))}
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {sortedEvents.length === 0 ? (
          <p className="text-lg text-white/85">
            No events found for {activeYear}.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {sortedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                currentDate={isCurrentYear ? currentDate : null}
                variant="grid"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Events;
