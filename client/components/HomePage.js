import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { setPokeballs, fetchPokeballs } from "../store/action-creator/allBalls";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${"../background.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "opacity(10%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

export default function Home() {
  const classes = useStyles();
  const pokeBalls = useSelector((state) => state.pokeballs);
  const dispatch = useDispatch();
  const { setPokeballs } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(fetchPokeballs());
  }, []);

  console.log(pokeBalls);

  return (
    <main>
      <div className={classes.root}>
        <CssBaseline />
      </div>
      <div>Hi there is this showing up</div>

      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>

          {pokeBalls.map((pokeBall) => {
            return (
              {"hi"}
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
