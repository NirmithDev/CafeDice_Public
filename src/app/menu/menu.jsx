// MenuPage.jsx
'use client';
import React from 'react';

const MenuPage = () => {
  return (
    <div>
      <section id="coffee" className="menuSection">
        <h2 className="sectionHeading">Coffee</h2>
        <div className="menuItems">
          {coffeeItems.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="specialty-drinks" className="menuSection">
        <h2 className="sectionHeading">Specialty Drinks</h2>
        <div className="menuItems">
          {specialtyDrinks.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.price}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="bobas" className="menuSection">
        <h2 className="sectionHeading">Bobas</h2>
        <div className="menuItems">
          {bobaItems.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="hot-bites" className="menuSection">
        <h2 className="sectionHeading">Hot Bites</h2>
        <div className="menuItems">
          {hotBitesItems.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.price}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="salads-sandwiches" className="menuSection">
        <h2 className="sectionHeading">Salads & Sandwiches</h2>
        <div className="menuItems">
          {sandwichSalads.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.price}</div>
              <div className="itemDescription">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="seasonal-menu" className="menuSection">
        <h2 className="sectionHeading">Seasonal Menu</h2>
        <div className="menuItems">
          {seasonalMenuItems.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemPrice">{item.price}</div>
              <div className="itemDescription">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="beer-wine" className="menuSection">
        <h2 className="sectionHeading">Beer & Wine</h2>
        <div className="menuItems">
          {beerWineItems.map((item, index) => (
            <div key={index} className="menuItem">
              <div className="itemName">{item.name}</div>
              <div className="itemDescription">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .menuSection {
          padding: 20px;
          border-bottom: 1px solid #ccc;
          text-align: center;
        }
        .sectionHeading {
          margin-bottom: 20px;
          font-size: 28px;
          font-weight: bold;
          color: #E1C16E;
          font-family: 'Arial', sans-serif;
        }
        .menuItems {
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .menuItem {
          width: 45%; /* Adjust as needed */
          margin-bottom: 20px;
          text-align: left;
        }
        .itemName {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .itemPrice {
          margin-bottom: 5px;
        }
        .itemDescription {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

const coffeeItems = [
  { name: 'LATTE', description: '$4.75 (Hot) / $5.25 (Cold)' },
  { name: 'CORTADO', description: '$4.25 (Hot) / $4.75 (Cold)' },
  { name: 'DRIP COFFEE', description: 'Small: $3 (Hot) / $3.50 (Cold)\nMedium: $3.50 (Hot)\nLarge: $4 (Hot) / $4.25 (Cold)' },
  { name: 'CAFE AU LAIT', description: '$3.25 (Hot)' },
  { name: 'CAPPUCCINO', description: '$4.50 (Hot)' },
  { name: 'MOCHA', description: '$5.75 (Hot) / $6.25 (Cold)' },
  { name: 'RED EYE', description: '$4.50 (Hot) / $4.75 (Cold)' },
  { name: 'AMERICANO', description: '$3.75 (Hot) / $4.25 (Cold)' },
];

const specialtyDrinks = [
  { name: 'MATCHA LATTE', price: '$5.25 (Hot) / $5.75 (Cold)' },
  { name: 'HOT CHOCOLATE', price: '$4.50 (Hot)\nS\'mores: $5.50' },
  { name: 'NUTELLA LATTE', price: '$5.75 (Hot) / $6.25 (Cold)' },
  { name: 'CHAI', price: '$5.00 (Hot) / $5.50 (Cold)' },
  { name: 'DIRTY CHAI', price: '$6.25 (Hot) / $6.75 (Cold)' },
  { name: 'LAVENDER LATTE', price: '$5.75 (Hot) / $6.25 (Cold)' },
  { name: 'ROSE LATTE', price: '$5.75 (Hot) / $6.25 (Cold)' },
  { name: 'BROWN SUGAR LATTE', price: '$5.75 (Hot) / $6.25 (Cold)' },
  { name: 'BUMBLEBEE LATTE', price: '$6.25 (Hot) / $6.75 (Cold)' },
];

const bobaItems = [
  { name: 'BROWN SUGAR BOBA', description: 'Medium: $4.75\nLarge: $5.75\nHot: $5.75\nCaffeine free' },
  { name: 'TARO BOBA', description: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\nCaffeine free, dairy free' },
  { name: 'COCONUT BOBA', description: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\nCaffeine free, dairy free' },
  { name: 'FRUIT GREEN/BLACK TEA', description: 'Medium: $4.25\nLarge: $5.25\nComes in a variety of flavors: mango/strawberry/passionfruit/peach/green apple/lychee/kiwi\nFeel free to mix and match!' },
  { name: 'FRUIT BLACK TEA', description: 'Medium: $4.25\nLarge: $5.25\nComes in a variety of flavors: peach/strawberry\nFeel free to mix and match!' },
  { name: 'JASMINE MILK TEA', description: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\nDairy free' },
  { name: 'WINTERMELON MILK TEA', description: 'Medium: $4.25\nLarge: $5.25\nHot: $5.25\nDairy free' },
];

const hotBitesItems = [
  { name: 'CHICKEN POPPERS', price: '$6.00' },
  { name: 'MOZZ STICKS', price: '$7.00' },
  { name: 'PIGS IN A BLANKET', price: '$7.00' },
  { name: 'TATER TOTS', price: '$5.00' },
  { name: 'CHICKEN TENDERS', price: '$8.00' },
  { name: 'ONION RINGS', price: '$5.00' },
  { name: 'FRIES', price: '$5.00' },
  { name: 'SWEET POTATO FRIES', price: '$6.00' },
];

const sandwichSalads = [
  { name: 'TOASTED CHEESE', price: '$10.00' },
  { name: 'CHICKEN', price: '$13.00', description: 'Spicy mayo, grilled chicken, crispy bacon and avocado on Italian herb focaccia. Comes with chips' },
  { name: 'ITALIAN PANINI', price: '$11.00', description: 'Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy (pesto contains pine nuts). Comes with chips' },
  { name: 'TUNA MELT', price: '$11.00', description: 'House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (can be spicy on request). Comes with chips' },
  { name: 'ZESTO CHICKEN SANDWICH', price: '$13.00', description: 'Basil pesto, grilled chicken, fresh mozzarella and lemon zest on Italian herb focaccia (pesto contains pine nuts). Comes with chips' },
  { name: 'TURKEY CLUB', price: '$11.00', description: 'Roast turkey, lettuce, tomato, crispy bacon and American cheese on sourdough. Comes with chips' },
  { name: 'GRILLED CHEESE', price: '$6.50', description: 'Comes with chips. +bacon/tomato/turkey: $1.50' },
  { name: 'MIXED GREEN SALAD', price: '$6.50', description: 'w/tomato, vegan. +smoked salmon: $5.00. +boiled egg: $1.00. +avocado: $1.50' },
  { name: 'COBB SALAD', price: '$10.00', description: 'Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed with ranch' },
  { name: 'PIZZA PANINI', price: '$11.00', description: 'Pepperoni, fresh mozzarella, marinara and olive oil on Italian herb focaccia and pressed to perfection! Comes with chips' },
  { name: 'SMOKED SALMON TARTINE', price: '$11.00', description: 'Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad' },
  { name: 'AVOCADO TOAST', price: '$10.00', description: 'Avocado mashed with salt, pepper, lemon juice and olive oil on toasted heritage wheat. Comes with a side salad. +egg: $1' },
];

const seasonalMenuItems = [
  { name: 'PINA COLADA', price: '$4.75 (M) / $5.75 (L)', description: 'Our coconut boba with pineapple flavor!' },
  { name: 'MATCHA LEMONADE', price: 'Medium: $5.00\nLarge: $6.00', description: 'Our freshly squeezed lemonade with a balance of an earthy shot of matcha' },
  { name: 'YUZU-ADE', price: 'Large: $5.25', description: 'Popular in South Korea, Yuzu-Ade is a carbonated drink with yuzu marmalade. Yuzu is a citrus with a tart and fragrant flavor of orange and grapefruit.' },
  { name: 'FRESHLY SQUEEZED LEMONADE', price: 'Medium: $4.00\nLarge: $5.00', description: 'Real lemons with our signature recipe = amazing lemonade' },
  { name: 'MATCHA LAVENDER OAT', price: '$6.50', description: 'Lavender infused into our oatmilk steamed over a matcha shot.' },
  { name: 'BERRY LAVENDAR LEMONADE', price: 'Medium: $5.25\nLarge: $6.25', description: 'Made with real bourbon and definitely the drink we\'re most excited for this fall.' },
  { name: 'CITRUS BOBA (GRAPEFRUIT OR ORANGE)', price: 'Large: $6.00', description: 'Made with real fruit juice and fruit slices!' },
  { name: 'ROTATING BEER/WINE PROGRAM', description: 'Check out our beer and wine at the front of our store! We\'re constantly rotating out product from local breweries!' },
];

const beerWineItems = [
  { name: 'BABE ROSE' },
  { name: 'ARCHER ROOSE WHITE/RED' },
  { name: 'KONA LAGER' },
  { name: 'BLUE POINT' },
  { name: 'JUNESHINE' },
  { name: 'LUNAR HARD SELTZERS' },
  { name: 'ALLAGASH WHITE' },
  { name: 'DOC CIDER' },
  { name: 'STELLA ARTOIS' },
  { name: 'SHOCKTOP' },
  { name: 'FINBACK' },
  { name: 'THREE\'S BREWERY' },
];

export default MenuPage;
