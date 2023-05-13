import { Grid } from "@mui/material";
import React, { useState } from "react";
import fondo from "../../assets/fondo.jpeg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Layout from "./../../components/Layout";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

const Transfer = ({ user, permission = [], token }) => {
  const [list, setList] = useState([
    {
      id: 1,
      fecha: "12/2/2023",
      almacenDestinoId: "malambo",
      almacenOrigenId: "barranquilla",
      inventarioId: "b11",
      transacionId: "marcelo",
    },
  ]);

  const column = [
    {
      field: "Fecha",
      headName: "fecha",
      width: 200,
      renderCell: ({ row }) => <div>{row.fecha}</div>,
    },
    {
      field: "Almacen Destino",
      headName: "almacenDestinoId",
      width: 300,
      renderCell: ({ row }) => <div>{row.almacenDestinoId}</div>,
    },
    {
      field: "Almacen Origen",
      headName: "almacenOrigenId",
      width: 300,
      renderCell: ({ row }) => <div>{row.almacenOrigenId}</div>,
    },
    {
      field: "Inventario",
      headName: "inventarioId",
      width: 300,
      renderCell: ({ row }) => <div>{row.inventarioId}</div>,
    },
    {
      field: "Transacion",
      headName: "transacionId",
      width: 300,
      renderCell: ({ row }) => <div>{row.transacionId}</div>,
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
        background: "#e7f3ff",
        backgroundImage: `url(${fondo})`,
      }}
    >
      <Layout title="Traslado" />
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
          <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={list}
          columns={column}
          disableSelectionOnClick
          pageSize={5}
          autoHeight
          rowPerPageOptions={[5]}
          slots={{toolbar: GridToolbar}}
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

Transfer.prototype = {
  permission: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Transfer);
