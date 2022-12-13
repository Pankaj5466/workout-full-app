import '../css/calendar.css'
const Calendar = () => {
    const dayList = Array.from({length:30}, (_,i)=> i+1);

    console.log("dayList: ",dayList);

    return (
        <div className="calendar">
            <div className="month">
                <ul>
                    August
                </ul>
            </div>

            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>

            <ul className="days"
                onClick={(e) => {
                    console.log('selected day is: ',e.target.value);
                }}
            >
                {dayList.map(day => <li key = {day} value={day}>{day}</li>)}                
            </ul>
        </div>
    )
}

export default Calendar;
