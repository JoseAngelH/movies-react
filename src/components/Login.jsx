import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Breadcrums from './Breadcrums'
import styles from './Login.module.css'
import MoviesGrid from './MoviesGrid';

const theme = createTheme();

function Login() {
    const [leyendaUsuario, setLeyendaUsuario] = React.useState("");
    const [errorUsuario, setErrorUsuario] = React.useState(true);
    const [leyendaPassword, setLeyendaPassword] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState(true);

    function iniciarSesion(e){
      e.preventDefault();
      var txtusu = document.getElementById("txtusu").value;
      var txtpas = document.getElementById("txtpas").value;
      if(true){
          if(txtusu.length===0 || /^\s+$/.test(txtusu)){
              setErrorUsuario(true);
              setLeyendaUsuario("Campo obligatorio");
          }
          else if (txtusu==="angel123"){
            setErrorUsuario(false);
            setLeyendaUsuario("Dato Correcto");
          }else{
            setErrorUsuario(true);
            setLeyendaUsuario("Dato Incorrecto");
          }
      }
      if(true){
          if(txtpas.length===0 || /^\s+$/.test(txtpas)){
              setErrorPassword(true);
              setLeyendaPassword("Campo obligatorio");
          }
          else if (txtpas==="root"){
            setErrorPassword(false);
            setLeyendaPassword("Dato Correcto");
          }
          else{
              setErrorPassword(true);
              setLeyendaPassword("Dato Incorrecto");
          }
  
      }
      if(errorUsuario && !errorPassword){
        document.getElementById("txtusu").value = "";
        document.getElementById("txtusu").focus(); 
      }
      else if(!errorUsuario && errorPassword){
        document.getElementById("txtpas").value = "";
        document.getElementById("txtpas").focus(); 
      }
      else{
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus(); 
        }
  }
  if(!errorUsuario && !errorPassword){
    return <MoviesGrid/>
  }

  return (
    <div className={styles.divForm}>
        <ThemeProvider theme={theme}>
        <Breadcrums site={3}/>
          <Container className={styles.divForm} component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 1,
                borderColor: 'black',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <Typography component="h1" variant="h5">
                Inicio de Sesion
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <label>Usuario: </label>
                    <TextField
                      required
                      fullWidth
                      id="txtusu"
                      label="Usuario"
                      name="user"
                      autoComplete="user"
                      sx={{
                        border: 1,
                        borderRadius: '8px'
                      }}
                      error={errorUsuario}
                      helperText={leyendaUsuario} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <label>Contraseña: </label>
                    <TextField
                      sx={{
                        border: 1,
                        borderRadius: '8px',
                      }}
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="txtpas"
                      autoComplete="current-password"
                      error={errorPassword}
                      helperText={leyendaPassword}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  component={Link}
                  to='/'
                  value="Login" 
                  onClick={ iniciarSesion }
                >
                  Ingresar
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    </div>
  )
}

export default Login