'use client';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import AvatarGroup from '@mui/material/AvatarGroup';
import { TextLinkButton } from '@/components/button/TextLinkButton';
import {
  StyledCard,
  StyledCardContentWrapper,
  StyledCardTitleWrapper,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardAction,
  StyledAvatar,
} from '@/utils/styledComponent';
import { CardProps } from '@/types/types';

export const CardComponent: React.FC<CardProps> = ({id, title, description, imageUrl, techStacks, techStackIconUrls = [], projectUrl}) => {
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
          <AvatarGroup max={3} sx={{overflow: 'clip'}}>
            {techStacks.map((tech, i) => {
              return (
                <Tooltip key={`${id}-${tech}`} title={tech}>
                  <StyledAvatar key={`${id}-${tech}`} alt={tech} src={`${techStackIconUrls[i]}`}/>
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