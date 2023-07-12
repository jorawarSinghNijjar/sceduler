import { calendar } from "../calendar/calendar";
import Slot from "./Slot";

const Day = ({ dayData, index }) => {
  const { className, date, hoursInDay, day, id, monthIndex, year } = dayData;

  return (
    <div className="scheduler__day">
      <div className="scheduler__day-title">
        <div className="scheduler__day-title--day-name">
          {calendar.getDayName(index)}
        </div>
        <div className="scheduler__day-title--date">
          {day} {calendar.getMonthName(monthIndex)}
        </div>
      </div>
      {hoursInDay.map((elem, index) => (
        <Slot key={index} hourData={elem} date={date} dayData={dayData} />
      ))}
    </div>
  );
};

export default Day;
