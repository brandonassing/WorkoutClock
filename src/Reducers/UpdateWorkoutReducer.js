import { ADD_TIMESLOT, EDIT_TIMESLOT, MOVE_TIMESLOT, EDIT_WORKOUT_INFO, DELETE_TIMESLOT } from '../Actions/ChangeWorkoutRoutine';
const initialState = {
  workout: {
    workoutName: "",
    sets: 0,
    exerciseCount: 0,
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
      let newCountAdd = state.workout.exerciseCount;
      if (action.data.type=="Exercise"){
        newCountAdd++;
      }
      return {
        ...state,
        workout: {
          ...state.workout,
          exerciseCount: newCountAdd,
          timeslots: [...state.workout.timeslots, action.data]
        }
      };
    case DELETE_TIMESLOT:
      let deleteIndex = state.workout.timeslots.map(function(e) { return e.id; }).indexOf(action.data);
      let newCountDelete = state.workout.exerciseCount;
      if (state.workout.timeslots[deleteIndex].type=="Exercise"){
        newCountDelete--;
      }
      return {
        ...state,
        workout: {
          ...state.workout,
          exerciseCount: newCountDelete,
          timeslots: [
            ...state.workout.timeslots.slice(0, deleteIndex),
            ...state.workout.timeslots.slice(deleteIndex + 1)
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
