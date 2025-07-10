interface SuccessProps {
    onClick: () => void,
}

export function Success({ onClick }: SuccessProps) {
    return (
        <div className="success">
            <p className="success__text"> Nice to see you again!</p>
            <button onClick={onClick} className="success__btn">Go to home</button>
        </div>
    )
}