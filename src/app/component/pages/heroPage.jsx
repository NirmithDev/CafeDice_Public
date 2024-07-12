'use client'
import React, { useState, useEffect } from 'react';
import './Hero.css'; // Import your CSS file for animations

const Hero = () => {
  const [openingInfo, setOpeningInfo] = useState('');

  // Function to calculate time until closing and opening hours
  const calculateTimeAndHours = () => {
    const now = new Date();
    const closingTimes = [
      { day: 'Sunday', closeTime: 23, openTime: '10:00' },
      { day: 'Monday', closeTime: 23, openTime: '11:00' },
      { day: 'Tuesday', closeTime: 23, openTime: '11:00' },
      { day: 'Wednesday', closeTime: 23, openTime: '11:00' },
      { day: 'Thursday', closeTime: 23, openTime: '11:00' },
      { day: 'Friday', closeTime: 24, openTime: '11:00' },
      { day: 'Saturday', closeTime: 24, openTime: '10:00' }
    ];

    const today = closingTimes.find(day => day.day === now.toLocaleDateString('en-US', { weekday: 'long' }));
    if (!today) return { closing: '', opening: '' };

    const closeHour = today.closeTime;
    const closeTime = new Date(now);
    closeTime.setHours(closeHour, 0, 0, 0);

    const [openHour, openMinute] = today.openTime.split(':');
    const openTime = new Date(now);
    openTime.setHours(parseInt(openHour, 10), parseInt(openMinute, 10), 0, 0);

    const diff = closeTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    let closingInfo = '';
    if (now < openTime) {
      closingInfo = `Opens at ${today.openTime}`;
    } else if (now > closeTime) {
      closingInfo = `Closed`;
    } else if (hours === 0 && minutes <= 30) {
      closingInfo = `Closing soon (${hours}h ${minutes}m left)`;
    } else {
      closingInfo = `Open (${hours}h ${minutes}m until close)`;
    }

    return { closing: closingInfo, opening: today.openTime };
  };

  // Update openingInfo state on component mount and every minute
  useEffect(() => {
    setOpeningInfo(calculateTimeAndHours());
    const interval = setInterval(() => {
      setOpeningInfo(calculateTimeAndHours());
    }, 60000); // Check every minute

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <>
      <section
        className="text-gray-600 body-font relative mt-20"
        style={{
          backgroundImage: "url('/pixel-jeff-cafe.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl md:text-6xl mb-6 font-bold text-white">Welcome to Sip&Play</h1>
            <p className="mb-8 leading-relaxed text-gray-200 text-lg md:text-2xl">
              At Sip&Play, we offer a unique experience combining delicious snacks with a fun, safe environment for playing board games. Whether you're looking for a place to relax with friends or host an event, we've got you covered.
            </p>
            <div className="flex justify-center">
              <a href="/about" className="inline-flex text-white bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">About Us</a>
              <a href="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</a>
            </div>
            {openingInfo && <p className={`text-gray-300 text-lg mt-4 ${openingInfo.opening ? 'pop' : ''}`}>{openingInfo.closing}</p>}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">HOURS</h2>
            <h1 className="sm:text-3xl text-2xl lg:text-4xl font-medium title-font mb-4 text-white">New Opening Hours</h1>
          </div>
          <div className="lg:w-2/3 mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-1900 text-sm bg-gray-200 rounded-tl rounded-bl">Day</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-1900 text-sm bg-gray-200">Opening Hours</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-1900 text-sm bg-gray-200 rounded-tr rounded-br">Kitchen Closes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">Sunday</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">10am - 11pm</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">8pm</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">Monday - Thursday</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">11am - 11pm</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">8pm</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">Friday</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">11am - Midnight</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-white">9pm</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-white">Saturday</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-white">10am - Midnight</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-white">9pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">SERVICES PROVIDED</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Snacks and Games</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our range of services including delicious food options, professional catering services, and fun games for all occasions.</p>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-full md:w-1/3 px-8 py-6 border-l-2 border-gray-200 border-opacity-60 max-w-sm">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Delicious Food</h2>
              <p className="leading-relaxed text-base mb-4">Enjoy a variety of mouth-watering dishes prepared with fresh ingredients and culinary expertise.</p>
              <a href="/menu" className="text-yellow-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="w-full md:w-1/3 px-8 py-6 border-l-2 border-gray-200 border-opacity-60 max-w-sm">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fun Games</h2>
              <p className="leading-relaxed text-base mb-4">Add excitement to your event with our selection of fun and engaging games suitable for all ages.</p>
              <a href="/boardgames" className="text-yellow-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <a href="/contact" className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
