import '../css/calendar.css'

const Calendar = ({handleDaySelect,selectedDay}) => {
    const dayList = Array.from({length:30}, (_,i)=> i+1);
    
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
                onClick={(e) => handleDaySelect({
                    day:e.target.value,
                    month:'12',
                    year:'2022'
                
                })}
            >
                {dayList.map(day => <li key = {day} value={day}
                    className = {`${day === selectedDay.day ? 'active' : ''}`}
                >{day} </li>)}                
            </ul>
        </div>
    )
}

export default Calendar;
