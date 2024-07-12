import React from 'react'
import IconButton from '@/components/IconButton';

const ProjectCard = ({title, description, imageName, techstacks, url}) => {
  const imagePath = `/thumbnail/${imageName}`;
  return (
		<div className='border-purple-100 border-2 rounded-lg w-[80vw] h-auto mt-8 px-4 sm:w-[40vw]'>
			
      <img src={imagePath} alt={title} className='text-white py-4' />
			
      <h1 className='text-white text-xl sm:text-3xl font-bold line-clamp-1 '>
				{title}
			</h1>
			
      <p className='text-white/70 text-base sm:text-xl line-clamp-3 mt-2'>
				{description}
			</p>
			
      <div className='flex flex-row justify-between items-center my-4'>
				<div className='flex flex-row justify-start items-center ml-2'>
					{techstacks.map((tech, index) => (
						<IconButton key={index} iconName={tech} />
					))}
				</div>
				
        <a href={url}>
					<h1 className='text-white text-3xl sm:text-3xl line-clamp-1 mr-2 hover:underline underline-offset-4'>
						See results ↗
					</h1>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard
