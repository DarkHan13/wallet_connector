import React, {useEffect} from 'react';
import {useWeb3React} from "@web3-react/core";
import {injected, resetWalletConnector, walletConnect, walletLink} from "../../web3/connectors";
import ConnectPopup from "../home/popups/connect_popup/ConnectPopup";

const Main = (props) => {

    //connector, library, chainId, activate, deactivated
    const context = useWeb3React();




    //connect to MetaMask
    const connectMetaMask = async () => {
        try {
            injected.deactivate()
            await context.activate(injected);
        } catch (ex) {
            console.log(ex);
        }
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
            props.setActive(false);
        }
    })

    if (context.error)  console.log(context.error);

    return (
        <div>
            <ConnectPopup active={props.active} setActive={props.setActive}
                          connectMetaMask={connectMetaMask} connectWallet={connectWallet}
                          connectCoinBase={connectCoinBase}
            />
        </div>
    );
};

export default Main;