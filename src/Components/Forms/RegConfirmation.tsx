interface RegConfirmationProps {
    onClick: () => void,
}

export function RegConfirmation({ onClick }: RegConfirmationProps) {
    return (
        <div className="confirmation">
            <p className="confirmation__text">Registration Successful! Nice to meet you in our App!</p>
            <button onClick={onClick} className="confirmation__btn">Confirm</button>
        </div>
    )
}