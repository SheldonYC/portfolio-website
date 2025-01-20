import * as React from 'react';
import { Carousel } from '@/components/display/Carousel';
import {
  StyledPageWrapper,
  StyledSectionHeader,
  StyledSectionWrapper,
} from '@/utils/styledComponent';
import { CardProps } from '@/types/types';

import { getProjects, getThumbnails, getTechStacksIcons } from '@/supabase/service';

export default async function PorjectPage() {
  const allProjects: CardProps[] = await getProjects(false);
  const thumbnails: string[] = await getThumbnails(allProjects.map(project=>project.imageUrl));
  allProjects.forEach((project, index) => project.imageUrl = thumbnails[index]);
  const flattenedTechStacks = allProjects.reduce((acc, cur) => {
    cur.techStacks.forEach((tech) => {
      if (!acc.includes(tech)) acc.push(tech);
    });
    return acc;
  }, [] as string[]);
  const techStackIconUrls = await getTechStacksIcons(flattenedTechStacks);
  allProjects.forEach((project, index) => {
    project.imageUrl = thumbnails[index];
    project.techStackIconUrls = project.techStacks.map((techStack)=>techStackIconUrls[techStack])
  });
  const featuredProjects: CardProps[] = allProjects.filter(project => project.featured === true);
  return (
    <StyledPageWrapper>
      <StyledSectionWrapper id='Featured'>
        <StyledSectionHeader variant='h2'>
          {`Featured Projects`}
        </StyledSectionHeader>
        <Carousel data={featuredProjects}/>
      </StyledSectionWrapper>
      <StyledSectionWrapper id='Projects'>
        <StyledSectionHeader variant='h2'>
          {`All Projects`}
        </StyledSectionHeader>
        <Carousel data={allProjects}/>
      </StyledSectionWrapper>
    </StyledPageWrapper>
  )
}