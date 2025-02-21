import React from 'react'
import heroGraphic from '../images/heroGraphic.jpg';
import { Link } from 'react-router-dom';
import Aboutus from '../components/Aboutus';
import Footer from '../components/Footer';
import Why from '../components/Why';

export default function Landing() {
  return (
    <div>
  <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-20 md:py-12 bg-gray-100 rounded-lg shadow-lg">
  <div className="max-w-md text-center md:text-left">
    <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
      Analyze  YouTube
    </h1>
    <p className="mt-3 text-lg text-gray-600">
      Understand sentiment with advanced AI analysis.
    </p>

    <Link to="/Login">
     <button className="mt-5 px-8 py-3 bg-blue-600 text-white font-semibold  shadow-md hover:bg-blue-700">
      Get Started
    </button>
    </Link>
  </div>
  <img
    src={heroGraphic}
    alt="Hero Graphic"
    className="w-full max-w-sm md:max-w-md lg:max-w-lg mt-6 md:mt-0"
  />
</div>
<Aboutus/>
<Why/>
<Footer/>
</div>
  )
}
