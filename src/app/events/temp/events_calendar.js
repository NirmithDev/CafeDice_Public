document.addEventListener('DOMContentLoaded', () => {
  const date = new Date();

  // Define event details for specific days of the week
  const eventsData = {
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
  };

  function renderCalendar() {
    date.setDate(1);

    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
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
    console.log(monthDays)
  }

  function setupEventListeners() {
    // Event delegation for handling clicks on .day elements
    document.querySelector('.days').addEventListener('click', (event) => {
      if (event.target.classList.contains('day')) {
        const dayNumber = parseInt(event.target.dataset.day);
        displayEvent(dayNumber);
      }
    });

    document.querySelector('.prev').addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });

    document.querySelector('.next').addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
  }

  function displayEvent(dayNumber) {
    const eventsContent = document.querySelector('.events-content');
    const dayOfWeek = getDayOfWeek(date.getFullYear(), date.getMonth(), dayNumber);

    if (eventsData[dayOfWeek]) {
      eventsContent.innerHTML = eventsData[dayOfWeek];
    } else {
      eventsContent.innerHTML = '<p>No events on this day.</p>';
    }
  }

  function getDayOfWeek(year, month, day) {
    const dayOfWeekIndex = new Date(year, month, day).getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayOfWeekIndex];
  }

  renderCalendar();
  setupEventListeners();
});
