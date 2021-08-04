import React from 'react'
import { Helmet } from 'react-helmet';
import { Box,Container,Grid } from '@material-ui/core';
import Patient from 'src/components/dashboard/Patient'
import Chart from 'src/components/dashboard/Chart';
import Drug from 'src/components/dashboard/Drug';
import Prescribes from 'src/components/dashboard/Prescribes';
import Dispense from 'src/components/dashboard/Dispense';

const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>Dashboard | Drug Dispenser</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Patient />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Prescribes />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Drug />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Dispense sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Chart />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}
export default Dashboard;