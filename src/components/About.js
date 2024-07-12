import React from 'react'
import SectionTitle from '@/components/SectionTitle'

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center bg-purple-900 mt-16'>
			<SectionTitle title='About me' />
			<div className='text-left mt-8 mx-8 space-y-16 w-[80vw] text-white text-lg sm:text-2xl'>
				<p>
					Artificial intelligence always fascinates me with its capabilities. To
					learn about theories behind the scenes, I studied computer science and
					statistics at university. I have built solid foundations in
					<span className='text-purple-100'> statistical analysis and machine learning </span>
          by practicing tools including but not limited to hypothesis testing
					and regression models.
				</p>
        <p>
					I believe that learning goes beyond the classroom. I gained
          <span className='text-purple-100'> exposure to data governance and the financial sector </span>
          by working as an intern in two note-issuing banks, namely HSBC and BOCHK. 
          This knowledge would never be accessible to me in school without stepping 
          out of my comfort zone. In my last summer internship, I also worked on
          <span className='text-purple-100'> mobile application development and market research</span>.
          I am grateful for every	learning opportunity.
				</p>
        <p>
					Not just learning in a formal environment, I have worked on a lot of
          <span className='text-purple-100'> personal projects for cutting-edge technologies </span>
          like large language models (LLMs). When I am not at the computer, I like to read,
          cook for myself, or play video games. I would recommend everyone to read the book 'The Psychology of Money'.
				</p>
			</div>
		</div>
  )
}

export default About
