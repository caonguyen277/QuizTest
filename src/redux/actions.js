import {
  CHANGE_SCORE,
  CHANGE_TIME
} from "./actionsTypes";

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
export const handleTimeChange = (payload) => ({
  type: CHANGE_TIME,
  payload,
});
