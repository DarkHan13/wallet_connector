import {Web3ReactProvider} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import WalletPopup from "./pages/popup/WalletPopup";
import {useState} from "react";
import ContentWallet from "./pages/popup/contentWallet";
import Main from "./pages/main/Main";

window.onload = function () {
    localStorage.clear();
}

function App() {


    const getLibrary = (provider) => {
        const library = new Web3Provider(provider, 'any');
        library.pollingInterval = 15000;
        return library;
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div>
                <Main />
            </div>
        </Web3ReactProvider>
    );
}

export default App;
