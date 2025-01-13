'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { TextLinkButton } from '@/components/button/TextLinkButton';
import theme from '@/utils/theme';

export const HeroImageText = () => {
  return (
    <React.Fragment>
      <Typography align='center' variant='h2' sx={{maxWidth: '80vw', textAlign: 'center', textWrap: 'wrap', overflow: 'hidden', marginBottom: '16px'}}>
        Hi, I am <span style={{color: theme.palette.secondary.contrastText}}>Sheldon Ng</span>
        <br/>
        A Software Engineer
        <br/>
        I build Gen-AI applications and websites
      </Typography>
      <TextLinkButton label='See My Projects' link='/projects' isContained={true} size='large'/>
    </React.Fragment>
  )
}

