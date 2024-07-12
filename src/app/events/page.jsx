// EventsCalendar.jsx
'use client'
import React, { useState, useEffect } from 'react';
import './temp/events_calendar.css'; // Import your CSS file

const EventsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [eventsData, setEventsData] = useState({
    'Wednesday': `
      <h3>Wednesdays @6pm indoors: Commander night</h3>
      <p>$10 for the whole night + a raffle</p>
      <p>We've been raffling packs and secret lair cards!</p>
    `,
    'Thursday': `
      <h3>Thursdays:</h3>
      <ul>
        <li>Modern @7pm</li>
        <li>$15 entry</li>
        <li>2-1: 4 play boosters + promo pack</li>
        <li>2-0-1: 6 play boosters + promo pack</li>
        <li>3-0: 8 play boosters + foil promo pack</li>
      </ul>
      <p>You can exchange:</p>
      <ul>
        <li>4 play boosters for a free play pass</li>
        <li>6 play boosters for a collector booster pack</li>
      </ul>
      <p>Flesh and Blood @7pm</p>
    `,
    'Saturday': `
      <h3>Saturday:</h3>
      <p>Lorcana @11am!</p>
    `,
    // Add more days and events as needed
  });

  useEffect(() => {
    renderCalendar();
  }, [date]);

  const renderCalendar = () => {
    const monthDays = document.querySelector('.days');
    monthDays.innerHTML = '';

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    document.querySelector('.date').innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="day prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        days += `<div class="day today ${i === new Date().getDate() ? 'active' : ''}" data-day="${i}">${i}</div>`;
      } else {
        days += `<div class="day" data-day="${i}">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="day next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

    setupEventListeners();
  };

  const setupEventListeners = () => {
    document.querySelectorAll('.day').forEach(day => {
      day.addEventListener('click', () => {
        const dayNumber = parseInt(day.dataset.day);
        displayEvent(dayNumber);
      });
    });

    document.querySelector('.prev').addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1);
      setDate(new Date(date));
    });

    document.querySelector('.next').addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1);
      setDate(new Date(date));
    });
  };

  const displayEvent = (dayNumber) => {
    const eventsContent = document.querySelector('.events-content');
    const dayOfWeek = getDayOfWeek(date.getFullYear(), date.getMonth(), dayNumber);

    if (eventsData[dayOfWeek]) {
      eventsContent.innerHTML = eventsData[dayOfWeek];
    } else {
      eventsContent.innerHTML = '<p>No events on this day.</p>';
    }
  };

  const getDayOfWeek = (year, month, day) => {
    const dayOfWeekIndex = new Date(year, month, day).getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayOfWeekIndex];
  };

  return (
    <section className='containerz'>
      <h1 className='headingEvents'>EVENTS</h1>
      <div className="container">
        
        <div className="calendar-container">
          <div className="calendar">
            <div className="month">
              <i className="fa fa-angle-left prev"></i>
              <div className="date">November 2024</div>
              <i className="fa fa-angle-right next"></i>
            </div>
            <div className="weekday">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days">
              {/* Days will be dynamically generated */}
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="events">
            <h2>Events</h2>
            <div className="events-content">
              <p>Select a day to see events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
