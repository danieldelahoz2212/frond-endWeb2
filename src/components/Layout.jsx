import { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Menu, Close, Logout } from "@mui/icons-material";

const Layout = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "#0a0a0a",
  }));
  return (
    <Grid item container md={12} height={77}>
      <Grid item xs={12}>
        <AppBar position="fixed" open={open} sx={Styles.appBar}>
          <Toolbar>
            <Grid container display="flex" justifyContent="space-between">
              <Grid
                container
                item
                direction="row"
                display="flex"
                justifySelf="center"
                justifyContent="center"
                justifyItems="center"
                sm={2}
              >
                <Grid item sm={2}>
                  <IconButton
                    onClick={() => setOpen(!open)}
                    edge="start"
                    sx={{
                      ...Styles.menuButton,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <Menu />
                  </IconButton>
                </Grid>
                <Grid item display="flex" justifySelf="center" sm={10}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    display="flex"
                    justifySelf="center"
                    fontWeight={700}
                    alignSelf="center"
                  >
                    {title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item display="flex">
                <IconButton
                  // onClick={handelLogout}
                  edge="end"
                  sx={Styles.logout}
                >
                  <Logout />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Drawer sx={Styles.drawer} anchor="left" open={open}>
        <DrawerHeader>
          <Grid container direction="column" mb={2}>
            <Grid item justifyContent="flex-end" display="flex">
              <IconButton onClick={() => setOpen(false)}>
                <Close sx={{ color: "#FFF" }} />
              </IconButton>
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider sx={{ borderColor: "rgb(255 255 255 / 12%)" }} />
        <List sx={{ backgroundColor: "#0a0a0a" }}>
          {
            // modules.length > 0 && (modules.map(item => (
            //     <ListItem key={item.id} >
            //         <ListItemButton sx={{
            //             backgroundColor: location.pathname === `/dashboard/${item.url}` && '#F27D02',
            //             ...Styles.option
            //         }} onClick={location.pathname !== `/dashboard/${item.url}` && (() => history(`/dashboard/${item.url}`))}>
            //             <ListItemIcon>
            //                 {
            //                     item.icon
            //                 }
            //             </ListItemIcon>
            //             <Typography sx={{
            //                 fontWeight: '700',
            //                 color: '#fff',
            //             }}  >{item.nombre}</Typography>
            //         </ListItemButton>
            //     </ListItem>
            // )))
          }
        </List>
      </Drawer>
    </Grid>
  );
};

const Styles = {
  appBar: {
    backgroundColor: "#1976d2",
    position: "initial",
    width: "100%",
  },
  menuButton: {
    mr: 2,
    color: "#FFFF",
  },
  logout: {
    color: "#FFFF",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    backgroundColor: "#0a0a0a",
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      backgroundColor: "#0a0a0a",
    },
  },
  option: {
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#7a4813",
      color: "#000",
    },
  },
};

export default Layout;
