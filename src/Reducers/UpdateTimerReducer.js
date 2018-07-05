import { TIMER_TICK, TIMER_RESET, TIMER_STOP, INCREMENT_TIMESLOT } from '../Actions/CountTime';
const initialState = {
  seconds: 60,
  currentTimeslot: 1,
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
    case TIMER_STOP:
      return {
        ...state,
        seconds: 0,
        currentTimeslot: 1,
        currentSet: 1
      };
    case INCREMENT_TIMESLOT:
      return {
        ...state,
        currentTimeslot: state.currentTimeslot + 1
      }
    default: return state;
  }
}
