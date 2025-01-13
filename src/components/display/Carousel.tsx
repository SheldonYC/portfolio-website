'use client';
import * as React from 'react';
import { CardProps, CardComponent } from '@/components/display/Card';
import { StyledCarouselWrapper, StyledSectionContent } from '@/utils/styledComponent';

interface CarouselProps {
  data: CardProps[];
}

export const Carousel: React.FC<CarouselProps> = ({data}) => {
  // fallback when data fetching is unsuccessful
  if (data.length === 0) {
    return (
    <StyledCarouselWrapper>
      <StyledSectionContent>
        No Project Found...
      </StyledSectionContent>
    </StyledCarouselWrapper>
  )}
  return (
    <StyledCarouselWrapper>
      {data.map((cardProps, index) => {
        return (
          <CardComponent  key={index} {...cardProps} />
        )
      })}
    </StyledCarouselWrapper>
  );
};