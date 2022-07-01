import React, {useEffect, useState} from 'react';
import classes from './ChoosePopup.module.scss'

const ChoosePopup = ({active, setActive, setStakeActive}) => {

    const [choosen, setChoosen] = useState('bronze')
    const [value, setValue] = useState(13.0)
    const [letter, setLetter] = useState('b')
    const [profit, setProfit] = useState(1.3);

    const calculate = () => {
        if (choosen === 'bronze') {
            setProfit(value * 0.1);
        } else if (choosen === 'silver') {
            setProfit(value * 0.25);
        } else {
            setProfit(value * 0.35);
        }
    }

    useEffect(() => {
        calculate();
    }, [value, choosen])

    return (
        <div className={[classes.popup, classes.popup__choose, active ? classes.popup_active : ' '].join(' ')} data-choose-tariff="bronze">
            <div className={[classes.popup__body, classes.popup__choose__body].join(' ')}>
                <div onClick={() => setActive(false)}
                    className={[classes.popup__close, classes.popup__choose__close].join(' ')}></div>
                <div className={[classes.popup__title, classes.popup__choose__title].join(' ')}>Сhoose your tarif and stake</div>
                <div className={[classes.popup__choose__tariffics, classes.tariffics__popup__choose].join(' ')}>
                    <div data-choose-value="bronze" className={[classes.tariffics__popup__choose__col,
                        choosen === 'bronze' ? classes._active : ''].join(' ')}
                        onClick={() => setChoosen('bronze')}
                    >
                        <div className={classes.tariffics__popup__choose__tariff}>Bronze</div>
                        <div className={classes.tariffics__popup__choose__values}>30 days / 10%</div>
                    </div>
                    <div data-choose-value="silver" className={[classes.tariffics__popup__choose__col,
                        choosen === 'silver' ? classes._active : ''].join(' ')}
                         onClick={() => setChoosen('silver')}
                    >
                        <div className={classes.tariffics__popup__choose__tariff}>Silver</div>
                        <div className={classes.tariffics__popup__choose__values}>60 days / 25%</div>
                    </div>
                    <div data-choose-value="gold" className={[classes.tariffics__popup__choose__col,
                        choosen === 'gold' ? classes._active : ''].join(' ')}
                         onClick={() => setChoosen('gold')}
                    >
                        <div className={classes.tariffics__popup__choose__tariff}>Gold</div>
                        <div className={classes.tariffics__popup__choose__values}>90 days / 35%</div>
                    </div>
                </div>
                <div className={classes.popup__choose__stakes}>
                    <div className={classes.popup__choose__receive}>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} id="choose-input" />
                    </div>
                    <div onClick={() => {
                        setStakeActive(true)
                        setActive(false)
                    }}
                        className={[classes.popup__choose__stake, classes.stake].join(' ')}>Stake</div>
                </div>
                <div className={classes.popup__choose__values}>
                    <div className={classes.popup__choose__get}>Will get: <span data-choose-get>
                        {(Number(value) + Number(profit)).toFixed(2) + letter}
                    </span></div>
                    <div className={classes.popup__choose__profit}>Profit: <span data-choose-profit>{(profit).toFixed(2) + letter}</span></div>
                </div>
            </div>

        </div>
    );
};

export default ChoosePopup;