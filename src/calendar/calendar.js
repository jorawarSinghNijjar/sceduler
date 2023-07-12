import { JsonCalendar } from "json-calendar";

export const calendar = new JsonCalendar({ languageCode: "fr" });

const hoursInDay = [];

for (let i = 0; i < 24; i++) {
  const hour = {
    bookingId: null,
    hour: i,
    booked: false,
    bookedFor: "",
    // toString: () => `${i}:00 - ${i < 24 ? i + 1 : 0}:00`,
  };

  hoursInDay.push(hour);
}

export const customWeeks = calendar.weeks.map((week) =>
  week.map((day) => {
    return { ...day, hoursInDay };
  })
);

export const customCalendar = { ...calendar, weeks: customWeeks };
