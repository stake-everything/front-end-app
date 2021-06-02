import logo from './../assets/steak.svg';
import './../App.css';

export default function App(){

    return(
        <div className="Bottom-nav">
            <div id="bn-text">
                <p>APY and APR are updated every day.</p>
            </div>
            <div id="bn-logo">
                <p>
                <img
                    alt=""
                    src={logo}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                />{' Stake Everything © 2021'}
                </p>
            </div>
         </div>
    );
}