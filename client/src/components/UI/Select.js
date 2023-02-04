const Select =  (props) =>{
    const {options} = props;
    console.log('OPTIONS:',options);

    return (
        <select
            className={props.className}
            onClick={props.onClick || null}
            onChange = {props.onChange || null}
            name = {props.name}
        >
            {/* {props.children}         */}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select;