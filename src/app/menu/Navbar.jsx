// Navbar.jsx
'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Coffee', image: 'https://static.wixstatic.com/media/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg/v1/fill/w_950,h_741,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg', href: '#coffee' },
  { id: 2, name: 'Specialty Drinks', image: 'https://static.wixstatic.com/media/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg/v1/fill/w_950,h_801,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg', href: '#specialty-drinks' },
  { id: 3, name: 'Bobas', image: 'https://static.wixstatic.com/media/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg/v1/fill/w_683,h_767,al_c,q_85,enc_auto/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg', href: '#bobas' },
  { id: 4, name: 'Hot Bites', image: 'https://static.wixstatic.com/media/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg/v1/fill/w_504,h_410,al_c,lg_1,q_80,enc_auto/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg', href: '#hot-bites' },
  { id: 5, name: 'Salads & Sandwiches', image: 'https://static.wixstatic.com/media/3683c8_18136ea3745a4ade94a28cfa0f630848~mv2.png/v1/fill/w_950,h_1936,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3683c8_18136ea3745a4ade94a28cfa0f630848~mv2.png', href: '#salads-sandwiches' },
  { id: 6, name: 'Seasonal Menu', image: 'https://static.wixstatic.com/media/8addd2e969574e378969eb072bde393f.jpg/v1/fill/w_950,h_1084,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8addd2e969574e378969eb072bde393f.jpg', href: '#seasonal-menu' },
  { id: 7, name: 'Beer & Wine', image: 'https://static.wixstatic.com/media/68fff1c223354128b6136b561187668c.jpg/v1/fill/w_950,h_685,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/68fff1c223354128b6136b561187668c.jpg', href: '#beer-wine' },
];

const Navbar = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll('.navItem');
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
      });
      item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
      });
    });
  }, []);

  return (
    <nav className="navBar">
      {categories.map(category => (
        <Link key={category.id} href={`/menu${category.href}`}>
          <div className="navItem">
            <img src={category.image} alt={category.name} className="navIcon" />
            <span className="navText">{category.name}</span>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .navBar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
          background-color: #E1C16E; /* Background color */
          flex-wrap: wrap; /* For mobile responsiveness */
        }
        .navItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: white;
          transition: transform 0.3s;
          margin: 10px;
          cursor: pointer; /* Add cursor pointer for better UX */
        }
        .navItem:hover {
          transform: scale(1.1);
        }
        .navIcon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 5px;
        }
        .navText {
          font-size: 14px;
          padding: 5px;
          background: rgba(255, 255, 255, 0.2); /* Background color on hover */
          border-radius: 5px;
          transition: background 0.3s;
        }
        .navItem:hover .navText {
          background: rgba(255, 255, 255, 0.5); /* Background color on hover */
        }
        @media (max-width: 600px) {
          .navText {
            font-size: 12px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
