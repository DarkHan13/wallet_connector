import React, {useEffect} from 'react';
import {useWeb3React} from "@web3-react/core";
import {injected, resetWalletConnector, walletConnect, walletLink} from "../../web3/connectors";
import {useState} from "react";
import ContentWallet from "../popup/contentWallet";
import WalletPopup from "../popup/WalletPopup";

const Main = () => {

    //connector, library, chainId, activate, deactivated
    const context = useWeb3React();
    const [active, setActive] = useState(false);
    const [balance, setBalance] = useState(null);

    console.log(context.library)

    useEffect(() => {
        console.log("work")
        if (context.library) {
            context.library.getBalance(context.account).then((res) => {
                console.log(res);
                setBalance(res/1e18);
            })
        }
    }, [context])


    //connect to MetaMask
    const connectMetaMask = async () => {
        try {
            injected.deactivate()
            await context.activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    }

    const disconnectMetaMask = () => {
        context.deactivate();
        setBalance(null)
    }

    //web3react wallet connector
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
        if (context.account) {
            setActive(false);
        }
    })

    console.log(context.error)

    return (
        <div>
            {context.active ? <p>your balance: {balance}</p> :
            <button onClick={() => setActive(prev => !prev)}>
                click
            </button>}
            {/*<button onClick={connectMetaMask}>*/}
            {/*    MetaMask*/}
            {/*</button>*/}
            {/*<button onClick={disconnectMetaMask}>*/}
            {/*    disconnect MetaMask*/}
            {/*</button>*/}
            {/*<div>*/}
            {/*    <button onClick={connectWallet}>*/}
            {/*        WalletConnect*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={connectWallet}>*/}
            {/*        Trustwallet*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={connectCoinBase}>*/}
            {/*        CoinBase*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div>
                {"account : " + context.account}
                <p>{"networkId : " + context.chainId}</p>
                <p>{context.error ? context.error.code !== -32002 ? context.error.message : "Запрос уже отправлен, подтвердите вход" : "no errors"}</p>
            </div>
            <WalletPopup active={active} setActive={setActive}>
                <ContentWallet connectMetaMask={connectMetaMask} connectWallet={connectWallet}
                               connectCoinBase={connectCoinBase}
                />
            </WalletPopup>
        </div>
    );
};

export default Main;