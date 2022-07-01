import React, {useState} from 'react';
import classes from './MainScreen.module.scss'
import ChoosePopup from "../popups/choose_popup/ChoosePopup";

const MainScreen = (props) => {

    const [active ,setActive] = useState(false);

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div>
            <section id="home" className={classes.main__screen}>
                <div className={classes.main__screen__bg}></div>
                <div className={[classes.main__screen__container, classes.container].join(' ')}>
                    <div className={classes.main__screen__offer}>
                        <h1 className={classes.main__screen__title}>Stacking <span className={classes.gradient__text}>Shiba token</span>
                        </h1>
                        <p className={classes.main__screen__text}>
                            Aenean massa. Cum sociis natoque penatib-us et magnis dis parturient nascetur ridiculus mus.
                        </p>
                        <div className={classes.main__screen__buttons}>
                            <div className={classes.main__screen__button}>
                                <button data-popup="popup-choose" onClick={() => setActive(true)}
                                        className={[classes.button, classes.button_gradient].join(' ')}>Stake</button>
                            </div>
                            <div className={classes.main__screen__button}>
                                <a data-goto="tariffics" href="#"
                                   className={[classes.button, classes.button_border].join(' ')}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToRef(props.tariffics);
                                    }}
                                >Detailed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChoosePopup active={active} setActive={setActive} setStakeActive={props.setActive}/>
        </div>
    );
};

export default MainScreen;