import { UPDATE_WORKOUT, updateWorkoutRoutine } from '../Actions/ChangeWorkoutRoutine';
const initialState = {
  workouts: [{
    timeSlots: [{
      seconds: 0,
      type: "",
      name: "",
      index: 0
    }]
  }]
};

export const UpdateWorkoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_WORKOUT:
      return {

      }
    default:
      return state;
  }
}
