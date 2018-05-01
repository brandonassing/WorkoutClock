import { ADD_TIMESLOT, addTimeslot, EDIT_TIMESLOT, editTimeslot, MOVE_TIMESLOT, moveTimeslot, EDIT_WORKOUT_INFO, editWorkout, DELETE_TIMESLOT, deleteTimeslot } from '../Actions/ChangeWorkoutRoutine';
const initialState = {
  workout: {
    workoutName: "",
    sets: 0,
    timeslots: []
  }
};

export const UpdateWorkoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case EDIT_WORKOUT_INFO:
      return {
        ...state,
        workout: {
          ...state.workout,
          ...action.data
        }
      };
    case ADD_TIMESLOT:
      return {
        ...state,
        workout: {
          ...state.workout,
          timeslots: [...state.workout.timeslots, action.data]
        }
      };
    case DELETE_TIMESLOT:
        return {
          ...state,
          workout: {
            ...state.workout,
            timeslots: [
              ...state.workout.timeslots.slice(0, action.data),
              ...state.workout.timeslots.slice(action.data + 1)
            ]
          }
        };
    case EDIT_TIMESLOT:
      var updatedItems = state.workout.timeslots.map(item => {
        if(item.id === action.data.id){
          return { ...item, ...action.data }
        }
        return item
      });
      return {
        ...state,
        workout: {
          ...state.workout,
          timeslots: updatedItems
        }
      };
    case MOVE_TIMESLOT:
    //TODO
    return state;
    default:
      return state;
  }
}
