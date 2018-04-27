export const EDIT_WORKOUT_INFO = "EDIT_WORKOUT_INFO";
export const ADD_TIMESLOT = "ADD_TIMESLOT";
export const EDIT_TIMESLOT = "EDIT_TIMESLOT";
export const MOVE_TIMESLOT = "MOVE_TIMESLOT";

export const editWorkout = workoutInfo => ({
  type: EDIT_WORKOUT_INFO,
  data: workoutInfo
});
export const addTimeslot = workoutData => ({
  type: ADD_TIMESLOT,
  data: workoutData
});
export const editTimeslot = workoutData => ({
  type: EDIT_TIMESLOT,
  data: workoutData
});
export const moveTimeslot = indexes => ({
  type: MOVE_TIMESLOT,
  data: indexes
});
