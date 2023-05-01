import React from "react";
import { 
  Grid, 
  Typography, 
  Button, 
  TextField 
} from "@mui/material";


const Inventory = () => {
  return (
    <Grid
      container
      component="main"
      sx={styles.root}
      direction="row"
      justifyContent="center"
    >
      <Grid container item justifyContent="center" sx={styles.inventario}>
        <Grid item justifyContent="center" display="flex">
          <Typography sx={styles.title} mt={5}>Inventaro</Typography>
        </Grid>
        <Grid item mt={5} display="flex" direction="column">
          <TextField color="primary" label="Opciones" sx={styles.combobox} />
        </Grid>
        <Grid item mt={5} display="flex" direction="column">
          <TextField color="primary" label="Opciones" sx={styles.combobox} />
        </Grid>
        <Grid item md={2} mt={5} display="flex" direction="column">
          <Button variant="contained" sx={styles.button}>
            filtro
          </Button>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          display="flex"
          sx={styles.contenedor}
        >
          <Grid></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  root: {
    height: "100vh",
  },
  title: {
    fontSize: "250%",
    fontWeight: "bold",
    fontFamily: "Poppins",
    marginLeft: "-200%",
  },
  contenedor: {
    backgroundColor: "#7abeff",
    width: "95%",
    height: "90%",
    borderRadius: "10px",
    boxShadow: "7px 13px 37px #000",
  },
  inventario: {
    background: "#e7f3ff",
    width: "95%",
    borderRadius: "10px",
    height: "150%",
  },
  button: {
    backgroundColor: "#348feb",
    width: "30%",
    height: "80%",
    borderRadius: "5px",
    marginLeft: "167%",
  },
  combobox: {
    width: "200px",
    marginLeft: "200%",
  },
};

export default Inventory;
