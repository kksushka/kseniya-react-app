
interface Title {
    title: string,
}

function Title({ title }: Title) {
    return (
        <div className='title__container'>
            <p className='title'>{title}</p>
        </div>
    )
}

export default Title;