
interface RegConfirmationProps {
    onReturn: () => void;
}

export const RegConfirmation = ({ onReturn }: RegConfirmationProps) => {
    return (
        <div className='confirmation'>
            <p className="confirmation__text">Registration Successful! Nice to meet you in our App!</p>
            <button
                type='button'
                className='confirmation__btn'
                onClick={onReturn}
            >Confirm</button>
        </div>
    )
}