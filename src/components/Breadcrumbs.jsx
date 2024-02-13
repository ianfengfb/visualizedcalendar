import React from 'react';
import {Typography, Breadcrumbs} from '@mui/material';
import { Dashboard, EditCalendar, Settings } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
// create custom separator for Breadcrumbs
const CustomizedSeparator = () => {
  return (
    <Typography color="white" fontSize='large'>/</Typography>
  );
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator={<CustomizedSeparator />}>
        <NavLink
           className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/calendar'
        >
        <Typography color="white" fontSize='large'><Dashboard sx={{ mr: 0.5, mb: 0.5 }} fontSize="large" />Dashboard</Typography>
        </NavLink>
        <NavLink
           className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/calendar'
        >
          <Typography color="white" fontSize='large'><EditCalendar sx={{ mr: 0.5, mb: 0.5 }} fontSize="large" />Calendar</Typography>
        </NavLink>
        <NavLink
           className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/event-types'
        >
          <Typography color="white" fontSize='large'><Settings sx={{ mr: 0.5, mb: 0.5 }} fontSize="large" />Settings</Typography>
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}