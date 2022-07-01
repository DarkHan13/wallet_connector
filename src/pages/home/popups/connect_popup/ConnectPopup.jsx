import React from 'react';
import classes from './ConnectPopup.module.scss'
import MetaMask from '../../../../images/1.png'
import Trustwallet from '../../../../images/2.png'
import Coinbase from '../../../../images/3.png'
import Walletconnect from '../../../../images/4.png'
import {useWeb3React} from "@web3-react/core";

const ConnectPopup = ({active, setActive, connectMetaMask, connectWallet, connectCoinBase}) => {


    const {error} = useWeb3React();

    return (
        <div className={[classes.popup, classes.popup__connect, active ? classes.popup_active : ''].join(' ')}>
            <div className={[classes.popup__body, classes.popup__connect__body].join(' ')}>
                <div onClick={() => setActive(false)}
                    className={[classes.popup__close, classes.popup__connect__close].join(' ')}></div>
                <div className={[classes.popup__title, classes.popup__connect__title].join(' ')}>Сonnect your wallet</div>
                <p className={classes.popup__connect__text}>In order to start stacking, you must connect a wallet</p>
                {error && error.code === -32002 &&
                    <p className={[classes.popup__connect__text, classes.error].join(' ')}>Request sent. Open metamask</p>
                }
                <div className={[classes.popup__connect__wallet, classes.wallet__popup__connect].join(' ')}>
                    <div className={classes.wallet__popup__connect__row}>

                        <a href="#" className={classes.wallet__popup__connect__item} onClick={connectMetaMask}>
                            <div className={classes.wallet__popup__connect__icon}>
                                <img src={MetaMask} alt="Metamask" />
                            </div>
                            <div className={classes.wallet__popup__connect__title}>Metamask</div>
                        </a>

                        <a href="#" className={classes.wallet__popup__connect__item} onClick={connectWallet}>
                            <div className={classes.wallet__popup__connect__icon}>
                                <img src={Trustwallet} alt="Trustwallet" />
                            </div>
                            <div className={classes.wallet__popup__connect__title}>Trustwallet</div>
                        </a>

                    </div>
                    <div className={classes.wallet__popup__connect__row}>

                        <a href="#" className={classes.wallet__popup__connect__item} onClick={connectCoinBase}>
                            <div className={classes.wallet__popup__connect__icon}>
                                <img src={Coinbase} alt="Coinbase" />
                            </div>
                            <div className={classes.wallet__popup__connect__title}>Coinbase</div>
                        </a>

                        <a href="#" className={classes.wallet__popup__connect__item} onClick={connectWallet}>
                            <div className={classes.wallet__popup__connect__icon}>
                                <img src={Walletconnect} alt="Walletconnect" />
                            </div>
                            <div className={classes.wallet__popup__connect__title}>Walletconnect</div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectPopup;