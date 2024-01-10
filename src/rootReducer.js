// rootReducer.js
import { combineReducers } from 'redux';
import bookingReducer from './Redux/Reducer';

const rootReducer = combineReducers({
  bookings: bookingReducer,
  // other reducers go here if you have them
});

export default rootReducer;
