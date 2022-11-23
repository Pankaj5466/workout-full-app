import './SignUpPage.css'

const SignUpPage = () => {

    const handleSubmitButton = (e) => {
        //ValidationExample1: Validate onSubmit ButtonPress && Enable label
        //Validation2: Validate email as user type them
        //Validation3: make seperate input component , which handle {validation,errorText,onBlur}
        e.preventDefault();
        console.log('form submit pressed\n');
    }
    return <div className='singUpWrap'>
        <form onSubmit={handleSubmitButton}>

            <label>
                <span>First Name: </span>
                <input type='text' />
            </label>

            <label>
                <span>Last Name: </span>
                <input type='text' />
            </label>

            <label>
                <span>Email </span>
                <input type='email' />
            </label>

            <label>
                <span>DOB: </span>
                <input type='date' />
            </label>

            <hr />
            <label>
                <span> Gender </span>
                <select name="gender" required="" className="idle">
                    <option value="">Please choose</option>
                    <option value="Female">Female</option>
                <option value="Male">Male</option>“
                </select>
            </label>

            <label>
                <span>Height</span>
                <input type="number" name="length" min="0" max='200' autoComplete="off" required="" />
                <i>cm</i>
            </label>
            <label>
                <span>Weight</span>
                <input type="number" name="weight" min="0" autoComplete="off" required="" /><i>kg</i>
            </label>

            <label>
                <span>Goal</span>
                <select name="goal" className="idle">
                    <option value="">Goal</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="muscle-gain">Muscle Gain</option>
                </select>
            </label>

            <label>
                <span>Activity</span>
                <select name="activity" className="idle">
                    <option value="">Activity Level</option>
                    <option value="lightly-active">Lightly active (moderate exercise but sedentary job)</option>
                    <option value="moderately-active">Moderately active (intense exercise but sedentary job)</option>
                    <option value="very-active">Very active (moderate exercise and active job)</option>
                    <option value="extra-active">Extra active (intense exercise and active job)</option>
                </select>
            </label>
            
            {/* This will link it to formSumbit handler */}
            <button type="submit">Submit</button>

        </form>
    </div>

}

export default SignUpPage;