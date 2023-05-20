import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fondo from "../../assets/fondo.jpeg";
import { connect } from "react-redux";
import { DataGrid, esES, GridToolbar } from "@mui/x-data-grid";
import { Layout } from "../../components";
import { Link } from "react-router-dom";
const Sale = ({ user, permission = [], token }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [list, setList] = useState([
    // {
    //   id: 1,
    //   valor: "300000",
    //   inventarioId: "B11",
    //   clienteId: "Manolo",
    //   transaccionesId: "hola",
    // },
  ]);
useEffect(()=>{
  const fetchData = async () => {
    try {
      // Realiza la consulta a la base de datos y obtén los datos de la tabla
      const response = await fetch("/venta");
      const data = await response.json();

      // Actualiza el estado list con los datos obtenidos
      setList(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  fetchData();

}, []);


  const column = [
    {
      field: "valor",
      headerName: "Valor",
      width: 300,
      renderCell: ({ row }) => <div>{row.valor}</div>,
    },
    {
      field: "inventarioId",
      headerName: "Inventario",
      width: 300,
      renderCell: ({ row }) => <div>{row.inventarioId}</div>,
    },
    {
      field: "clienteId",
      headerName: "Cliente",
      width: 300,
      renderCell: ({ row }) => <div>{row.clienteId}</div>,
    },
    {
      field: "transaccionesId",
      headerName: "Transacciones",
      width: 300,
      renderCell: ({ row }) => <div>{row.transaccionesId}</div>,
    },
    // {
    //   field: "estado",
    //   headerName: "Estado",
    //   width: 100,
    //   renderCell: <></>,
    //   align: "center",
    // },
  ];

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundImage: `url(${fondo})`,
        display: "flex",
      }}
    >
      <Layout title="Venta" />
      <Grid
        item
        container
        xs={11}
        display="flex"
        justifyItems="initial"
        sx={{
          height: "80%",
        }}
      >
        <Grid
          item
          xs={12}
          mt={2}
          sx={{ background: "#e7f3ff", borderRadius: "7px" }}
        >
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={handleOpen}
              variant="contained"
              color="success"
              sx={{ width: "15%", marginLeft: "89%" }}
            >
              Registrar venta
            </Button>
            {/* <Button 
          variant="contained"
          color="warning"
          sx={styles.button}
          >
            Editar
          </Button>
          <Button 
          variant="contained"
          color="error"
          sx={styles.button}
          >
            Eliminar
          </Button> */}
            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: "100%",
                  height: "70%",
                },
              }}
            >
              <DialogTitle>Datos sobre la venta</DialogTitle>
              <DialogContent
                justifyContent="center"
                spacing={1}
                sx={{ background: "#e7f3ff", height: "100vh" }}
              >
                <Grid container item direction="column" mt={1}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Tipo Documento"
                      sx={{ width: "100%" }}
                      name="tipoDocumento"
                      type="string"
                      id="tipoDocumento"
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Numero De Documento"
                      sx={{ width: "100%" }}
                      name="numDocumento"
                      type="string"
                      id="numDocumento"
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="row" spacing={1} mt={1}>
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
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
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Valor De La Compra"
                      sx={{ width: "100%" }}
                      name="valor"
                      type="string"
                      id="valor"
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Tipo De Inventario"
                      sx={{ width: "100%" }}
                      name="tipoInventario"
                      type="string"
                      id="tipoInventario"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button>Agregar</Button>
                <Button onClick={handleClose}>Cerrar</Button>
              </DialogActions>
            </Dialog>
          </div>

          <DataGrid
            rows={list}
            columns={column}
            disableSelectionOnClick
            pageSize={5}
            autoHeight
            rowPerPageOptions={[5]}
            slots={{ toolbar: GridToolbar }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  button: {
    width: "15%",
    marginLeft: "89%",
  },
  image: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const mapStateToProps = (state) => ({
  permission:
    state.permission
      ?.filter((item) => item.modulosAcciones.id_modulos === 3)
      .map((item) => item.modulosAcciones.acciones.id) || [],
  token: state.token,
  user: state.user,
});

Sale.prototype = {
  permission: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Sale);
