import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";


const Slot = ({ hourData, date, dayData }) => {
  const { addBooking, deleteBooking } = useContext(CalendarContext);

  // const [booked, setBooked] = useState(false);
  const { hour, booked } = hourData;
  const handleSlotClick = () => {
    const { day, monthIndex, year } = dayData;
    const clickedDateWithHour = new Date(year, monthIndex, day, hour, 0, 0);
    if (!hourData.booked) {
      const newBooking = {
        bookingId: clickedDateWithHour,
        hour,
        booked: true,
        bookedFor: "Abc",
        date: dayData.date,
      };
      console.log("Adding booking...")
      addBooking(newBooking);
      console.log(hourData)
    } else {
      console.log("deleting..")
      deleteBooking(hourData);
    }
  };

  if (!hourData) return null;
  return (
    <div
      className={`scheduler__slot ${booked ? "booked" : ""}`}
      onClick={handleSlotClick}
    >
      {hourData.hour}:00 - {hourData.hour + 1}:00
    </div>
  );
};

export default Slot;
