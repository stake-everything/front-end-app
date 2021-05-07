import './App.css';
import firebase from './config/config.js';
import React from 'react';
import ListElement from './components/listElement.js';
import CustomNav from './components/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ApiPage from './views/apiPage.js'
import Main from './views/main.js'


export default function App(){

const [data,setData] = React.useState(null);

const loadData = () => {
  const dbRef = firebase.database().ref();
  dbRef.child("coins").get().then((snapshot) => {
    if (snapshot.exists()) {
      setData( snapshot.val() )
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

React.useEffect(() => {

  loadData();

  return () => {
    console.log("cleanup")
  }
}, [])

if (data==null){
  return(
        <div>
          <CustomNav />
          <div>
            <p>
              Loading...
            </p>
          </div>
        </div>
  );
}
else{

  let coins = Object.keys(data);
  
  const listItems = coins.map((ind_coin) => 
    <ListElement tag={ String( coins.indexOf(ind_coin)) } image={data[ind_coin]["image_uri"]} title={ind_coin} info={data[ind_coin]["info"]} />
  );

  return(
      <div>
        <CustomNav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/api" component={ApiPage} />
        </Switch>
        {/* <div>Words..</div> */}
      </div>
);

}
}