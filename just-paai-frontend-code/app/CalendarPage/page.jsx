"use client";
import React, { useState } from "react";
import Head from "next/head";
import styles from "./page.module.css"; // Import modular CSS

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("month"); // "month" or "week"
  const [events, setEvents] = useState({}); // Store events {date: [event1, event2]}

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getMonthDates = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const dates = [];
    let week = new Array(7).fill(null);

    for (let i = 0; i < start.getDay(); i++) week[i] = null;

    for (let day = 1; day <= end.getDate(); day++) {
      week[start.getDay()] = new Date(date.getFullYear(), date.getMonth(), day);
      if (start.getDay() === 6 || day === end.getDate()) {
        dates.push(week);
        week = new Array(7).fill(null);
      }
      start.setDate(start.getDate() + 1);
    }

    return dates;
  };

  const getWeekDates = (date) => {
    const startOfWeek = new Date(
      date.setDate(date.getDate() - date.getDay())
    );
    return Array.from({ length: 7 }, (_, i) =>
      new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i)
    );
  };

  const handlePrev = () => {
    setCurrentDate(
      viewMode === "month"
        ? new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        : new Date(currentDate.setDate(currentDate.getDate() - 7))
    );
  };

  const handleNext = () => {
    setCurrentDate(
      viewMode === "month"
        ? new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        : new Date(currentDate.setDate(currentDate.getDate() + 7))
    );
  };

  const addEvent = (date, time) => {
    const eventName = prompt(`Add event for ${date.toDateString()} at ${time}:`);
    if (eventName) {
      const key = date.toDateString();
      const updatedEvents = { ...events, [key]: [...(events[key] || []), { time, name: eventName }] };
      setEvents(updatedEvents);
    }
  };

  return (
    <>
      <Head>
        <title>Calendar Page</title>
      </Head>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <button onClick={handlePrev}>&larr;</button>
          <h2>
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </h2>
          <button onClick={handleNext}>&rarr;</button>
          <button onClick={() => setViewMode("month")}>Month View</button>
          <button onClick={() => setViewMode("week")}>Week View</button>
        </div>
        {viewMode === "month" ? (
          <div className={styles.monthView}>
            <div className={styles.monthHeader}>
              {daysOfWeek.map((day) => (
                <div key={day} className={styles.dayHeader}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.monthBody}>
              {getMonthDates(currentDate).map((week, i) => (
                <div key={i} className={styles.weekRow}>
                  {week.map((date, j) => (
                    <div
                      key={j}
                      className={`${styles.dateCell} ${!date ? styles.emptyCell : ""}`}
                      onClick={() => date && addEvent(date)}
                    >
                      {date && date.getDate()}
                      <div className={styles.events}>
                        {date &&
                          (events[date.toDateString()] || []).map((event, idx) => (
                            <div key={idx} className={styles.event}>
                              {event.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.weekView}>
            <div className={styles.weekHeader}>
              {getWeekDates(currentDate).map((date, i) => (
                <div key={i} className={styles.dayHeader}>
                  {daysOfWeek[date.getDay()]} {date.getDate()}
                </div>
              ))}
            </div>
            <div className={styles.weekBody}>
              {Array.from({ length: 24 }, (_, hour) => (
                <div key={hour} className={styles.hourRow}>
                  <div className={styles.hourLabel}>{hour}:00</div>
                  {getWeekDates(currentDate).map((date, i) => (
                    <div
                      key={i}
                      className={styles.hourCell}
                      onClick={() => addEvent(date, `${hour}:00`)}
                    >
                      <div className={styles.events}>
                        {(events[date.toDateString()] || [])
                          .filter((event) => event.time === `${hour}:00`)
                          .map((event, idx) => (
                            <div key={idx} className={styles.event}>
                              {event.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarPage;