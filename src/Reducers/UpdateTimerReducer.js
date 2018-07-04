import { TIMER_TICK, TIMER_STOP } from '../Actions/CountTime';
const initialState = {
  count: 0
};

export const UpdateTimerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TIMER_TICK:
      return {
        count: state.count + 1
      };
    case TIMER_STOP:
      return {
        count: 0
      };
    default: return state;
  }
}
