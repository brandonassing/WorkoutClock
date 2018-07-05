import { TIMER_TICK, TIMER_RESET, INCREMENT_TIMESLOT } from '../Actions/CountTime';
const initialState = {
  seconds: 60,
  currentTimeslot: 0,
  currentSet: 1
};

export const UpdateTimerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TIMER_TICK:
      if(state.seconds > 0) {
        return {
          ...state,
          seconds: state.seconds - 1
        };
      }
      return {
        ...state,
        seconds: 0
      };
    case TIMER_RESET:
      return {
        ...state,
        seconds: action.seconds
      };
    case INCREMENT_TIMESLOT:
      return {
        ...state,
        currentTimeslot: state.currentTimeslot + 1
      }
    default: return state;
  }
}
