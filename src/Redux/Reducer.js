import { ADD_BOOKING, DELETE_BOOKING } from "./ActionTypes";

const initialState = [];


// generate unique id
const nextBookingId=(bookings) =>{
    const maxId = bookings.reduce((maxId, booking)=> Math.max(booking.id, maxId),-1);
    return maxId + 1;
} 

//Reducer function
const bookingReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_BOOKING:
            return[ ...state,{id:nextBookingId(state),...action.payload}];
        case DELETE_BOOKING:
            
            return state.filter((booking)=> booking.id !== action.payload);
    
        default:
            return state;
    }
}

export default bookingReducer;