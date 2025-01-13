'use client';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { TextLinkButton } from '@/components/button/TextLinkButton';
import {
  StyledCard,
  StyledCardContentWrapper,
  StyledCardTitleWrapper,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardAction
} from '@/utils/styledComponent';


export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  projectUrl: string;
  featured: boolean;
}

export const CardComponent: React.FC<CardProps> = ({id, title, description, imageUrl, techStacks, projectUrl}) => {
  return (
    <StyledCard key={id}>
      {/* matintain 16:9 ratio as the source image */}
      <CardMedia sx={{width: '100%', height: 'fit-content'}} component='img' image={imageUrl} alt={title} />
      <StyledCardContentWrapper>
        <StyledCardTitleWrapper>
          <StyledCardTitle variant='h4'>
            {title}
          </StyledCardTitle>
        </StyledCardTitleWrapper>
        <StyledCardDescription variant='body2'>
          {description}
        </StyledCardDescription>
        <StyledCardAction>
          <AvatarGroup max={3} spacing ={8}>
            {techStacks.map(techName => {
              return (
                <Tooltip key={`${id}-${techName}`} title={techName}>
                  <Avatar key={`${id}-${techName}`} alt={techName} src={`/techIcons/${techName}.svg`}/>
                </Tooltip>
              )
            })}
          </AvatarGroup>
          <TextLinkButton label='Learn More' link={projectUrl} isExternalLink={true} isContained={false} size='small'/>
        </StyledCardAction>
      </StyledCardContentWrapper>
    </StyledCard>
  );
};