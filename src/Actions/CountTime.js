export const TIMER_TICK = "TIMER_TICK";
export const TIMER_RESET = "TIMER_RESET";
export const INCREMENT_TIMESLOT = "INCREMENT_TIMESLOT";

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

export const incrementTimeslot = () => ({
  type: INCREMENT_TIMESLOT
});
