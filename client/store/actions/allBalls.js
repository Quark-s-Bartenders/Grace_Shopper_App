import axios from "axios";
import { SET_POKEBALLS } from "../constants/productConstants";

// pokeballs action creator
export const setPokeballs = (pokeballsData) => {
  return {
    type: SET_POKEBALLS,
    payload: pokeballsData,
  };
};

export const fetchPokeballs = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("/api/pokeBalls");

      dispatch(setPokeballs(data));
    } catch (error) {
      console.log("Error inside the fetchPokeballsThunk: ", error);
    }
  };
};
