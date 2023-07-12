import { useContext } from "react";

import Day from "./components/Day";
import { CalendarContext } from "./context/CalendarContext";
import "./App.scss";

function App() {
  const { calendar } = useContext(CalendarContext);

  const getCurrentWeek = () =>
    calendar.weeks.filter((week) => {
      return week.some((day) => {
        return day.date.getTime() === calendar.today.getTime();
      });
    })[0];

  console.log(calendar);
  // console.log(currentWeek);
  return (
    <div className="fixed-height-container">
      <div className="scheduler">
        <div className="scheduler__days">
          {getCurrentWeek().map((day, index) => {
            return <Day key={index} dayData={day} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
