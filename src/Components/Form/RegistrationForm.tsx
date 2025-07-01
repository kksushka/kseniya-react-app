interface RegistrationFormProps {
    onClick: () => void,
}

export function RegistrationForm({onClick}:RegistrationFormProps) {
    return (
        <form className="form__container">
            <input type="text" placeholder="Your name" className="form__input"/>
            <input type="email" placeholder="Your email" className="form__input"/>
            <input type="password" placeholder="Your password" className="form__input"/>
            <input type="password" placeholder="Confirm password" className="form__input"/>
            <button onClick={onClick} className="form__btn">Sign Up</button>
        </form>
    )
}