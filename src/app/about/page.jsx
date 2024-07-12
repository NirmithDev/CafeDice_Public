import React from 'react';

const AboutPage = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-160 overflow-hidden"> 
          <img alt="owner" className="object-cover object-center h-full w-full" src="https://static.wixstatic.com/media/3683c8_7e737a4c25944344a7d178b7f49cb270~mv2.jpg/v1/fill/w_1600,h_737,fp_0.55_0.64,q_85,enc_auto/3683c8_7e737a4c25944344a7d178b7f49cb270~mv2.jpg" /> 
        </div>

        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Jonathan Li</h2>
              <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
              <p className="text-base">This founder shares a passion for board games, boba, and delicious food, so he combined them all to become Sip & Play, Park Slope’s first board game cafe.</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">It is a straightforward concept, come in with your friends and family to play any board game from our library of 300+ games! We hope when you visit, you also enjoy our coffee, espresso, boba, sandwiches, and snacks!</p>
            <a className="text-yellow-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPage;