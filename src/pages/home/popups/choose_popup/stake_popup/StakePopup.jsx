import classes from './StakePopup.module.scss'
import {useState} from "react";

const StakePopup = ({active, setActive, errorMessage, setErrorMessage}) => {

    const [isSuccess, setSuccess] = useState(false);

    const endAnimation = () => {
        setSuccess(true);
    }


    return (
        <div className={[classes.popup__stake, classes.popup, active ? classes.popup_active: ' '].join(' ')}>
            <div className={[classes.popup__stake__body, classes.popup__body].join(' ')}>
                <div className={classes.popup__close} onClick={() => {
                    setActive(false)
                    setErrorMessage("")
                }}></div>
                {errorMessage ? <div>
                    <div  className={classes.popup__title__error}>
                        Error
                    </div>
                    <div className={classes.popup__stake__text__error}>
                        { errorMessage}
                    </div>
                    </div>
                    :
                    (<div>
                        <div className={[classes.popup__stake__title, classes.popup__title].join(' ')}>Good!</div>
                        <div className={classes.popup__stake__text}
                             style={{display: isSuccess ? 'none' : 'block'}}
                        >
                            "Shiba in the process of stacking.Please, wait 3-5 minutes."
                        </div>
                        <div className={classes.popup__stake__text_success}
                             style={{display: isSuccess ? 'block' : 'none'}}
                        >
                            Stacking completed successfully
                        </div>
                        <div className={[classes.popup__stake__load, classes.load].join(' ')}
                             style={{display: isSuccess ? 'none' : 'block'}}
                        >
                            <div className={classes.load__title}>Stacking...</div>
                            <div className={classes.load__track}>
                                <div className={classes.load__progress} onAnimationEnd={endAnimation}></div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default StakePopup;