import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './SpeedDial.css'

const actions = [
  { icon: <a href='https://www.instagram.com/_.thamiya._/'><InstagramIcon sx={{marginTop:'8px'}} /></a>, name: 'Facebook' },
  { icon: <a href='https://www.facebook.com/'><FacebookIcon sx={{marginTop:'8px'}} /></a>, name: 'Instagram' },
  { icon: <a href='https://www.linkedin.com/in/thamindu-wijerathne-a2a6a12a9/'><LinkedInIcon sx={{marginTop:'8px'}} /></a>, name: 'Twitter' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    //<div className='speed'>
    <Box sx={{position:'fixed', bottom: 16, right: 16}}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'fixed', bottom: 55, right: 45, transform: 'scale(1.2)' }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
    //</div>
  );
}
