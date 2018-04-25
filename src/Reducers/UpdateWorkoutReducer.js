import { UPDATE_WORKOUT, updateWorkoutRoutine } from '../Actions/ChangeWorkoutRoutine';
const initialState = {
  workout: {
    timeSlots: []
  }
};

export const UpdateWorkoutReducer = (state = initialState, action) => {
  console.log(JSON.stringify(action.data));
  switch(action.type) {
    case UPDATE_WORKOUT:
    //pretty sure the states.timeSlots line in the return won't work bc it will insert the [] array into the new timeSlots instead of merging the 2
      return {
        ...state,
        workout: {
          timeSlots: [...state.workout.timeSlots, action.data]
        }
      }
    default:
      return state;
  }
}
