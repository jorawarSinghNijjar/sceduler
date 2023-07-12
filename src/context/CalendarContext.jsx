import { createContext, useReducer } from "react";
import { bookingReducer } from "./Reducer";
import { customCalendar } from "../calendar/calendar";

const initialState = {
  calendar: customCalendar,
};

export const CalendarContext = createContext(initialState);

export const CalendarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Actions

  const addBooking = (booking) => {
    dispatch({
      type: "ADD_BOOKING",
      payload: booking,
    });
  };

  const deleteBooking = (booking) => {
    dispatch({
      type: "DELETE_BOOKING",
      payload: booking,
    });
  };

  const value = {
    calendar: state.calendar,
    addBooking,
    deleteBooking,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
