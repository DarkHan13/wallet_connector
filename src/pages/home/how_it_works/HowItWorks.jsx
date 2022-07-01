import React from 'react';
import classes from './HowItWorks.module.scss'

const HowItWorks = (props) => {
    return (
        <section id="how-it-works" className={[classes.how_it_works, classes.outer].join(' ')} ref={props.HIW}>
            <div className={classes.section__title}>
                How it works?
            </div>
            <div className={[classes.how_it_works__container, classes.container].join(' ')}>
                <div className={classes.how_it_works__row}>
                    <div className={classes.how_it_works__number}>01</div>
                    <p className={classes.how_it_works__text}>
                        For a free account today and discover how to dramatically increase your
                        income with cryptocurrencies.
                    </p>
                </div>
                <div className={classes.how_it_works__row}>
                    <div className={classes.how_it_works__number}>02</div>
                    <p className={classes.how_it_works__text}>
                        For a free account today and discover how to dramatically increase your
                        income with cryptocurrencies.
                    </p>
                </div>
                <div className={classes.how_it_works__row}>
                    <div className={classes.how_it_works__number}>02</div>
                    <p className={classes.how_it_works__text}>
                        For a free account today and discover how to dramatically increase your
                        income with cryptocurrencies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;