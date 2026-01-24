import { useMemo, useState, useEffect } from 'react';
import EventCard from './EventCard.jsx';
import yearsData from '../mock-data/years.json';

function UpcomingEventsSection() {
  const currentDate = useMemo(() => new Date(), []);
  const currentYear = currentDate.getFullYear();
  const availableYears = yearsData.years;

  const [eventsAllYears, setEventsAllYears] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamically import events for multiple years
  useEffect(() => {
    setLoading(true);
    const loadYearEvents = async () => {
      try {
        const loadedEvents = [];
        
        // Load events starting from current year onwards
        for (const year of availableYears) {
          if (year >= currentYear) {
            try {
              const module = await import(`../mock-data/events-${year}.json`);
              if (module.default.events) {
                loadedEvents.push(...module.default.events);
              }
            } catch (error) {
              console.warn(`Could not load events for year ${year}`);
            }
          }
        }
        
        setEventsAllYears(loadedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
        setEventsAllYears([]);
      } finally {
        setLoading(false);
      }
    };

    loadYearEvents();
  }, [currentYear, availableYears]);

  // Filter and sort upcoming events, get only the next 3
  const upcomingEvents = useMemo(() => {
    return eventsAllYears
      .filter((event) => new Date(event.date) >= currentDate)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
  }, [eventsAllYears, currentDate]);

  // Format date from YYYY-MM-DD to "Sat. MMM DD" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <>
        <p className="text-white">Loading upcoming events...</p>
      </>
    );
  }

  if (upcomingEvents.length === 0) {
    return (
      <>
        <p className="text-white">No upcoming events</p>
      </>
    );
  }

  return (
    <>
        {upcomingEvents.map((event, index) => (
            <EventCard 
            key={index}
            event={event}
            currentDate={currentDate}
            variant="flex"
            />
        ))}
    </>
  );
}

export default UpcomingEventsSection;
