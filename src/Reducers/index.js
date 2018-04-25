import { combineReducers } from 'redux';
import { UpdateWorkoutReducer } from './UpdateWorkoutReducer';

export default combineReducers({
  updateWorkout: UpdateWorkoutReducer
});
