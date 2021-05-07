import './../App.css';
import React from 'react';
    
export default function App(){

  return(
        <div className="App">
          <div className="Main-api">
            <h4>
              The API calls for Stake Everything website data are listed below.
            </h4>
            <p>{" "}</p>
            <h4>
              Root Endpoint: stake-everything.web.app/api
            </h4>
            <p>{" "}</p>
            <p>{" "}</p>
            <h4>
              Public Endpoints:
            </h4>
            <p>
              /coins: Lists all avialable coins.
            </p>
            <p>
              /sites: Lists all avialable sites.
            </p>
          </div>
        </div>
  );
}