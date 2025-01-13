import * as React from 'react';
import { Carousel } from '@/components/display/Carousel';
import { CardProps } from '@/components/display/Card';
import {
  StyledPageWrapper,
  StyledSectionHeader,
  StyledSectionWrapper,
} from '@/utils/styledComponent';

import { getProjects } from '@/firebase/service';

export default async function PorjectPage() {
  const allProjects: CardProps[] = await getProjects(false);
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
        <Carousel data={featuredProjects}/>
      </StyledSectionWrapper>
    </StyledPageWrapper>
  )
}