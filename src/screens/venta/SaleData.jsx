import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const clientData = () => {
  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      spacing={1}
      sx={{ background: "#e7f3ff", height: "100vh" }}
    >
      <Grid container justifyContent="center" mt={3}>
        <Typography>Datos sobre la venta</Typography>
      </Grid>
      {/* <Grid item xs={5} md={4}> */}
      <Grid container item direction="column" mt={-9}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Tipo Documento"
            sx={{ width: "50%" }}
            name="tipoDocumento"
            type="string"
            id="tipoDocumento"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-11}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Numero De Documento"
            sx={{ width: "50%" }}
            name="numDocumento"
            type="string"
            id="numDocumento"
          />
        </Grid>
      </Grid>
      {/* </Grid> */}
      <Grid item md={3}>
        <Grid container item direction="column" mt={-13}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Nombre Del Cliente"
              sx={{ width: "100%" }}
              name="nombre"
              type="string"
              id="nombre"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={1}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Apellido Del Cliente"
              sx={{ width: "100%" }}
              name="apellido"
              type="string"
              id="apellido"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Grid container item direction="column" mt={-13}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Fecha De Nacimiento"
              sx={{ width: "100%" }}
              name="fecha"
              type="data"
              id="fecha"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={1}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Numero de Telefono"
              sx={{ width: "100%" }}
              name="numTelefonico"
              type="string"
              id="numTelefonico"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-10}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Valor De La Compra"
            sx={{ width: "50%" }}
            name="nombre"
            type="string"
            id="nombre"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-12}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Tipo De Inventario"
            sx={{ width: "50%" }}
            name="tipoInventario"
            type="string"
            id="tipoInventario"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-11}>
        <Grid item justifyContent="center" display="flex">
          <Button variant="contained" color="success" sx={{ width: "20%" }}>
          Registrar
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-15}>
        <Grid item justifyContent="center" display="flex">
          <Button variant="contained" color="error" sx={{ width: "20%" }}>
            Cancelar
          </Button>
        </Grid>
      </Grid>
      {/*
        <Grid container item direction="column" mt={-41}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Valor De La Compra"
              sx={{ width: "70%" }}
              name="nombre"
              type="string"
              id="nombre"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Inventario"
              sx={{ width: "70%" }}
              name="inventario"
              type="string"
              id="invetario"
            />
          </Grid>
        </Grid>*/}
    </Grid>
  );
};

const styles = {
  root: {
    height: "100vh",
  },
  formulario: {
    background: "#e7f3ff",
  },
};

export default clientData;
