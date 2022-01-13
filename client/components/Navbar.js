import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { AccountCircle, LockRounded } from "@mui/icons-material";
// import MenuIcon from "@mui/icons-material/Menu";

// import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles"; //use this library
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu"; //use this library
import { InputAdornment } from "@mui/material";
// // import ModalDialog from "./ModalDialog";

const useStyles = makeStyles((theme) => ({
  appBarProps: {
    minHeight: 80,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" className={classes.appBarProps}>
      <Toolbar>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" className={classes.title} sx={{ pt: 1 }}>
              Pokémart
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.title}>
              Play ball.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          flexWrap="nowrap"
        >
          <Grid item>
            <Button color="inherit" onClick={handleOpen}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={handleOpen}>
              Cart
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="inherit"
              onClick={handleOpen}
              style={{
                padding: "1em",
              }}
            >
              Signup
            </Button>
          </Grid>

          <Grid item>
            <Typography
              variant="BUTTON"
              style={{
                borderLeft: "0.2em solid CornflowerBlue",
                padding: "2.1em",
              }}
            >
              Login:
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              label="Username"
              variant="outlined"
              color="secondary"
              margin="normal"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              color="secondary"
              margin="normal"
              size="small"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
  );
};

export default Navbar;

// import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { logout } from "../store";

// const Navbar = ({ handleClick, isLoggedIn }) => (
//   <div>
//     <h1>FS-App-Template work</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// );

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.auth.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     },
//   };
// };

// export default connect(mapState, mapDispatch)(Navbar);
