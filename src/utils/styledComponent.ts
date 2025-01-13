'use client'
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import theme from '@/utils/theme';

export const StyledPageWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 'auto',
  width: '100vw',
});

export const StyledHeroImageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.only('mobile')]: {
    width: '100vw',
    height: '50vh',
  },
  [theme.breakpoints.only('desktop')]: {
    width: '100vw',
    height: '50vh',
  }
});

export const StyledSectionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '16px',
  width: '80vw',
});

export const StyledSectionHeader = styled(Typography)({
  margin: '16px 0',
  textAlign: 'center',
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
});

export const StyledSectionContent = styled(Typography)({
  margin: '0 0 16px 0',
  textAlign: 'center',
  fontWeight: 300,
  color: theme.palette.primary.contrastText,
  whiteSpace: 'pre-line'
});

export const StyledShootingStarBackground = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: `linear-gradient(transparent, #3a1063, transparent)`,
});

export const StyledShootingStar = styled('span')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '4px',
  height: '4px',
  background: '#fff',
  borderRadius: '4px',
  boxShadow: '0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1)', // glowing effect around the star
  animation: 'moving 1.5s linear infinite',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '1px',
    background: 'linear-gradient(90deg,rgba(255,255,255,0.8),transparent)',
  },
  '@keyframes moving': {
    '0%': {
      transform: 'rotate(315deg)',
      opacity: '1',
    },
    '70%': {
      opacity: '1',
    },
    '100%': {
      transform: 'rotate(315deg) translateX(-50vw)',
      opacity: '0',
    },
  },
  '@keyframes tail': {
    '0%': {
      width: '0',
    },
    '40%': {
      width: '128px',
    },
    '100%': {
      width: '0px',
    },
  },
  '&:nth-child(1)': {
    top: '29%',
    left: '29%',
    animation: 'moving 2.5s linear infinite',
  },
  '&:nth-child(1)::before': {
    animation: 'tail 2.5s linear infinite',
  },
  '&:nth-child(2)': {
    top: '35%',
    left: '60%',
    animation: 'moving 3.1s linear infinite',
  },
  '&:nth-child(2)::before': {
    animation: 'tail 3.1s linear infinite',
  },
  '&:nth-child(3)': {
    top: '12%',
    left: '18%',
    animation: 'moving 3.3s linear infinite',
  },
  '&:nth-child(3)::before': {
    animation: 'tail 3.3s linear infinite',
  },
  '&:nth-child(4)': {
    top: '8%',
    left: '52%',
    animation: 'moving 1.6s linear infinite',
  },
  '&:nth-child(4)::before': {
    animation: 'tail 1.6s linear infinite',
  },
  '&:nth-child(5)': {
    top: '37%',
    left: '45%',
    animation: 'moving 1.3s linear infinite',
  },
  '&:nth-child(5)::before': {
    animation: 'tail 1.3s linear infinite',
  },
  '&:nth-child(6)': {
    top: '9%',
    left: '91%',
    animation: 'moving 3.0s linear infinite',
  },
  '&:nth-child(6)::before': {
    animation: 'tail 3.0s linear infinite',
  },
  '&:nth-child(7)': {
    top: '68%',
    left: '92%',
    animation: 'moving 1.7s linear infinite',
  },
  '&:nth-child(7)::before': {
    animation: 'tail 1.7s linear infinite',
  },
  '&:nth-child(8)': {
    top: '45%',
    left: '81%',
    animation: 'moving 4.5s linear infinite',
  },
  '&:nth-child(8)::before': {
    animation: 'tail 4.5s linear infinite',
  },
  '&:nth-child(9)': {
    top: '12%',
    left: '34%',
    animation: 'moving 2.0s linear infinite',
  },
  '&:nth-child(9)::before': {
    animation: 'tail 2.0s linear infinite',
  },
  '&:nth-child(10)': {
    top: '61%',
    left: '83%',
    animation: 'moving 2.1s linear infinite',
  },
  '&:nth-child(10)::before': {
    animation: 'tail 2.1s linear infinite',
  },
});

export  const StyledCarouselWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.only('desktop')]: {
    flexDirection: 'row',
  },
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  margin: '32px 0',
  gap: '32px',
});

export const StyledLinkButton = styled(Button)({
  margin: '8px',
  width: 'auto',
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  borderRadius: '16px',
  ':hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
});

export const StyledLinkButtonTextWrapper = styled(Link)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '8px',
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
});

export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '16px',
  backgroundColor: 'transparent',
  width: '80vw',
  height: 'fit-content',
  maxHeight: '576px',
  [theme.breakpoints.only('desktop')]: {
    width: '40vw',
    height: 'fit-content',
    maxHeight: '768px',
  },
});

export const StyledCardContentWrapper = styled(CardContent)({
  padding: '0',
  margin: '16px 0 0 0',
  width: '100%',
})

export const StyledCardTitleWrapper = styled(Box)({
  display: 'block',
  width: '100%',
  height: '32px',
  [theme.breakpoints.only('desktop')]: {
    height: '48px',
  },
  overflow: 'hidden',
});

export const StyledCardTitle = styled(Typography)({
  height: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

// Using tailwind css line clamp:3
export const StyledCardDescription = styled(Typography)({
  width: '100%',
  overflow: 'hidden',
  display: '-webkit-box',
  'WebkitBoxOrient': 'vertical',
  'WebkitLineClamp': '3'
});

export const StyledCardAction = styled(CardActions)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '8px 0 0 0',
});

export const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.contrastText,
  height: 'var(--header-height)',
});

export const StyledToolbar = styled(Toolbar)(theme.breakpoints.up('desktop'), {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0 32px',
  [theme.breakpoints.only('mobile')]: {
    justifyContent: 'space-between',
    padding: '0 16px',
  },
});

export const StyledToolBarLinkTextWrapper = styled(Link)({
  margin: '0 12px',
  textDecoration: 'none',
  [theme.breakpoints.only('mobile')]: {
    margin: '0',
  },
});

export const StyledFooter = styled('footer')({
  height: 'var(--footer-height)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 32px',
  overflow: 'hidden'
});

export const StyledSocialsButtonWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
});

export const StyledSocialsButton = styled(IconButton)({
  color: theme.palette.primary.contrastText,
});