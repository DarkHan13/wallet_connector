import React from 'react';
import classes from './Referal.module.scss'
import {useState} from "react";

const Referal = ({active ,setActive}) => {
    const [referalLink, setReferalLink] = useState("xv8dsjk1lf031r24")
    const [isCopied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(referalLink);
        setCopied(true)
        //Не обращай внимания
        setReferalLink("xv8dsjk1lf031r24")
    }

    return (
        <div className={[classes.popup, classes.popup__referal, active ? classes.popup_active : ''].join(' ')}>
            <div className={[classes.popup__body, classes.popup__referal__body].join(' ')}>
                <div onClick={() => setActive(false)}
                    className={[classes.popup__close, classes.popup__referal__close].join(' ')}></div>
                <div className={[classes.popup__title, classes.popup__referal__title].join(' ')}>Your referal link</div>
                <div className={classes.popup__referal__text}>Get 10% of your friends' profits</div>
                <div className={classes.popup__referal__link}>
                    <div className={classes.popup__referal__input}>
                        <input type="text" value={referalLink} id="link" readOnly={true}/>
                    </div>
                    <div className={isCopied ? classes.popup__referal__copy_active
                        : classes.popup__referal__copy} onClick={copy}>{isCopied ? "Copied" : "Copy"}</div>
                </div>
            </div>
        </div>
    );
};

export default Referal;