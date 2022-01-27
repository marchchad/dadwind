import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from './img/logo.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://Dadwind.com/">
        Dadwind
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <a href="/" >
          
            <img src={Logo}  />
      
          </a>
          <Box 

          component="form" 
          onSubmit={handleSubmit} 
          noValidate sx={{
            width: '100%', // Fix IE 11 issue.
            marginTop: 10,
          
          }}>
            <TextField
              variant="outlined"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
            style={{
                backgroundColor: "#2ACAEA",
                color: "white",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                padding: "10px",
                cursor: "pointer"
                
            }}
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2, color: 'white', fontWeight: 'bold', fontSize: '1.5rem'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs >
                <Link href="#" variant="body2"
                sx={{
                  color: '#2ACAEA',
                  fontWeight: 'bold',
                  fontSize: '1rem'

                }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{
                  color: '#2ACAEA',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
          </Box>
        </Box>
        <Copyright sx={{
          mt: 3,

          color: '#2ACAEA',

          fontWeight: 'bold',
          fontSize: '1rem'

        }} />
      </Container>
    </ThemeProvider>
  );
}