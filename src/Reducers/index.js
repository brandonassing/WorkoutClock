import { combineReducers } from 'redux';
import { UpdateWorkoutReducer } from './UpdateWorkoutReducer';
import { UpdateTimerReducer } from './UpdateTimerReducer';

export default combineReducers({
  updateWorkout: UpdateWorkoutReducer,
  updateTimer: UpdateTimerReducer
});
