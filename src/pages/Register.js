import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Register | Drug Dispenser</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm" style={{boxShadow: '1px 1px 1px 1px grey', padding: 40, width: 375 }}>
          <Formik
            initialValues={{
              regNo: '',
              phone: '',
              password: ''
            }}
            validationSchema={
              Yup.object().shape({
                // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                regNo: Yup.string().max(10).required('Reg. Number is required'),
                phone: Yup.string().max(15).required('Phone name is required'),
                password: Yup.string().max(255).required('password is required')
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new user
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.regNo && errors.regNo)}
                  fullWidth
                  helperText={touched.regNo && errors.regNo}
                  label="Reg Number"
                  margin="dense"
                  name="regNo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.regNo}
                  variant="outlined"
                  size="small"
                  focused={true}
                />
                <TextField
                  error={Boolean(touched.phone && errors.phone)}
                  fullWidth
                  helperText={touched.phone && errors.phone}
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  size="small"
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="dense"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  size="small"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Add new user
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
