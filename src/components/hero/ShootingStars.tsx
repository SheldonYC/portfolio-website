'use client'
import * as React from 'react';
import { 
  StyledShootingStarBackground,
  StyledShootingStar,
} from '@/utils/styledComponent'

export const ShootingStars = ({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const starCounts: number = 10;
  return (
    <StyledShootingStarBackground>
      {Array.from({ length: starCounts }, (_, index) => {
        return (
          <StyledShootingStar key={index}/>
        );
      })}
      {children}
    </StyledShootingStarBackground>
  )
};