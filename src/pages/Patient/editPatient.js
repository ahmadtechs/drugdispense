import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {Typography,TextField, Box,MenuItem,Select,
        FormControl,InputLabel} from '@material-ui/core';
import useStyles from './styles'
import EditIcon from '@material-ui/icons/Edit';

 const EditPatient = (props) => {
  const {patRegNo,name,phone,gender,genotype,knownAllegies,address,bloodGroup} = props
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    name: name,
    regNo: patRegNo,
    phone: phone,
    gender: gender,
    genotype: genotype,
    knownAllegies: knownAllegies,
    address: address,
    bloodGroup: bloodGroup
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
};

  const classes = useStyles();

  return (
    <div>
      <EditIcon 
      variant="contained"  
      onClick={handleClickOpen}
      className={classes.editIcon}/>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <div className={classes.mainDialogBody}>
        <form 
        // onSubmit={handleSubmit}
        >
        <Typography className={classes.headers}>
        UPDATE PATIENT
        </Typography>
        <div className="centerWrapper">
        <TextField
        autoFocus={true}
        name="name"
        label="Name"
        size="small"
        fullWidth
        value={state.name}
        onChange={handleChange}
        margin="dense"
        className={classes.textFields}
        />
        <Box>
        <TextField
        name="regNo"
        label="Reg No."
        size="small"
        value={state.regNo}
        onChange={handleChange}
        margin="dense"
        className={classes.textFields1}
        />
        <TextField
        name="phone"
        label="Tel. Phone"
        size="small"
        margin="dense"
        value={state.phone}
        onChange={handleChange}
        className={classes.textFields2}
        />
        </Box>
        <Box mt={1} mb={0.5}>
        <FormControl size="small" className={classes.textFields1} >
        <InputLabel id="demo-simple-select-outlined-label" variant="outlined">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="gender"
          value={state.gender}
          onChange={handleChange}
          variant="outlined"
        > 
          <MenuItem value={'M'}>Male</MenuItem>
          <MenuItem value={'F'}>Female</MenuItem>
        </Select>
        </FormControl>
        <FormControl size="small" className={classes.textFields2} >
        <InputLabel id="demo-simple-select-outlined-label" variant="outlined">Genotype</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="genotype"
          value={state.genotype}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value={'AA'}>AA</MenuItem>
          <MenuItem value={'AS'}>AS</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <TextField
        name="knownAllegies"
        label="Known Allegies"
        size="small"
        fullWidth
        value={state.knownAllegies}
        onChange={handleChange}
        margin="dense"
        className={classes.textFields}
        />
         <TextField
        name="address"
        label="Address"
        size="small"
        fullWidth
        value={state.address}
        onChange={handleChange}
        margin="dense"
        className={classes.textFields}
        />
         <TextField
        name="bloodGroup"
        label="Blood Group"
        size="small"
        value={state.bloodGroup}
        onChange={handleChange}
        margin="dense"
        className={classes.textFields1}
        />
        </div>
        <div>
        <Button
        type="submit"
        variant="outlined" 
        className={classes.buttons} 
        >
        Submit
        </Button>
        <Button 
        onClick={handleClose}  
        className={classes.cancelButtons} 
        >
        Cancel
        </Button>
        </div>
        </form>
        </div>
      </Dialog>
    </div>
  );
 }
export default EditPatient;