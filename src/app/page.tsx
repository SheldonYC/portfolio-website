import * as React from 'react';
import { ShootingStars } from '@/components/hero/ShootingStars';
import { TextLinkButton } from '@/components/button/TextLinkButton';
import { Carousel } from '@/components/display/Carousel';
import { CardProps } from '@/components/display/Card';
import { HeroImageText } from '@/components/hero/HeroImageText';
import {
  StyledPageWrapper,
  StyledSectionHeader,
  StyledSectionWrapper,
  StyledSectionContent, 
  StyledHeroImageWrapper,
} from '@/utils/styledComponent';

import { getProjects } from '@/firebase/service';

export default async function HomePage() {
  const featuredProjects: CardProps[] = await getProjects(true);
  return (
    <StyledPageWrapper>
      <StyledSectionWrapper id='Home'>
        <StyledHeroImageWrapper>
          <ShootingStars>
            <HeroImageText />
          </ShootingStars>
        </StyledHeroImageWrapper>
      </StyledSectionWrapper>
      <StyledSectionWrapper id='About'>
        <StyledSectionHeader variant='h2'>
          {`About Me`}
        </StyledSectionHeader>
        <StyledSectionContent variant='body1'>
          {`
          I am currently working full-time as a developer at a startup. I built full-stack web applications for monitoring and using Gen-AI services.\n
          I enjoy building applications to solve everyday problems and I look for opportunities for growth. I have been exploring tools like SLM and Hugging Face. Feel free to check out my projects below!\n
          I like cooking, playing video games (especially rougelikes), and reading books. I would like to try origami next and I am thinking getting a GO 3S from insta360.\n
          `}
        </StyledSectionContent>
      </StyledSectionWrapper>
      <StyledSectionWrapper id='Projects'>
        <StyledSectionHeader variant='h2'>
          {`Previous Projects`}
        </StyledSectionHeader>
        <Carousel data={featuredProjects}/>
      </StyledSectionWrapper>
      <StyledSectionWrapper id='Contact'>
        <StyledSectionHeader variant='h2'>
          {`Contact`}
        </StyledSectionHeader>
        <StyledSectionContent variant='body1'>
          {`Got any opportunities or questions?
          Connect with me on LinkedIn!`}
        </StyledSectionContent>
        <TextLinkButton label='Connect!' link='https://www.linkedin.com/in/sheldonng/' isExternalLink={true} isContained={true}/>
      </StyledSectionWrapper>
    </StyledPageWrapper>
  );
}