import { Grid } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import { Layout } from "../../components";
import PropTypes from "prop-types";
import { DataGrid, esES, GridToolbar  } from "@mui/x-data-grid";
// import { Delete } from "@mui/icons-material";
// import axios from "./../../utils/api";

const Inventory = ({ user, permission = [], token }) => {
  const [list, setList] = useState([
    {
      id: 1,
      nombre: "prueba",
      descripcion: "daniel",
      idTipoObjeto: "asdnbflsakjhfdljkasdhflkjashdflkjashdf",
      fechaEntrada: "20/12/23",
      ubicacionId: "via 40",
      origenCompraId:"Malambo"
    },
  ]);

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
      width: 300,
      renderCell: ({ row }) => <div>{row.descripcion}</div>,
    },
    { 
      field: "idTipoObjeto", 
      headerName: "Tipo De Objeto", 
      width: 700 
    },
    { 
      field: "fechaEntrada", 
      headerName: "Fecha De Entrada", 
      width: 700 
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
    }

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
      sx={{ height: "100vh", background: "#e7f3ff" }}
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
        <Grid item xs={12} mt={2}>
          <DataGrid
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
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
