import { JsonCalendar } from "json-calendar";

const calendar = new JsonCalendar({ languageCode: "fr" });

// Adding months to calendar
const createCalendar = (startMonth, startYear, endMonth, endYear) => {
  console.log("Creating Calendar")
  let startMonthDate = new Date(startYear, startMonth);
  let endMonthDate = new Date(endYear, endMonth);

  while (startMonthDate.getTime() < endMonthDate.getTime()) {
    calendar.changeMonth(
      startMonthDate.getFullYear(),
      startMonthDate.getMonth()
    );

    let nextMonth = startMonthDate.getMonth() + 1;
    startMonthDate.setMonth(nextMonth);
  }
};

let startDate = calendar.today;
let endDate = new Date();
endDate.setFullYear(startDate.getFullYear() + 1);

createCalendar(
  startDate.getMonth(),
  2023,
  endDate.getMonth(),
  endDate.getFullYear()
);

//Adding hoursInDay array to all calendars

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


const customWeeks = calendar.weeks.map((week) =>
  week.map((day) => {
    console.log("Creating custom weeks..")
    return { ...day, hoursInDay };
  })
);

// Adding properties and methods to custom calendar

const customCalendar = { ...calendar, weeks: customWeeks };
customCalendar.changeMonth = calendar.changeMonth;
customCalendar.buildWeeksArray = calendar.buildWeeksArray;
customCalendar.getDayName = calendar.getDayName;
customCalendar.getMonthName = calendar.getMonthName;

customCalendar.getCurrentWeek = () =>
  customCalendar.weeks.filter((week) => {
    return week.some((day) => {
      return day.date.getTime() === customCalendar.today.getTime();
    });
  })[0];

customCalendar.getCurrentWeekIndex = (week) => {
  // console.log("Week-",week[0].date)
  const firstDayOfWeek = week[0].date;
  return customCalendar.weeks.findIndex((week) =>
    week.some((day) => firstDayOfWeek.getTime() === day.date.getTime())
  );
};

customCalendar.findCurrentMonth = () => {
  return customCalendar.options.monthIndex;
};
customCalendar.findCurrentYear = () => {
  return customCalendar.options.year;
};
customCalendar.getNextWeek = (week) => {
  let currentWeekIndex = customCalendar.getCurrentWeekIndex(week);
  // if (!customCalendar.weeks[currentWeekIndex + 1]) {
  //   console.log("Weeks done");
  //   let currentYear = customCalendar.findCurrentYear(currentWeekIndex);
  //   let nextMonth = customCalendar.findCurrentMonth(currentWeekIndex) + 1;
  //   if (nextMonth >= 12) {
  //     nextMonth = 0;
  //     currentYear = currentYear + 1;
  //   }
  //   customCalendar.changeMonth(currentYear, nextMonth);
  // }
  return customCalendar.weeks[currentWeekIndex + 1];
};

customCalendar.getPreviousWeek = (week) => {
  let currentWeekIndex = customCalendar.getCurrentWeekIndex(week);
  // if (currentWeekIndex <= 0) {
  //   console.log("Week:", currentWeekIndex);
  //   let currentYear = customCalendar.findCurrentYear(currentWeekIndex);
  //   let previousMonth = customCalendar.findCurrentMonth(currentWeekIndex) - 1;
  //   if (previousMonth < 0) {
  //     previousMonth = 11;
  //     currentYear = currentYear - 1;
  //   }
  //   customCalendar.changeMonth(currentYear, previousMonth);
  // }
  let newCurrentIndex = customCalendar.getCurrentWeekIndex(week);
  return customCalendar.weeks[newCurrentIndex - 1];
};

export { customCalendar };
