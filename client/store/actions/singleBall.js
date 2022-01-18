import axios from "axios";
import { SET_POKEBALL } from "../constants/productConstants";

// pokeballs action creator
export const setPokeball = (pokeballData) => {
  return {
    type: SET_POKEBALL,
    payload: pokeballData,
  };
};

export const fetchPokeball = (pokeballId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`/api/pokeBalls/${pokeballId}`);

      dispatch(setPokeball(data));
    } catch (error) {
      console.log("Error inside the fetchPokeballThunk: ", error);
    }
  };
};
