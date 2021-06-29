import logo from './../assets/steak.svg';
import styles from './../App.css';

export default function App(){

    return(
        <div className="App-header">
            <h3>
            <img
                src="/assets/steak.svg"
                width="32"
                height="32"
                className="d-inline-block align-top"
            /><b>{' Stake Everything'}</b>
            </h3>
            <p>{" "}</p>
            <h6 id="bsc-text">
            <b><i>{'Earn the best interest with your crypto on the Binance Smart Chain.'}</i></b>
            </h6>
         </div>
    );
}