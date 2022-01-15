import axios from "axios";

const SET_POKEBALLS = "SET_POKEBALLS";

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
      let { data } = await axios.get("/api/pokeballs");

      dispatch(setPokeballs(data));
    } catch (error) {
      console.log("Error inside the fetchPokeballsThunk: ", error);
    }
  };
};
