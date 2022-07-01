import React, {useState} from 'react';
import classes from './Calculate.module.scss'
import StakePopup from "../popups/choose_popup/stake_popup/StakePopup";
import {useEffect} from "react";

const Calculate = ({active, setActive}) => {

    const [choosen, setChoosen] = useState('bronze')
    const [value, setValue] = useState(13000)
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
        <section id="calculate" className={[classes.calculate, classes.outer].join(' ')}>
            <div className={[classes.calculate__container, classes.container].join(' ')}>
                <div className={classes.calculate__your__profit}></div>
                <div className={classes.section__title}>Calculate</div>
                <div className={classes.calculate__body}>

                    <div className={[classes.calculate__left, classes.left__calculate].join(' ')}>
                        <div className={[classes.calculate__choice, classes.choice].join(' ')}>
                            <div className={classes.choice__pointer}
                                style={{transform: choosen === 'silver' ? 'translateX(100%)' :
                                        choosen === 'gold' ? 'translateX(200%)' : 'translateX(0)'}}
                            ></div>
                            <div data-tariff="bronze" className={classes.choice__item}
                                onClick={() => setChoosen('bronze')}
                            >bronze</div>
                            <div data-tariff="silver" className={classes.choice__item}
                                 onClick={() => setChoosen('silver')}
                            >silver</div>
                            <div data-tariff="gold" className={classes.choice__item}
                                 onClick={() => setChoosen('gold')}
                            >gold</div>
                        </div>
                        <div className={classes.left__calculate__text}>Amount of deposit</div>
                        <div className={classes.left__calculate__bottom}>
                            <div className={classes.range}>
                                <input type="range" className={classes.range__input}
                                       min="1" max="20000" step="1" value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                />
                                    <div className={classes.range__values}>
                                        <div className={classes.range__min}>1m</div>
                                        <div className={classes.range__max}>20b</div>
                                    </div>
                            </div>
                            <div className={classes.range__left}>
                                <div className={classes.range__value}>
                                    <input id="range-value" type="text" value={value} readOnly={true}/>
                                </div>
                                <div className={classes.range__stake} onClick={() => setActive(true)}>Stake</div>
                            </div>
                        </div>
                    </div>

                    <div className={[classes.calculate__result, classes.result].join(' ')}>
                        <div className={classes.result__row}>
                            <div className={[classes.result__col, classes.result__col_grey].join(' ')}>
                                <div className={classes.result__title}>Total %</div>
                                <div className={[classes.result__value, classes.result__value_bg].join(' ')}><span id="total">
                                    {choosen === 'silver' ? 25 : choosen === 'gold' ? 35 : 10}
                                </span>%</div>
                            </div>
                            <div className={[classes.result__col, classes.result__col_grey].join(' ')}>
                                <div className={classes.result__title}>Days to stake</div>
                                <div className={classes.result__value}><span id="days">
                                    {choosen === 'silver' ? 60 : choosen === 'gold' ? 90 : 30}
                                </span> days</div>
                            </div>
                        </div>
                        <div className={classes.result__row}>
                            <div className={classes.result__col}>
                                <div className={classes.result__title}>You recieve</div>
                                <div className={classes.result__value}><span id="recieve">{Math.round(Number(value) + profit)}</span></div>
                            </div>
                            <div className={classes.result__col}>
                                <div className={classes.result__title}>Total Profit</div>
                                <div className={classes.result__value}><span id="profit">{Math.round(profit)}</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <StakePopup active={active} setActive={setActive}/>
        </section>
    );
};

export default Calculate;