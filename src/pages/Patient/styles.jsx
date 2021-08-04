
export const primary= 'green';
export const secondary= '#ED3237';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  centerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
},
mainDialogBody : {
  width: '375px',
  padding: 25,
},
headers: {
  color: primary,
  fontFamily: 'roboto, quicksand, futura',
  fontSize: '18px !important',
  fontWeight : '900px !important',
  textAlign: 'left',
  paddingBottom: '20px',
},
textFields1:{
  width: '49%',
},
textFields2:{
  width: '49%',
  fontFamily: 'quicksand, futura-normal, roboto',
  left: theme.spacing(1)
},
textFields:{

},
input: {
  borderColor: 'green !important',
},
editIcon:{
  color: primary
},
buttons: {
  color: 'green !important',
  width: '70px',
  borderRadius: '0px',
  top: theme.spacing(1),
  bottom: theme.spacing(1),
  // left: theme.spacing(2)
 },
cancelButtons:{
  color: 'green !important',
  width: '70px',
  borderRadius: '0px',
  top: theme.spacing(1),
  bottom: theme.spacing(1),
  // left: theme.spacing(2)
  '&:hover' :{
    color: '#ED3237 !important',
}
},
deleteBtn:{
  backgroundColor: 'green !important',
  padding: theme.spacing(2),
  '&:hover' :{
    backgroundColor: '#ED3237 !important',
}
}
}));
export default useStyles;