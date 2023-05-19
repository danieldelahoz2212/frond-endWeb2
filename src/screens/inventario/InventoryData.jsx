import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const inventoryData = () => {
  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      spacing={1}
      sx={{ background: "#e7f3ff", height: "100vh" }}
    >
      <Grid container justifyContent="center" mt={3}>
        <Typography>Objetos Del Inventario</Typography>
      </Grid>
      <Grid container item direction="column" mt={-9}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Tipo Objeto"
            sx={{ width: "50%" }}
            name="idTipoObjeto"
            type="string"
            id="idTipoObjeto"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-11}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Nombre Del Objeto"
            sx={{ width: "50%" }}
            name="numDocumento"
            type="string"
            id="numDocumento"
          />
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Grid container item direction="column" mt={-13}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Descripción Del Objeto"
              sx={{ width: "100%" }}
              name="descripcion"
              type="string"
              id="descripcion"
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
              label="Fecha De Entrada"
              sx={{ width: "100%" }}
              name="fecha"
              type="data"
              id="fecha"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-16}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Ubicación Del Objeto"
            sx={{ width: "50%" }}
            name="ubicacion"
            type="string"
            id="ubicacion"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-18}>
        <Grid item justifyContent="center" display="flex">
          <TextField
            color="primary"
            variant="outlined"
            label="Origen De Compra"
            sx={{ width: "50%" }}
            name="origenCompra"
            type="string"
            id="origenCompra"
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-20}>
        <Grid item justifyContent="center" display="flex">
          <Button variant="contained" color="success" sx={{ width: "20%" }}>
          Registrar
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="column" mt={-25}>
        <Grid item justifyContent="center" display="flex">
        <Button  component={Link} to="/inventory" variant="contained" color="error" sx={{ width: "20%" }}>
          Cancelar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default inventoryData;
