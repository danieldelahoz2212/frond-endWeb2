import { Button, Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import fondo from "../../assets/fondo.jpeg";
import { connect } from "react-redux";
import { DataGrid, esES, GridToolbar } from "@mui/x-data-grid";
import { Layout } from "../../components";
import { Link } from "react-router-dom";
const Sale = ({ user, permission = [], token }) => {

  const [list, setList] = useState([
    {
      id: 1,
      valor: "300000",
      inventarioId: "B11",
      clienteId: "Manolo",
      transaccionesId: "hola",
    },
  ]);

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
      <Layout title="Venta"/>
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
        sx={{background: "#e7f3ff", borderRadius:"7px"}}>
          <div className="container" style={{ display: "flex", justifyContent: "center"}}>
          <Button
          component={Link}
          to="/saledata"
          variant="contained"
          color="success"
          sx={styles.button}
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
          </div>
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

const styles ={
  button:{
    width:"15%",
    marginLeft:"89%"
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
}

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
