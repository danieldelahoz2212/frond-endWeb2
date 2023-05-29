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
import { connect } from "react-redux";
import fondo from "../../assets/fondo.jpeg";
import { Layout } from "../../components";
import PropTypes from "prop-types";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// import { Delete } from "@mui/icons-material";
// import axios from "./../../utils/api";

const Inventory = ({ user, permission = [], token }) => {
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
    //   nombre: "ps4",
    //   descripcion: "consola de videojuego de 2 generacion",
    //   idTipoObjeto: "electrodomestico",
    //   fechaEntrada: "20/12/23",
    //   ubicacionId: "via 40",
    //   origenCompraId: "Malambo",
    // },
  ]);

  // const handleSubmit = async () => {
  //   try {
  //     const reponse = await axios.post("/createInventario", {
  //       nombre: "nombre",
  //       descripcion: "descripcion",
  //       idTipoObjeto: "idTipoObjeto",
  //       fechaEntrada: "fechaEntrada",
  //       ubicacionId: "ubicacionId",
  //       origenCompraId: "origenCompraId",
  //     });
  //     console.log(reponse.data);
  //   } catch (error) {
  //     console.log("Error al registrar los datos:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/inventario");
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const Column = [
    {
      field: "nombre",
      headerName: "Nombre",
      width: 300,
      renderCell: ({ row }) => <div>{row.nombre}</div>,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 700,
      renderCell: ({ row }) => <div>{row.descripcion}</div>,
    },
    {
      field: "idTipoObjeto",
      headerName: "Tipo De Objeto",
      width: 300,
      renderCell: ({ row }) => <div>{row.idTipoObjeto}</div>,
    },
    {
      field: "fechaEntrada",
      headerName: "Fecha De Entrada",
      width: 300,
    },
    {
      field: "ubicacionId",
      headerName: "Ubicación",
      width: 300,
      renderCell: ({ row }) => <div>{row.ubicacionId}</div>,
    },
    {
      field: "origenCompraId",
      headerName: "Origen De Compra",
      width: 300,
      renderCell: ({ row }) => <div>{row.origenCompraId}</div>,
    },

    // {
    //   field: "estado",
    //   headerName: "Estado",
    //   width: 100,
    //   renderCell: <></>,
    //   align: "center",
    // },
    // permission.includes(4) && {
    //   headerName: "",
    //   width: 150,
    //   renderCell: <></>,
    //   align: "center",
    // },
  ];

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      sx={{ height: "100vh", backgroundImage: `url(${fondo})` }}
    >
      <Layout title="Inventario" />
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
              Registrar Objeto
            </Button>

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
              <DialogTitle>Objetos Del Inventario</DialogTitle>
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
                      label="Tipo Objeto"
                      sx={{ width: "100%" }}
                      name="idTipoObjeto"
                      type="string"
                      id="idTipoObjeto"
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Nombre Del Objeto"
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
                        label="Descripción Del Objeto"
                        sx={{ width: "100%" }}
                        name="descripcion"
                        type="string"
                        id="descripcion"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
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
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Ubicación Del Objeto"
                      sx={{ width: "100%" }}
                      name="ubicacion"
                      type="string"
                      id="ubicacion"
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      color="primary"
                      variant="outlined"
                      label="Origen De Compra"
                      sx={{ width: "100%" }}
                      name="origenCompra"
                      type="string"
                      id="origenCompra"
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
            columns={Column}
            disableSelectionOnClick
            pageSize={5}
            autoHeight
            rowsPerPageOptions={[5]}
            slots={{ toolbar: GridToolbar }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  permission:
    state.permission
      ?.filter((item) => item.modulosAcciones.id_modulos === 3)
      .map((item) => item.modulosAcciones.acciones.id) || [],
  token: state.token,
  user: state.user,
});

Inventory.prototype = {
  permission: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Inventory);
