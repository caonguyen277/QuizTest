import {
  CHANGE_SCORE,
  CHANGE_TIME
} from "./actionsTypes";

const initialState = {
  score: 0,
  time: { hr: 0, min: 0, sec: 0, ms: 0 }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
      case CHANGE_TIME:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
