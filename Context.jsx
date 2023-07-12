// import { createContext, useReducer } from "react";
// import { bookingReducer } from "./src/Reducer";

// const initialState = {
//   bookings: [],
//   calendar: {}
// };

// export const BookingContext = createContext(initialState);

// export const BookingProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(bookingReducer, initialState);

//   // Actions

//   const addBooking = (booking) => {
//     dispatch({
//       type: "ADD_BOOKING",
//       payload: booking,
//     });
//   };

//   const value = {
//     bookings: state.bookings,
//     addBooking,
//   };

//   return (
//     <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
//   );
// };
