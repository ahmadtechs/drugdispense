import React, {useState} from 'react'
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import patients from 'src/__mocks__/patient';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider,} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddPatient from './Patient/addPatient'
import EditPatient from './Patient/editPatient'
import DeletePatient from './Patient/deletePatient'

const PatientList = () => {
  const [list] = useState()
const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
      },
      paper: {
        boxShadow: "none",
      }
    },
    MUIDataTableBodyCell: {
      root: {
        backgroundColor: "#FFF"
      }
    },
    MuiToolbar: {
      root: {
        backgroundColor: '#f00'
      }
    },
    MuiTableCell: {
      head: {
        backgroundColor: 'purple',
      }
    },
    MUIDataTableSelectCell: {
      headerCell: {
        backgroundColor: 'blue',
      }
    },
  }
});


const columns = [
  {
   name: "patRegNo",
   label: "Reg. No",
  },
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "gender",
   label: "Gender",
  },
  {
    name: "genotype",
    label: "Geno.",
   },
   {
    name: "bloodGroup",
    label: "Blod",
   },
  {
   name: "phone",
   label: "Phone",
  },
  {
    name: "knownAllegies",
    label: "Allegies",
   },
   {
    name: "action",
    label: " ",
    options:{
        filter: false,
        sort: false,
        print: false
    }
  },
 ];
 
 const options = {
      filter: false,
      responsive: 'responsive',
      viewColumns: false,
      elevation:0,
      selectableRows: 'none',
      fixedHeader:true,
      rowHover: true,
      sort: false,
 };

 const data = patients && patients.constructor === Array ? patients.map((row) => { 
  return{
       patRegNo: row.patRegNo,
       name: row.name,
       gender: row.gender,
       genotype: row.genotype,
       bloodGroup: row.bloodGroup,
       phone: row.phone,
       knownAllegies: row.knownAllegies,
       action: <Box style={{display: 'flex', flexDirection: 'row', }}>
                 <EditPatient 
                   patRegNo= {row.patRegNo}
                   name= {row.name}
                   gender= {row.gender}
                   genotype= {row.genotype}
                   bloodGroup= {row.bloodGroup}
                   phone= {row.phone}
                   address= {row.address}
                   knownAllegies= {row.knownAllegies} 
                 />
                 <DeletePatient 
                   patRegNo= {row.patRegNo}
                 />
               </Box>  
  }
}) : []
  return(
  <>
    <Helmet>
      <title>Patients</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={true} 
      >
        <Box sx={{ pt: 3 }}>
        <AddPatient/>
        <MuiThemeProvider theme={getMuiTheme()}>
        <Paper>
          <MUIDataTable
          title={"Patient List"}
          data={data}
          columns={columns}
          options={options}
          />
          </Paper>
          </MuiThemeProvider>
        </Box>
      </Container>
    </Box>
  </>
  )
};
export default PatientList;