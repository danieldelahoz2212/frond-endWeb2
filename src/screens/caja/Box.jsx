import { Grid } from "@mui/material";
import React, { useState } from "react";
import fondo from "../../assets/fondo.jpeg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Layout from "./../../components/Layout";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

const Box = ({ user, permission = [], token }) => {
  const [list, setList] = useState([
    {
      id: 1,
      transaccionId: "mariana",
      valor: 10000,
      fecha: "9/11/1999",
      usuario: "te la debo",
      almacen: "B23",
    },
  ]);

  const column = [
    {
      field: "Transaccion",
      headName: "transaccionId",
      width: 200,
      renderCell: ({ row }) => <div>{row.transaccionId}</div>,
    },
    {
      field: "Valor",
      headName: "valor",
      width: 200,
      renderCell: ({ row }) => <div>{row.valor}</div>,
    },
    {
      field: "Fecha",
      headName: "fecha",
      width: 200,
      renderCell: ({ row }) => <div>{row.fecha}</div>,
    },
    {
      field: "Usuario",
      headName: "usuario",
      width: 200,
      renderCell: ({ row }) => <div>{row.usuario}</div>,
    },
    {
      field: "Almacen",
      headName: "almacen",
      width: 300,
      renderCell: ({ row }) => <div>{row.almacen}</div>,
    },
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
      <Layout title="Caja" />
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

Box.prototype = {
  permission: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Box);
