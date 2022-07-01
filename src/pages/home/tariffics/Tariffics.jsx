import React from 'react';
import gold from '../../../images/tariffics/gold.png'
import silver from '../../../images/tariffics/silver.png'
import bronze from '../../../images/tariffics/bronze.png'
import classes from "./Tariffics.module.scss";


const Tariffics = (props) => {
    return (
        <section id="tariffics" className={[classes.tariffics, classes.outer].join(' ')} ref={props.tarrifics}>
            <div className={classes.section__title}>Tariffics</div>
            <div className={[classes.tariffics__container, classes.container].join(' ')}>
                <div className={[classes.tariffics__card, classes.card__tariffics, classes.card__tariffics_bronze].join(' ')}>
                    <span className={classes.card__tariffics__percent}>10%</span>
                    <div className={classes.card__tariffics__header}>
                        <div className={classes.card__tariffics__img}>
                            <img src={bronze} alt="bronze token shiba" />
                        </div>
                    </div>
                    <div className={classes.card__tariffics__body}>
                        <div className={classes.card__tariffics__title}>SHIBA BRONZE</div>
                        <div className={classes.card__tariffics__profit}>Profit: 10%</div>
                        <div className={classes.card__tariffics_days}>Days: 30</div>
                        <div className={classes.card__tariffics__button}>
                            <button data-goto="calculate" data-tariff="bronze" data-action="choose"
                                    className={classes.button_color_gold}>Start
                            </button>
                        </div>
                    </div>
                </div>
                <div className={[classes.tariffics__card, classes.card__tariffics, classes.card__tariffics_silver].join(' ')}>
                    <span className={classes.card__tariffics__percent}>25%</span>
                    <div className={classes.card__tariffics__header}>
                        <div className={classes.card__tariffics__img}>
                            <img src={silver} alt="silver token shiba" />
                        </div>
                    </div>
                    <div className={classes.card__tariffics__body}>
                        <div className={classes.card__tariffics__title}>SHIBA SILVER</div>
                        <div className={classes.card__tariffics__profit}>Profit: 25%</div>
                        <div className={classes.card__tariffics_days}>Days: 60</div>
                        <div className={classes.card__tariffics__button}>
                            <button data-goto="calculate" data-tariff="silver" data-action="choose"
                                    className={classes.button_color_gold}>Start
                            </button>
                        </div>
                    </div>

                </div>
                <div className={[classes.tariffics__card, classes.card__tariffics, classes.card__tariffics_gold].join(' ')}>
                    <span className={classes.card__tariffics__percent}>35%</span>
                    <div className={classes.card__tariffics__header}>
                        <div className={classes.card__tariffics__img}>
                            <img src={gold} alt="gold token shiba" />
                        </div>
                    </div>
                    <div className={classes.card__tariffics__body}>
                        <div className={classes.card__tariffics__title}>SHIBA GOLD</div>
                        <div className={classes.card__tariffics__profit}>Profit: 35%</div>
                        <div className={classes.card__tariffics_days}>Days: 90</div>
                        <div className={classes.card__tariffics__button}>
                            <button data-goto="calculate" data-tariff="gold" data-action="choose"
                                    className={classes.button_color_gold}>Start
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tariffics;