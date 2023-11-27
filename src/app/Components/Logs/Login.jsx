import Image from 'next/image';

const Login = () => {
  const googleLogo = require('../../Images/ggle.png');
  const facebookLogo = require('../../Images/fb.png');

  return (
    <div className='flex flex-col justify-between bg-secondary h-screen py-24 pt-28 px-3' id='home-bg'>
      <div className='flex flex-col'>
        <h1 className='text-white font-Aptos flex flex-col'>
          <span className='font-extrabold text-black tracking-wide text-5xl leading-normal'>Welcome to</span>
          <span className='text-2xl font-bold text-secondary'>KwadaiFoods</span>
        </h1>
        <p>Your favori  te organic foods plug, delivered to your doorstep</p>
      </div>
      <div className='flex flex-col justify-around h-2/6'>
        <h1 className='text-center text-primary tracking-wider'>
          Sign Up 
        </h1>

        <div className='flex justify-around'>
          <button className='border-2 w-40 h-14 bg-primary rounded-full text-black font-bold flex items-center justify-center'>
            <Image src={googleLogo} alt='Facebook Logo' className='h-6 w-6 mr-2' />
            Facebook
          </button>
          <button className=' w-36 h-14 bg-primary rounded-full text-black font-bold flex items-center justify-center'>
            <Image src={facebookLogo} alt='Google Logo' className='h-6 w-6 mr-2' />
            Google
          </button>
        </div>
        <div className='flex justify-around items-center flex-col'>
          <button className='w-80 h-14 border-2 text-primary rounded-full bg-back'>Start with E-mail or Phone</button>
        </div>

      </div>
    </div>
  );
};

export default Login;
