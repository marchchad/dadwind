import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Homeicon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" sx={{
          color: 'primary',
          fontSize: '1.5rem'}} icon={<Homeicon />} />
        <BottomNavigationAction label="Calendar" sx={{
          color: 'primary',
          fontSize: '1.5rem'}} icon={<CalendarTodayIcon />} />
      </BottomNavigation>
    </Box>
  );
}
