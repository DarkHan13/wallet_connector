import React, {useRef, useState} from 'react';
import classes from './Home.module.css'
import Header from "./header/Header";
import MainScreen from "./main-screen/MainScreen";
import Total from "./total/Total";
import Tariffics from "./tariffics/Tariffics";
import Calculate from "./calculate/Calculate";
import Activity from "./activity/Activity";
import HowItWorks from "./how_it_works/HowItWorks";
import FAQ from "./faq/FAQ";
import Coins from "./coins/Coins";
import StakePopup from "./popups/choose_popup/stake_popup/StakePopup";
import {useEffect} from "react";
import {useWeb3React} from "@web3-react/core";
import {injected, resetWalletConnector, walletConnect, walletLink} from "../../web3/connectors";

const Home = () => {


    //refs
    const faq = useRef(null);
    const HIW = useRef(null);
    const tariffics = useRef(null);
    const home = useRef(null);

    const [stakeActive, setStakeActive] = useState(false);
    const [balance, setBalance] = useState(null)
    const [isFirstLoaded, setFirstLoaded] = useState(true);

    const context = useWeb3React();

    console.log(context);
    console.log("balance: " + balance)

    const connectMetaMask = async () => {
        try {
            injected.deactivate()
            await context.activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    }

    const connectWallet = async () => {
        try {
            resetWalletConnector(walletConnect);
            await context.activate(walletConnect);
        } catch (ex) {
            console.log(ex);
        }
    }

    const connectCoinBase = async () => {
        try {
            await context.activate(walletLink)
        } catch (ex) {
            console.log(ex);
        }
    }


    useEffect(() => {
        if (isFirstLoaded) {
            let wallet = JSON.parse(localStorage.getItem('walletconnect'));
            if (localStorage.getItem('-walletlink:https://www.walletlink.org:session:linked') === '1') {
                connectCoinBase();
            }else if (wallet && wallet.connected) {
                connectWallet();
            }
            else {
                console.log("METAMASK")
                connectMetaMask();
            }
            setFirstLoaded(false)
        }
    }, [])

    const disconnectMetaMask = () => {
        context.deactivate();
        localStorage.clear();
        setBalance(null)
    }

    useEffect(() => {
        if (context.library) {
            context.library.getBalance(context.account).then((res) => {
                console.log(res);
                setBalance(res/1e18);
            })
        }
    }, [context])

    return (
        <div className={classes.page__wrapper} ref={home}>
            <Header
                active={context.active} account={context.account} disconnect={disconnectMetaMask}
                home={home} faq={faq} tariffics={tariffics} HIW={HIW}

            />
            <main className={classes.page}>
                <MainScreen setActive={setStakeActive} tariffics={tariffics}/>
                <Total />
                <Tariffics tarrifics={tariffics}/>
                <Calculate active={stakeActive} setActive={setStakeActive}/>
                <Activity />
                <HowItWorks HIW={HIW}/>
                <FAQ faq={faq}/>
                <Coins />
            </main>
            <div>
                {stakeActive ? <StakePopup active={stakeActive} setActive={setStakeActive}/> : null}
            </div>

        </div>
    );
};

export default Home;