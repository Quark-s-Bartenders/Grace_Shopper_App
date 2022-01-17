import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { AccountCircle, LockRounded } from "@mui/icons-material";

const CheckoutPage = () => {
  let user = {
    username: "LostPilot",
    password: "123456",
    firstName: "Amelia",
    lastName: "Earhart",
    address: "10 Never Found Drive",
    city: "Nowhere",
    state: "HI",
    postalCode: 30000,
    phone: "555-444-0000",
    isAdmin: false,
    ccNum: 1238,
    cvv: 125,
    loggedIn: true,
  };

  let balls = [
    {
      name: "Timer Ball",
      image: "images/timerBall.png",
      price: 9.99,
      quantity: 1000,
      description:
        "A somewhat different Poké Ball that becomes progressively more effective at catching Pokémon the more turns that are taken in battle.",
    },
    {
      name: "Ultra Ball",
      image: "images/ultraBall.png",
      price: 11.99,
      quantity: 1000,
      description:
        "An ultra-high performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball.",
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <Typography variant="h5" color="inherit" fontWeight="bold">
        Checkout Page
      </Typography>
      <Grid
        container
        spacing={5}
        direction="row-reverse"
        justifyContent="space-evenly"
      >
        {balls.map((ball) => {
          return (
            <Grid item xs={4} sm={3} key={ball.id}>
              <Item>
                <div>
                  <div className="ball-image">
                    <img src={ball.image} width="250" height="250" />
                  </div>
                  <Typography variant="h5" color="inherit" fontWeight="bold">
                    <div>{ball.name}</div>
                    <div>{"$" + ball.price}</div>
                  </Typography>
                </div>
                <Button
                  color="inherit"
                  // onClick={handleOpen}
                  style={{
                    padding: "1em",
                  }}
                >
                  remove from cart
                </Button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h5" color="inherit" fontWeight="bold">
        <div>
          {user.firstName} {user.lastName}
        </div>

        <div>{user.address}</div>
        <div>
          {user.city}, {user.state}
        </div>
        <div>{user.postalCode}</div>
        <div> Credit Card Number: {user.ccNum}</div>
      </Typography>
      <TextField
        label="CVV"
        variant="outlined"
        color="secondary"
        margin="normal"
        size="small"
        type="cvv"
      />
      <Typography variant="h8" color="inherit">
        3 or 4 digits
      </Typography>
      <Button
        color="inherit"
        // onClick={handleOpen}
        style={{
          padding: "1em",
        }}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};

export default CheckoutPage;

// (user.loggedIn === true ? <PersonalInfo /> : <InputShippingInfo />)

// InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <LockRounded />
//       </InputAdornment>
//     )
//   }}
