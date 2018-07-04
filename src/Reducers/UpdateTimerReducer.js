import { TIMER_TICK, TIMER_STOP, TIMER_RESET } from '../Actions/CountTime';
const initialState = {
  seconds: 60
};

export const UpdateTimerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TIMER_TICK:
      if(state.seconds > 0) {
        return {
          seconds: state.seconds - 1
        };
      }
      return {
        seconds: 0
      };
    case TIMER_RESET:
      return {
        seconds: action.seconds
      };
    default: return state;
  }
}
