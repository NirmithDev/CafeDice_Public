import React from 'react';
import sipnplayLogo from '../../../public/sipnplay.png'; // Import your image file
import Image from 'next/image';
import Logo from '@/src/app/component/common/logo';
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-300">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Logo/>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Sip&Play — @Sip&Play
        {/*    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Sip&Play</a>*/}

          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.instagram.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
          </a>

            
          <a href="https://www.facebook.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
          </a>



          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
