import React from 'react';
import classes from './Coins.module.scss'
import coinbase from '../../../images/coins/1.png'
import kraken from '../../../images/coins/2.png'
import Huobi from '../../../images/coins/3.png'
import KuCoin from '../../../images/coins/4.png'
import bittrex from '../../../images/coins/5.png'

const Coins = () => {
    return (
        <div className={[classes.coins, classes.outer].join(' ')}>
            <div className={[classes.coins__container, classes.container].join(' ')}>
                <div className={classes.coins__body}>
                    <ul className={classes.coins__list}>
                        <li>
                            <a href="#" className={classes.coins__link}>
                                <img src={coinbase} alt="coinbase" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes.coins__link}>
                                <img src={kraken} alt="kraken" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes.coins__link}>
                                <img src={Huobi} alt="Huobi" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes.coins__link}>
                                <img src={KuCoin} alt="KuCoin" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes.coins__link}>
                                <img src={bittrex} alt="bittrex" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Coins;