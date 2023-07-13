const addBookingInState = (state, action) => {
  console.log("Adding booking in state....");
  const updatedWeeks = state.calendar.weeks.map((week) =>
    week.map((day) => {
      if (day.date === action.payload.date) {
        const updatedHoursInDay = day.hoursInDay.map((hourData) =>
          hourData.hour === action.payload.hour ? action.payload : hourData
        );
        return { ...day, hoursInDay: updatedHoursInDay };
      }
      return day;
    })
  );
  const updatedCalendar = { ...state.calendar, weeks: updatedWeeks };
  return { ...state, calendar: updatedCalendar };
};

const deleteBookingInState = (state, action) => {
  console.log("Deleting booking in state....");
  const updatedWeeks = state.calendar.weeks.map((week) =>
    week.map((day) => {
      if (day.date === action.payload.date) {
        const updatedHoursInDay = day.hoursInDay.map((hourData) =>
          hourData.bookingId === action.payload.bookingId
            ? { ...hourData, bookingId: null, booked: false, bookedFor: "" }
            : hourData
        );
        console.log({ ...day, hoursInDay: updatedHoursInDay });
        return { ...day, hoursInDay: updatedHoursInDay };
      }
      return day;
    })
  );
  const updatedCalendar = { ...state.calendar, weeks: updatedWeeks };
  return { ...state, calendar: updatedCalendar };
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return addBookingInState(state, action);

    case "DELETE_BOOKING":
      return deleteBookingInState(state, action);
    default:
      return state;
  }
};
