import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
 return (
  <div className="md:mx-10">

    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

      {/*....left.....*/}
      <div className="mb-5">
        <img className="w-40 mb-5" src={assets.logo} alt="Logo" />

        <p className="w-full md:w-2/3 text-gray-600 leading-6">
          A comprehensive platform to book appointments with world-class doctors.
          <br />
          Enjoy secure payments and schedule consultations easily from the comfort of your home.
        </p>
      </div>

      {/*....middle.....*/}
      <div>
        <p className="text-xl font-medium mb-5">
          COMPANY
        </p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      {/*....right.....*/}
      <div>
        <p className="text-xl font-medium mb-5">
          GET IN TOUCH
        </p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>+9113161047</li>
          <li>kumarraj0932@gmail.com</li>
        </ul>
      </div>

    </div>

    {/*.....CopyRight..... */}
    <div>
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright © 2026 Raj Kumar Gupta - All Rights Reserved.
      </p>
    </div>

  </div>
);
}

export default Footer
