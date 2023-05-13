import { Grid } from "@mui/material";
import React, { useState } from "react";
import fondo from "../../assets/fondo.jpeg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Layout from "./../../components/Layout";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

const Buy = (user, permission = [], token) => {
  const [list, setList] = useState([
    {
     id:1,
     transaccionId:"malambo",
     valorCompra:100000,
     valorPagado: 20000,
     cuota:5,
     cuotaPagadas:3,
     fecha: "12/3/1999",
     cliente:"Marcelo"
  }
]);

const column = [
    {
        field: "Transacción",
        headName: "transaccionId",
        width: 300,
        renderCell: ({ row }) => <div>{row.transaccionId}</div>,
    },
    {
        field: "Valor De Compra",
        headName: "valorCompra",
        width: 300,
        renderCell: ({ row }) => <div>{row.valorCompra}</div>,
    },
    {
        field: "Valor Pagado",
        headName: "valorPagado",
        width: 300,
        renderCell: ({ row }) => <div>{row.valorPagado}</div>,
    },
    {
        field: "Cuota",
        headName: "cuota",
        width: 300,
        renderCell: ({ row }) => <div>{row.cuota}</div>,
    },
    {
        field: "Cuota Pagadas",
        headName: "cuotaPagadas",
        width: 300,
        renderCell: ({ row }) => <div>{row.cuotaPagadas}</div>,
    },
    {
        field: "Fecha",
        headName: "Fecha",
        width: 300,
        renderCell: ({ row }) => <div>{row.fecha}</div>,
    },
    {
        field: "Cliente",
        headName: "cliente",
        width: 300,
        renderCell: ({ row }) => <div>{row.cliente}</div>,
    }
]
  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      sx={{ height: "100vh", backgroundImage: `url(${fondo})` }}
    >
      <Layout title="Compras" />
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

  Buy.prototype = {
    permission: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps, null)(Buy);
