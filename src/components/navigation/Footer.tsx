'use client';
import * as React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StyledFooter, StyledSocialsButtonWrapper, StyledSocialsButton } from '@/utils/styledComponent';

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant='h3' sx={{overflow:'hidden', textOverflow: 'ellipsis', whiteSpace:'nowrap'}}>©2025 SheldonYC. All rights reserved.</Typography>
      <StyledSocialsButtonWrapper>
        <Link href='https://github.com/SheldonYC'>
          <StyledSocialsButton>
            <GitHubIcon fontSize='large'/>
          </StyledSocialsButton>
        </Link>
        <Link href='https://www.linkedin.com/in/sheldonng/'>
          <StyledSocialsButton>
            <LinkedInIcon fontSize='large'/>
          </StyledSocialsButton>
        </Link>
      </StyledSocialsButtonWrapper>
    </StyledFooter>
  );
};