
const DaySelector = (props) => {
    const days = ['Mon','Tue','Wed'];

    return (<div className="d-flex flex-row">
        <button className="p-2 btn"> + </button>

        {days.map(d => (
            <button className="btn btn-primary m-2">{d}</button>
        ))}
        </div> )
}

export default DaySelector;