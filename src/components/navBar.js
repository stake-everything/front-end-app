import logo from './../assets/steak.svg';
import './../App.css';
import {Link} from 'react-router-dom'

export default function App(){

    return(
        <div className="App-header">
            <h3>
            <img
                alt=""
                src={logo}
                width="32"
                height="32"
                className="d-inline-block align-top"
            /><b>{' Stake Everything'}</b>
            </h3>
            <p>{" "}</p>
            <h6 id="bsc-text">
            <b><i>{'Earn the best interest with your crypto on the '}</i>
            {/* <img
                alt=""
                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010"
                width="22"
                height="22"
                className="d-inline-block align-top"
            /> */}
            <i>{' Binance Smart Chain.'}</i></b>
            </h6>
            {/* <Link to="/api">
                <h5>
                {"API  "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                </svg>
                </h5>
            </Link> */}
         </div>
    );
}