import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import fondo from "../../assets/fondo.jpeg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Layout from "./../../components/Layout";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { backRequiest } from "../../api/back";

const Box = ({ user, permission = [], token }) => {
  
  const [list, setList] = useState([]);

  const getCaja = async () => {
    try {
      const caja = await backRequiest
        .get("transaccion/caja")
        .then(({ data }) => data);
      const list =
        caja.map((item) => ({
          ...item,
          caja: `${item.caja.transaccionId} ${item.caja.valor} ${item.caja.fecha} ${item.cliente.usuarioId} ${item.caja.almacenId}`,
        })) || [];

      setList(list);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const [form, setFrom] = useState({
    caja: {
      valor: "",
      fecha: "",
      usuarioId: 0,
      almacenId: 0,
      transaccionId: 0,
    },
  });

  useEffect(() => {
    getCaja();
  }, []);

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
      headName: "usuarioId",
      width: 200,
      renderCell: ({ row }) => <div>{row.usuarioId}</div>,
    },
    {
      field: "Almacen",
      headName: "almacenId",
      width: 300,
      renderCell: ({ row }) => <div>{row.almacenId}</div>,
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
