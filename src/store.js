import { createStore } from "redux";
import bookingReducer from "./Redux/Reducer";


const store = createStore(bookingReducer)

export default store;