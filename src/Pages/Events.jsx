import { useMemo, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import EventCard from "../Components/EventCard";
import EventCarousel from "../Components/EventCarousel";
import yearsData from "../mock-data/years.json";

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
        navigate("/events", { replace: true });
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
    const upcoming = eventsForYear.filter((event) => new Date(event.date) >= currentDate);
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
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600 text-lg">Loading events...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Section */}
      {isCurrentYear ? (
        <EventCarousel events={upcomingEvents} currentDate={currentDate} />
      ) : (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="uppercase text-sm tracking-[0.2em] font-semibold text-white/85">Archive</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Events from {activeYear}</h1>
            <p className="mt-3 text-white/85 max-w-2xl mx-auto">
              Browse past events from {activeYear}. Use the year switcher below to explore different archives.
            </p>
          </div>
        </section>
      )}

      {/* Events Flexbox Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-slate-900">
            {isCurrentYear ? "All Events" : `${activeYear} Events`}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSort}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:border-rose-500 hover:text-rose-700 rounded-lg transition text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                {sortDescending ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                )}
              </svg>
              {sortDescending ? "Newest First" : "Oldest First"}
            </button>
            
            {/* Year Dropdown */}
            <div className="relative">
              <select
                value={activeYear}
                onChange={(e) => window.location.href = `/Events/${e.target.value}`}
                className="appearance-none px-4 py-2 pr-10 bg-white border border-slate-300 hover:border-rose-500 rounded-lg transition text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500"
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
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {sortedEvents.length === 0 ? (
          <p className="text-slate-600 text-lg">No events found for {activeYear}.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {sortedEvents.map((event) => (
              <EventCard key={event.id} event={event} currentDate={currentDate} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Events;