import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Typography,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  const handleLogout = () =>{
    window.location.replace('/')
  }

  return (
    <AppBar
      elevation={0}
      {...rest}
      color= 'inherit'
      position="absolute"
      style={{boxShadow: '0px 0.5px 0px #9E9E9E', }}
    >
      <Toolbar>
        
        <Hidden lgDown>
        <Typography variant="h3"
        style={{ paddingLeft:"260px",color:"green"}}>
          Drug Dispensing System
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
            <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon onClick={handleLogout}/>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
        <Typography 
          variant="h5" 
          style={{ color:"green"}}>
          Drug Dispensing System
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
