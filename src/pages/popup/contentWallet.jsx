import React from 'react';
import classes from "./ContentWallet.module.css";
import MetaMask from '../../images/1.png'
import Trustwallet from '../../images/2.png'
import Coinbase from '../../images/3.png'
import Walletconnect from '../../images/4.png'

const ContentWallet = (props) => {
    return (
        <div className={classes.container}>
            <div style={{textAlign: 'center'}}>
                <div className={classes.title}>Сonnect your wallet</div>
                <p className={classes.popup__connect__text}>In order to start stacking, you must connect a wallet</p>
                <div style={{display: "flex", flexDirection:'row'}}>
                    <div>
                        <div className={classes.wallet__popup__connect__icon} onClick={() => props.connectMetaMask()}>
                            <img className={classes.icon__image} src={MetaMask} alt="Metamask" />
                            <div className={''}>Metamask</div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.wallet__popup__connect__icon} onClick={() => props.connectWallet()}>
                            <img className={classes.icon__image} src={Trustwallet} alt="Trustwallet" />
                            <div className={''}>Trustwallet</div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection:'row'}}>
                    <div>
                        <div className={classes.wallet__popup__connect__icon} onClick={() => props.connectCoinBase()}>
                            <img className={classes.icon__image} src={Coinbase} alt="Coinbase" />
                            <div className={''}>Coinbase</div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.wallet__popup__connect__icon} onClick={() => props.connectWallet()}>
                            <img className={classes.icon__image} src={Walletconnect} alt="Walletconnect" />
                            <div className={''}>WalletConnect</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentWallet;
