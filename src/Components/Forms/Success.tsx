// interface SuccessProps {
//     onClick: () => void,
// }

// export function Success({ onClick }: SuccessProps) {
//     return (
//         <div className="success">
//             <p className="success__text"> Nice to see you again!</p>
//             <button onClick={onClick} className="success__btn">Go home</button>
//         </div>
//     )
// }
interface SuccessModeProps {
    onAction: () => void;
    buttonText:string;
}


export const Success = ({ onAction,buttonText }: SuccessModeProps) => {
    return (
        <div className='success'>
           <p className="success__text"> Nice to see you again!</p>
          
            <button
                className='success__btn'
                onClick={onAction}
                >
                    {buttonText}
            </button>
        </div>
    )
}