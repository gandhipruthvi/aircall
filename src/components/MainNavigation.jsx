import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import DialpadIcon from '@mui/icons-material/Dialpad';
import SettingsIcon from '@mui/icons-material/Settings';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import ActivityLog from "../pages/ActivityLog";

export default function MainNavigation() {
  const [value, setValue] = React.useState(0);

  const renderPage = (pageIndex) => {
      switch (pageIndex){
          case 0:
              return <ActivityLog />
      }
  }

  return (
      <Box sx={{ pb: 0 }}>
          {renderPage(value)}
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
          >
            <BottomNavigationAction label="Calls" icon={<LocalPhoneIcon />} />
            <BottomNavigationAction label="Contacts" icon={<PersonIcon />} />
            <BottomNavigationAction label="Dial" icon={<DialpadIcon />} />
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            <BottomNavigationAction label="Recordings" icon={<RadioButtonCheckedIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
  );
}