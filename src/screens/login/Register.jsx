import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import Wallpapper_register from "../../assets/online-shop-6401739_640.png";
import { Link } from "react-router-dom";
import { Loading } from "../../components";
import { backRequiest } from "../../api/back";
const Register = (props) => {
  const [loading] = useState(false);
  const [typesDocuments, setTypesDocument] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    idTipoDocunento: 0,
    nombre: "",
    apellido: "",
    numTelefono: "",
    document: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const getTypeDocument = async () => {
    const typesDocuets =
      (await backRequiest
        .get("/parametro/3")
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

  useEffect(() => {
    getTypeDocument();
  }, []);
  return (
    <Grid container component="main" sx={styles.root} direction="row" md={12}>
      <Grid item xs={false} md={7} sx={styles.image} />
      <Grid container item direction="column" md={5} mt={2}>
        <Grid item mt={2} ml={5}>
          <Typography sx={styles.title}>Registrar</Typography>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Nombre De Usuario"
              sx={{ width: "90%" }}
              value={form.nombre}
              onChange={handleInput}
              name="nombre"
              type="string"
              id="nombre"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Apellido De Usuario"
              sx={{ width: "90%" }}
              value={form.apellido}
              onChange={handleInput}
              name="apellido"
              type="string"
              id="apellido"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Numero De Telefono"
              sx={{ width: "90%" }}
              value={form.numTelefono}
              onChange={handleInput}
              name="numTelefono"
              type="string"
              id="numTelefono"
            />
          </Grid>
        </Grid>
        <Grid item justifyContent="center" display="flex" mt={2}>
          <Autocomplete
            value={typesDocuments.find((item) => {
              return item.id === form.idTipoDocunento;
            })}
            name="idTipoDocunento"
            id="idTipoDocunento"
            sx={{
              width: "90%",
            }}
            getOptionLabel={(option) => option.label}
            options={typesDocuments}
            renderInput={(params) => (
              <TextField {...params} color="primary" label="Tipo Documento" />
            )}
            onChange={(e, value) => {
              console.log(value);
              handleInput({
                target: {
                  name: "idTipoDocunento",
                  value: value ? value.id : 0,
                },
              });
            }}
          />
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Numero De Documento"
              sx={{ width: "90%" }}
              value={form.document}
              onChange={handleInput}
              name="document"
              type="string"
              id="document"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Correo Electronico"
              sx={{ width: "90%" }}
              value={form.email}
              onChange={handleInput}
              name="email"
              type="email"
              id="email"
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Contraseña"
              sx={{ width: "90%" }}
              value={form.password}
              onChange={handleInput}
              name="password"
              type="password"
              id="password"
            />
          </Grid>
        </Grid>
        <Grid item mt={3} display="flex" justifyContent="center">
          <Loading loading={loading} />
        </Grid>
        <Grid item mt={3} display="flex" justifyContent="center">
          <Button variant="contained" sx={styles.button}>
            Registrar
          </Button>
        </Grid>
        <Grid item mt={1} display="flex" justifyContent="center" mr={3}>
          <Link to="/" style={{ color: "#000" }}>
            <Typography>¿ya tienes usuario?</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Wallpapper_register})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "250%",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  button: {
    backgroundColor: "#348feb",
    width: "50%",
    height: "50px",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#296aba",
    },
  },
};

export default Register;
