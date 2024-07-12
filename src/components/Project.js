import React from 'react'
import projectCardData from '@/assets/projectCardData';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

const Project = () => {
  return (
		<div id="project">
			<SectionTitle title="My Recent Projects" className="pt-16" />

			<div className="flex flex-row flex-wrap justify-center sm:gap-x-8">
				{projectCardData.map(
					({ id, title, description, imageName, techstacks, url }) => {
						return (
              <ProjectCard key={id}
                title={title}
                description={description}
                imageName={imageName}
                techstacks={techstacks}
                url={url}
              />
						);
					}
				)}
			</div>
		</div>
	);
}

export default Project
