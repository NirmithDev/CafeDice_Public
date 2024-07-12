import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="text-gray-600 body-font overflow-hidden mt-20">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                    <img alt="reserve" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://static.wixstatic.com/media/3683c8_7e737a4c25944344a7d178b7f49cb270~mv2.jpg/v1/fill/w_1600,h_737,fp_0.55_0.64,q_85,enc_auto/3683c8_7e737a4c25944344a7d178b7f49cb270~mv2.jpg" width={400} height={400}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">RESERVATION DETAILS</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {/* Rating stars SVGs */}
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                {/* Action buttons */}
                            </span>
                        </div>
                        <p className="leading-relaxed">We have just started using a new reservation software, Tock! Reservations are $15 a person for 3 hours of game time. All reservations can be made on our new site:</p>
                        <div className="flex justify-center mt-5">
                            <a href="https://www.exploretock.com/sipnplay/" target="_blank" rel="noopener noreferrer" className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Make a Reservation?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">BIRTHDAY PACKAGES</h1>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium text-gray-900 mb-2">Renting entire backroom:</h2>
                            <p className="leading-relaxed">- $350 for 3 hours of game time all to your party!</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium text-gray-900 mb-2">Birthday Backroom Packages:</h2>
                            <p className="leading-relaxed">
                                - $550 Birthday basic package. Have the entire backroom to yourselves and get pizza and soda for the whole party! For ten people, each additional person is +$30
                            </p>
                            <p className="leading-relaxed">
                                - $700 Birthday premium package. Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45
                            </p>
                        </div>
                        <p className="leading-relaxed">For any other large party inquiries, do fill out the form above!</p>
                    </div>
                    <img alt="birthday packages" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://static.wixstatic.com/media/3683c8_71691348582245be8256fb4da77c466c~mv2.png/v1/fill/w_760,h_658,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3683c8_71691348582245be8256fb4da77c466c~mv2.png" width={200} height={200}/>
                </div>
            </div>
        </section>


        
    </>
  )
}

export default page