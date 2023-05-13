import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Wallpapper_login from "../../assets/Wallpapper_login.png";
import { connect } from "react-redux";
import { loginRequest, setPermissions, setToken } from "../../actions";
import { useSingIn } from "../../hooks/";
import { Loading } from "../../components";

const SignIn = (props) => {
  const { form, handleInput, loading } = useSingIn(props);

  return (
    <Grid container component="main" sx={styles.root} direction="row" md={12}>
      <Grid item xs={false} md={7} sx={styles.image} />
      <Grid container item direction="column" md={5} mt={2}>
        <Grid item mt={2} ml={5}>
          <Typography sx={styles.title}>Acceder</Typography>
        </Grid>
        <Grid container item direction="column" mt={2}>
          <Grid item justifyContent="center" display="flex">
            <TextField
              color="primary"
              variant="outlined"
              label="Correo Electronico*"
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
              label="Contraseña*"
              sx={{ width: "90%" }}
              value={form.password}
              onChange={handleInput}
              name="password"
              type="password"
              id="password"
              // onKeyPress={(e) => {
              //   e.key === "Enter" ? handleSignin() : <></>;
              // }}
            />
          </Grid>
        </Grid>
        <Grid item mt={1} display="flex" justifyContent="end" mr={3}>
          <Link to="/recover-password" style={{ color: "#000" }}>
            <Typography>¿Has olvidaste tu contraseña?</Typography>
          </Link>
        </Grid>
        <Grid item mt={3} display="flex" justifyContent="center">
          <Loading loading={loading} />
        </Grid>
        <Grid item mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={styles.button} //onClick={handleSignin}
          >
            Iniciar sesión
          </Button>
        </Grid>
        <Grid
          item
          mt={1}
          display="flex"
          justifyContent="center"
          mr={3}
          direction="row"
        >
          <Typography> ¿Aún no tienes cuenta? </Typography>{" "}
          <Link to="/register" style={{ color: "#000" }}>
            <Typography>Registrarte</Typography>
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
    backgroundImage: `url(${Wallpapper_login})`,
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

const mapStateToProps = (state) => ({
  user: state.user,
  token: state.token,
});

const mapDispatchToprops = {
  loginRequest,
  setPermissions,
  setToken,
};

export default connect(mapStateToProps, mapDispatchToprops)(SignIn);
