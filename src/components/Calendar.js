import React, { useState } from "react";
import dayjs from "dayjs";
import events from "../events.json";

const Calendar = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today.month());
  const [currentYear, setCurrentYear] = useState(today.year());

  const getDaysInMonth = () => dayjs(new Date(currentYear, currentMonth + 1, 0)).date();
  const getStartDay = () => dayjs(new Date(currentYear, currentMonth, 1)).day();

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear(currentYear - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear(currentYear + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth();
    const startDay = getStartDay();
    const calendarCells = [];

    // Blank cells before the first day
    for (let i = 0; i < startDay; i++) {
      calendarCells.push(<div key={`empty-${i}`} className="h-24 border rounded-lg bg-white" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = dayjs(new Date(currentYear, currentMonth, day));
      const formattedDate = dateObj.format("YYYY-MM-DD");
      const isToday = formattedDate === today.format("YYYY-MM-DD");
      const dayEvents = events.filter((e) => e.date === formattedDate);

      calendarCells.push(
        <div
          key={day}
          className={`h-24 p-2 border rounded-lg text-sm bg-white shadow-sm flex flex-col ${
            isToday ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <div className="text-gray-500 font-semibold">{day}</div>
          <div className="mt-1 space-y-1 overflow-hidden">
            {dayEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md truncate"
                title={`${event.title} @ ${event.time}`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return calendarCells;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {dayjs(new Date(currentYear, currentMonth)).format("MMMM YYYY")}
        </h1>
        <div className="space-x-2">
          <button
            onClick={goToPreviousMonth}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            &larr;
          </button>
          <button
            onClick={goToNextMonth}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
