import { TIMER_TICK, tick } from '../Actions/CountTime';
const initialState = {
  count: 0
};

export const UpdateTimerReducer = (state = initialState, action) => {
  if (action.type === "TIMER_TICK") {
    return {
      count: state.count + 1
    }
  }
  return state;
}
