import {Web3ReactProvider} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import './App.css'
import Home from "./pages/home/Home";




function App() {


    const getLibrary = (provider) => {
        const library = new Web3Provider(provider, 'any');
        library.pollingInterval = 15000;
        return library;
    }



    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div>
                <Home />
            </div>
        </Web3ReactProvider>
    );
}

export default App;
