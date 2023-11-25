import React from 'react';
import Image from 'next/image';  // Import the Image component
import Logo from '../../Images/Logo.png';  // Replace 'png' with the actual extension of your image

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-secondary h-screen'>
      <Image src={Logo} className='h-30 w-40' alt="Logo Description"/>
      <h1 className='text-primary sm:text-6xl text-4xl m-10 font-bold sm:font-normal text-center'>KWADAI FOODS</h1>
    </div>
  );
}

export default Landing;