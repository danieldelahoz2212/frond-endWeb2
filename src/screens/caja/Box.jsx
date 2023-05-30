import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import fondo from "../../assets/fondo.jpeg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Layout from "./../../components/Layout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { backRequiest } from "../../api/back";

const Box = ({ user, permission = [], token }) => {
  const [list, setList] = useState([]);

  const getCaja = async () => {
    try {
      const typeCaja = await backRequiest.get("transaccion/caja").then(({ data }) => data) || [];
      const list = typeCaja.map((item) => ({
        ...item,
        transaccion:  `${item.transaccion.idTipoTransaccion}`,
        almacen: `${item.almacen.nombre} - ${item.almacen.direccion}`,
        usuario: `${item.usuario.nombre} ${item.usuario.apellido}`

      })) || [];
      console.log(typeCaja)
      setList(list);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getCaja();
  }, []);

  const column = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      renderCell: ({ row }) => <div>{row.id}</div>,
    },
    {
      field: "transaccion",
      headerName: "Transaccion",
      width: 100,
      renderCell: ({ row }) => <div>{row.transaccion}</div>,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 150,
      renderCell: ({ row }) => <div>{row.valor}</div>,
    },
    {
      field: "fecha",
      headerName: "Fecha",
      width: 150,
      renderCell: ({ row }) => <div>{row.fecha}</div>,
    },
    {
      field: "usuario",
      headerName: "Usuario",
      width: 200,
      renderCell: ({ row }) => <div>{row.usuario}</div>,
    },
    {
      field: "almacen",
      headerName: "Almacen",
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
            rows={list}
            columns={column}
            disableSelectionOnClick
            pageSize={5}
            autoHeight
            rowPerPageOptions={[5]}
            components={{
              Toolbar: GridToolbar,
            }}
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
