import { useContext, useEffect, useState } from "react";

import Day from "./components/Day";
import { CalendarContext } from "./context/CalendarContext";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./App.scss";

function App() {
  const { calendar } = useContext(CalendarContext);
  const [displayWeek, setDisplayWeek] = useState(calendar.getCurrentWeek());

  // console.log(calendar);

  const handleNextWeekClick = () => {
    console.log(calendar)
    console.log(calendar.getNextWeek(displayWeek)[0].date)
    setDisplayWeek(calendar.getNextWeek(displayWeek));
  };

  const handlePreviousWeekClick = () => {
    setDisplayWeek(calendar.getPreviousWeek(displayWeek));
  };

  // useEffect(() => {
  //   setDisplayWeek(calendar.getCurrentWeek());
  //   console.log(calendar)
  // }, []);

  if (!displayWeek) return <h1>Loading...</h1>;
  return (
    <div className="fixed-height-container">
      <button className="previous-btn">
        <GrPrevious onClick={handlePreviousWeekClick} />
      </button>
      <div className="scheduler">
        <div className="scheduler__days">
          {displayWeek.map((day, index) => {
            return <Day key={index} dayData={day} index={index} />;
          })}
        </div>
      </div>
      <button className="next-btn" onClick={handleNextWeekClick}>
        <GrNext />
      </button>
    </div>
  );
}

export default App;
