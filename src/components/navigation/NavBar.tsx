'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { StyledAppBar, StyledToolbar, StyledToolBarLinkTextWrapper } from '@/utils/styledComponent';
import theme from '@/utils/theme';

interface Route {
  label: string;
  link: string;
}

export const NavBar = () => {
  const routes: Route[] = [
    {label: 'Home', link: '/'},
    {label: 'Projects', link: '/projects'},
    {label: 'Blog', link: '/blogs'},
  ];
  const [tabIndex, setTabIndex] = React.useState(0);

  const createLinks = (routes: Route[]) => {
    return routes.map((route, index) => (
      <StyledToolBarLinkTextWrapper key={index} href={route.link} onClick={()=> setTabIndex(index)}>
        <Typography variant='h3' sx={{
          color: tabIndex === index ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
          }}>
          {route.label}
        </Typography>
      </StyledToolBarLinkTextWrapper>
    ));
  }
  return (
    <React.Fragment>
      <StyledAppBar>
        <StyledToolbar>
          {createLinks(routes)}
        </StyledToolbar>
      </StyledAppBar>
    </React.Fragment>
  );
};