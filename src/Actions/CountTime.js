export const TIMER_TICK = "TIMER_TICK";
export const TIMER_RESET = "TIMER_RESET";
export const TIMER_STOP = "TIMER_STOP";
export const INCREMENT_TIMESLOT = "INCREMENT_TIMESLOT";
export const INCREMENT_SET = "INCREMENT_SET";

/*let timer = null;

  export const start = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: TIMER_START });
  dispatch(tick());
}*/

export const tick = () => ({
  type: TIMER_TICK
});

export const resetTimer = (seconds) => ({
  seconds: seconds,
  type: TIMER_RESET
});

export const stopTimer = (timer) => {
  clearInterval(timer);
  return {
    type: TIMER_STOP
  }
};

export const incrementTimeslot = () => ({
  type: INCREMENT_TIMESLOT
});

export const incrementSet = () => ({
  type: INCREMENT_SET
});
