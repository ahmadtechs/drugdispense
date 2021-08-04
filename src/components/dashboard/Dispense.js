import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Box,
  LinearProgress,
  Typography
} from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

const Dispense = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL DISPENSE
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            1,050
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'red',
              height: 56,
              width: 56
            }}
          >
            <AddShoppingCart />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);

export default Dispense;
