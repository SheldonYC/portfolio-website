'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import { StyledLinkButton, StyledLinkButtonTextWrapper } from '@/utils/styledComponent';

interface TextLinkButtonProps {
  label: string;
  link: string;
  isExternalLink?: boolean;
  isContained?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const TextLinkButton: React.FC<TextLinkButtonProps> = ( {label, link, isExternalLink = false, isContained = true, size='medium'}) => {
  return (
    <StyledLinkButton variant={isContained ? 'contained' : 'text'} size={size}>
      <StyledLinkButtonTextWrapper href={link}>
        <Typography sx={{textWrap: 'nowrap'}} variant='button'>
          {label}
        </Typography>
        {isExternalLink && <LaunchIcon fontSize='large'/>}
      </StyledLinkButtonTextWrapper>
    </StyledLinkButton>
  );
};