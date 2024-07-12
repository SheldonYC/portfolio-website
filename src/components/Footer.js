import React from 'react'
import TextButton from '@/components/TextButton'
import IconButton from '@/components/IconButton';
import SectionTitle from '@/components/SectionTitle';

const Footer = () => {
	const LINKEDIN = "https://www.linkedin.com/in/sheldonng/"
	const GITHUB = "https://github.com/SheldonYC";
  return (
		<div className="flex flex-col mx-8 mt-16 space-y-8 justify-center items-center bg-purple-900">
			<SectionTitle title="Interested to work with me?"/>

			<div className="text-center mx-8 text-white text-lg sm:text-2xl">
				<h2>Connect to me on LinkedIn and leave a message!</h2>
			</div>

			<TextButton buttonText="Contact me now!"url={LINKEDIN}/>

			<div className="flex flex-col sm:flex-row mx-8 w-[80vw] pb-8 items-center sm:justify-between">
				<p className="text-white text-center text-lg sm:text-2xl">
					©2024 SheldonYC. All rights reserved.
				</p>
				<div className="space-x-8 mt-4 sm:mt-0">
          <IconButton isToExternal={true} url={LINKEDIN} iconName="linkedin" />
          <IconButton isToExternal={true} url={GITHUB} iconName="github" />
        </div>
			</div>
		</div>
	);
}

export default Footer
