export const ADD_TIMESLOT = "ADD_TIMESLOT";
export const EDIT_TIMESLOT = "EDIT_TIMESLOT";

export const addTimeslot = workoutData => ({
  type: ADD_TIMESLOT,
  data: workoutData
});
export const editTimeslot = workoutData => ({
  type: EDIT_TIMESLOT,
  data: workoutData
});
