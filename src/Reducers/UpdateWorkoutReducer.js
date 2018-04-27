import { ADD_TIMESLOT, addTimeslot, EDIT_TIMESLOT, editTimeslot } from '../Actions/ChangeWorkoutRoutine';
const initialState = {
  workout: {
    timeslots: []
  }
};

export const UpdateWorkoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TIMESLOT:
      return {
        ...state,
        workout: {
          timeslots: [...state.workout.timeslots, action.data]
        }
      };
    case EDIT_TIMESLOT:
      const updatedItems = state.workout.timeslots.map(item => {
        if(item.index === action.data.index){
          return { ...item, ...action.data }
        }
        return item
      });
      return {
        ...state,
        workout: {
          timeslots: updatedItems
        }
      };
    default:
      return state;
  }
}
