import { ADD_BOOKING, DELETE_BOOKING } from "./ActionTypes"


export const addBooking =({bookings})=>{
    return {
        type:ADD_BOOKING,
        payload:{bookings},
    }
}

export const deleteBooking =(bookingId)=>{
    return{
        type:DELETE_BOOKING,
        payload:bookingId,
    }
}