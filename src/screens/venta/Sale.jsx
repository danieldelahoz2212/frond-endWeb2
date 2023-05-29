import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fondo from "../../assets/fondo.jpeg";
import { connect } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Layout } from "../../components";
import { backRequiest } from "../../api/back";
import SearchIcon from "@mui/icons-material/Search";
const Sale = ({ user, permission = [], token }) => {
  const [open, setOpen] = useState(false);
  const [clientExist, setClientExist] = useState(true);
  const [typesDocuments, setTypesDocument] = useState([]);
  const [typesInventario, setTypesInventario] = useState(0);
  const [typesInventarios, setTypesInventarios] = useState([]);
  const [inventarios, setInventarios] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [list, setList] = useState([]);

  const sendData = async () => {
    try {
      // console.log("Datos enviados correctamente:");
      // console.log("Transacción:", transaccionResponse.data);
      // console.log("Cliente creado:", ClienteResponse.data);
      const body = {
        createTransaccionDto: {
          idTipoTransaccion: 5,
          fecha: new Date().toString(),
          estado: 1,
        },
        createCaja: {
          valor: form.venta.valor,
          fecha: new Date(),
          usuario: user.id,
          almacen: 1,
          estado: 1,
        },
        createTransaccion : {
          ...form.venta,
          cliente: form.cliente.id ? +form.cliente.id : form.cliente,
        },
      };
      console.log(body);
      const transaccionResponse = await backRequiest.post("/transaccion/",body).then(({data})=>data);
      // handleClose();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const getVenta = async () => {
    try {
      const sales = await backRequiest
        .get("transaccion/venta")
        .then(({ data }) => data);
      const list =
        sales.map((item) => ({
          ...item,
          cliente: `${item.cliente.nombre} ${item.cliente.apellido}`,
        })) || [];

      setList(list);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const getTypeInventario = async () => {
    const typesInv =
      (await backRequiest
        .get("/parametro/3")
        .then(({ data }) => data.valores)) || [];
    const list =
      typesInv.map((item) => ({
        label: item.valor_parametro,
        id: +item.id,
      })) || [];

    list.push({
      label: "",
      id: 0,
    });
    setTypesInventarios(list);
  };


  const getTypeDocument = async () => {
    const typesDocuets =
      (await backRequiest
        .get("/parametro/1")
        .then(({ data }) => data.valores)) || [];
    const list =
      typesDocuets.map((item) => ({
        label: item.valor_parametro,
        id: +item.id,
      })) || [];

    list.push({
      label: "",
      id: 0,
    });
    setTypesDocument(list);
  };

  const getInvetario = async ()=>{
    const typesInv =
      (await backRequiest
        .get("transaccion/inventario/")
        .then(({ data }) => data)) || [];
    const list =
      typesInv.map((item) => ({
        label: `${item.nombre} ${item.descripcion}`,
        id: +item.id,
      })) || [];

    list.push({
      label: "",
      id: 0,
    });
    console.log(list);
    setInventarios(list);
  }

  useEffect(() => {
    getTypeDocument();
    getTypeInventario();
    getVenta();
    getInvetario();
  }, []);

  const [form, setForm] = useState({
    cliente: {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      idTipoDocumento: 0,
      numDocumento: "",
      direccion: "",
      numTelefono: "",
    },
    venta: {
      valor: "",
      inventario: 0,
      estado: 1,
    },
  });

  const handleInput = (event, tipo) => {
    if (tipo === "cliente") {
      setForm({
        ...form,
        cliente: {
          ...form.cliente,
          [event.target.name]: event.target.value,
        },
      });
    } else if (tipo === "venta"){
      setForm({
        ...form,
        venta: {
          ...form.venta,
          [event.target.name]: event.target.value,
        },
      });
    }
     else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
  };

  const column = [
    {
      field: "id",
      headerName: "ID",
      width: 300,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 300,
      renderCell: ({ row }) => <div>{row.valor}</div>,
    },
    {
      field: "inventario",
      headerName: "Inventario",
      width: 300,
      renderCell: ({ row }) => (
        <div>{`${row.inventario.nombre} - ${row.inventario.descripcion}`}</div>
      ),
    },
    {
      field: "clienteId",
      headerName: "Cliente",
      width: 300,
      renderCell: ({ row }) => <div>{row.cliente}</div>,
    },
    // {
    //   field: "estado",
    //   headerName: "Estado",
    //   width: 100,
    //   renderCell: <></>,
    //   align: "center",
    // },
  ];

  const getClientExist = async () => {
    try {
      const { data } = await backRequiest.get(
        `/transaccion/cliente/${form.cliente.idTipoDocumento}/${form.cliente.numDocumento}`
      );
      if (data) {
        console.log(data);
        setForm({ ...form, cliente: data });
        setClientExist(false);
      }
    } catch (error) {
      setClientExist(false);
    }
  };

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

            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: "100%",
                  height: "70%",
                  backgroundColor: "#e7f3ff",
                },
              }}
            >
              <DialogTitle>Datos sobre la venta</DialogTitle>
              <DialogContent justifyContent="center" spacing={1}>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <Autocomplete
                      value={typesDocuments.find((item) => {
                        return item.id === form.cliente.idTipoDocumento;
                      })}
                      sx={{ width: "100%" }}
                      name="idTipoDocumento"
                      id="idTipoDocumento"
                      getOptionLabel={(Option) => Option.label}
                      options={typesDocuments}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Tipo Documento"
                        />
                      )}
                      onChange={(e, value) => {
                        handleInput({
                          target: {
                            name: "cliente",
                            value: {
                              ...form.cliente,
                              idTipoDocumento: value ? value.id : 0,
                            },
                          },
                        });
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="row" mt={2} xs={12}>
                  <Grid item xs={10}>
                    <Grid item justifyContent="center" display="flex">
                      <TextField
                        color="primary"
                        variant="outlined"
                        label="Numero De Documento"
                        sx={{ width: "100%" }}
                        value={form.cliente.numDocumento}
                        onChange={(e) => handleInput(e, "cliente")}
                        name="numDocumento"
                        type="string"
                        id="numDocumento"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid item justifyContent="center" display="flex">
                      <IconButton
                        onClick={() => {
                          getClientExist();
                        }}
                        children={<SearchIcon sx={{ color: "#1976d2" }} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item direction="row" spacing={1} mt={1}>
                  <Grid item xs={6}>
                    <Grid item justifyContent="center" display="flex">
                      <TextField
                        disabled={clientExist}
                        color="primary"
                        variant="outlined"
                        label="Nombre Del Cliente"
                        sx={{ width: "100%" }}
                        value={form.cliente.nombre}
                        onChange={handleInput}
                        name="nombre"
                        type="string"
                        id="nombre"
                      />
                    </Grid>
                    <Grid container item direction="column" mt={2}>
                      <Grid item justifyContent="center" display="flex">
                        <TextField
                          disabled={clientExist}
                          color="primary"
                          variant="outlined"
                          label="Fecha De Nacimiento"
                          sx={{ width: "100%" }}
                          value={form.cliente.fechaNacimiento}
                          onChange={handleInput}
                          name="fechaNacimiento"
                          type="date"
                          id="fechaNacimiento"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid item justifyContent="center" display="flex">
                      <TextField
                        disabled={clientExist}
                        color="primary"
                        variant="outlined"
                        label="Apellido Del Cliente"
                        sx={{ width: "100%" }}
                        value={form.cliente.apellido}
                        onChange={handleInput}
                        name="apellido"
                        type="string"
                        id="apellido"
                      />
                    </Grid>
                    <Grid container item direction="column" mt={2}>
                      <Grid item justifyContent="center" display="flex">
                        <TextField
                          disabled={clientExist}
                          color="primary"
                          variant="outlined"
                          label="Numero de Telefono"
                          sx={{ width: "100%" }}
                          value={form.cliente.numTelefono}
                          onChange={handleInput}
                          name="numTelefonico"
                          type="string"
                          id="numTelefonico"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item direction="column" mt={1}>
                    <Grid item justifyContent="center" display="flex">
                      <TextField
                        disabled={clientExist}
                        color="primary"
                        variant="outlined"
                        label="Dirección"
                        sx={{ width: "100%" }}
                        value={form.cliente.direccion}
                        onChange={handleInput}
                        name="direccion"
                        type="string"
                        id="direccion"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item direction="row" spacing={1} mt={1}>
                  <Grid item xs={6}>
                    <Grid container item direction="column">
                      <Grid item justifyContent="center" display="flex">
                        <Autocomplete
                          disabled={clientExist}
                          value={typesInventarios.find((item) => {
                            return item.id === typesInventario;
                          })}
                          sx={{ width: "100%" }}
                          name="idtipoInventario"
                          id="idtipoInventario"
                          getOptionLabel={(Option) => Option.label}
                          options={typesInventarios}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Tipo De Inventario"
                            />
                          )}
                          onChange={(e, value) => {
                            setTypesInventario(value ? value.id : 0)
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container item direction="column">
                      <Grid item justifyContent="center" display="flex">
                        <Autocomplete
                          disabled={clientExist}
                          value={inventarios.find((item) => {
                            return item.id === form.venta.inventario;
                          })}
                          sx={{ width: "100%" }}
                          name="inventario"
                          id="inventario"
                          getOptionLabel={(Option) => Option.label}
                          options={inventarios}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Inventario"
                            />
                          )}
                          onChange={(e, value) => {
                            handleInput({
                              target: {
                                name: "venta",
                                value: {
                                  ...form.venta,
                                  inventario: value ? value.id : 0,
                                },
                              },
                            });
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item direction="column" mt={2}>
                  <Grid item justifyContent="center" display="flex">
                    <TextField
                      disabled={clientExist}
                      color="primary"
                      variant="outlined"
                      label="Valor De La Venta"
                      sx={{ width: "100%" }}
                      value={form.venta.valor}
                      onChange={(e)=>handleInput(e,'venta')}
                      name="valor"
                      id="valor"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={sendData}>Agregar</Button>
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
