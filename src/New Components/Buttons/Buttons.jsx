import './buttons.css';

const PrimaryButton = ({text, clickHandler, ...moreClickHandler}) => {
    return(
        <div className='p-button p-button-primary' onClick={clickHandler} >
            {text}
        </div>
    )
}
const SecondaryButton = ({text, clickHandler, ...moreClickHandler}) => {
    return(
        <div className='p-button p-button-secondary' onClick={clickHandler} >
            {text}
        </div>
    )
}

export  {PrimaryButton, SecondaryButton}