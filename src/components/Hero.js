import React from 'react'
import TextButton from '@/components/TextButton';

const Hero = () => {
  return (
		<div className='flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900'>
			<div className='mx-8 mt-32 space-y-2 text-center text-white text-4xl sm:text-6xl font-bold'>
				<h1>Your Next</h1>
				<h1 className='text-purple-100'>Versatile & Passionate</h1>
				<h1>Analyst / Programmer</h1>
			</div>
			<div className='text-center mt-8 mx-8 text-white/70 text-lg sm:text-2xl'>
				<h2>Hi, I am Sheldon.</h2>
				<h2>I analyze data and develop websites & AI applications.</h2>
			</div>
			<div className='mt-8'>
				<TextButton buttonText='See my work' url='#project' />
			</div>
		</div>
	);
}

export default Hero