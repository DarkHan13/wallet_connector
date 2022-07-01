import React from 'react';
import classes from './FAQ.module.scss'

const Faq = (props) => {
    return (
        <section id="faq" className={[classes.faq, classes.outer].join(' ')} ref={props.faq}>
            <div className={classes.section__title}>FAQ</div>
            <div className={[classes.faq__container, classes.container].join(' ')}>
                <div className={classes.faq__body}>
                    <div className={classes.faq__row}>
                        <div className={classes.faq__number}>1</div>
                        <div className={classes.faq__content}>
                            <div className={classes.faq__title}>Choose your text</div>
                            <p className={classes.faq__text}>
                                The Shiba Inu token is our foundational currency that allows investors to hold millions,
                                billions, or even trillions, of it in their wallets.
                            </p>
                        </div>
                    </div>
                    <div className={classes.faq__row}>
                        <div className={classes.faq__number}>2</div>
                        <div className={classes.faq__content}>
                            <div className={classes.faq__title}>Choose your text</div>
                            <p className={classes.faq__text}>
                                The Shiba Inu token is our foundational currency that allows investors to hold millions,
                                billions, or even trillions, of it in their wallets.
                            </p>
                        </div>
                    </div>
                    <div className={classes.faq__row}>
                        <div className={classes.faq__number}>3</div>
                        <div className={classes.faq__content}>
                            <div className={classes.faq__title}>Choose your text</div>
                            <p className={classes.faq__text}>
                                The Shiba Inu token is our foundational currency that allows investors to hold millions,
                                billions, or even trillions, of it in their wallets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;