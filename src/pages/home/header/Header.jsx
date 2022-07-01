import React, {useEffect, useState} from 'react';
import classes from './header.module.scss'
import logo from '../../../images/logo.png'
import Main from "../../main/Main";
import Referal from "../popups/referals/Referal";

const Header = (props) => {

    const [connectActive, setConnectActive] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false)
    const [ReferalActive, setReferalActive] = useState(false);
    const [menuBodyActive, setMenuBodyActive] = useState(false);

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler);
    })

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollTop > 60) setHeaderFixed(true);
        else setHeaderFixed(false)
    }

    return (
        <div>
            <header className={[classes.header, classes.outer, headerFixed ? classes.header_fixed : ' '].join(' ')}>
                <div className={[classes.header__container, classes.container].join(' ')}>
                    <a onClick={(e) => {
                        e.preventDefault()
                        scrollToRef(props.home)
                    }}
                        href="#" className={[classes.header__logo, classes.logo].join(' ')}>
                        <img src={logo} alt="logo" />
                            <span className={classes.gradient__text}>SHIBA STACKING</span>
                    </a>

                    <div className={[classes.header__menu, classes.menu].join(' ')}>
                        <div className={[classes.menu__icon, menuBodyActive ? classes.menu__icon_active : ' '].join(' ')}
                            onClick={() => setMenuBodyActive(prev => !prev)}
                        >
                            <span></span>
                        </div>
                        <nav className={[classes.menu__body , menuBodyActive ? classes.menu__body_active : ' '].join(' ')}>
                            <ul className={classes.menu__list}>
                                <li><a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToRef(props.faq)
                                }}
                                    data-goto="faq" href="#" className={classes.menu__link}>FAQ</a></li>
                                <li><a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToRef(props.HIW)
                                }}
                                    data-goto="how-it-works" href="#" className={classes.menu__link}>How it works</a></li>
                                <li><a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToRef(props.tariffics)
                                }}
                                    data-goto="tariffics" href="#" className={classes.menu__link}>Tariffics</a></li>
                                <li>
                                    <button data-popup="popup-referal" className={classes.menu__link}
                                        onClick={() => setReferalActive(true)}
                                    >Referals</button>
                                </li>
                                <li><a onClick={(e) => {
                                    e.preventDefault()
                                    scrollToRef(props.home)
                                }}
                                    data-goto="home" href="#" className={classes.menu__link}>Home</a></li>
                            </ul>
                        </nav>
                        <div className={[classes.menu__button, classes.button__wrapper].join(' ')}>
                            {props.active ?
                                <button type={'button'}
                                        onClick={props.disconnect}
                                        className={[classes.button, classes.button_gradient, classes.button_size_sm].join(' ')}>
                                    Disconnect
                                </button>
                                :
                                <button data-popup = "popup-connect" href="#" type={'button'}
                                className={[classes.button, classes.button_gradient, classes.button_size_sm].join(' ')}
                                onClick={() => {
                                setConnectActive(true)
                            }}>
                                Connect
                                </button>
                            }
                            {props.account}
                        </div>
                    </div>
                </div>
            </header>
            <Main setActive={setConnectActive} active={connectActive}/>
            <Referal active={ReferalActive} setActive={setReferalActive}/>
        </div>
    );
};

export default Header;