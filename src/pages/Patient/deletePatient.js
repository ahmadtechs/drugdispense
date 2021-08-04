import React, {useState} from 'react';
import {Popover,Button} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles'

const DeletePatient = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = (e) =>{
     if(e.target){
      setAnchorEl(null);
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <DeleteIcon 
      aria-describedby={id} 
      variant="contained" 
      color="primary" 
      style={{color:'red', marginLeft:15}}
      onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
      <Button 
      aria-describedby={id} 
      variant="contained" 
      className={classes.deleteBtn}
      onClick={onDelete}>
        Delete this Record
      </Button>
      </Popover>
    </div>
  );
}
export default DeletePatient;