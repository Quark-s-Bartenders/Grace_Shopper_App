const SET_POKEBALLS = "SET_POKEBALLS";

export default function allBallsReducer(state = [], action) {
  switch (action.type) {
    case SET_POKEBALLS:
      return action.payload;
    default:
      return state;
  }
}
