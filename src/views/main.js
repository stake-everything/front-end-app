import './../App.css';
import {db} from './../config/config.js';
import React from 'react';
import ListElement from './../components/listElement.js';
import Accord from './../components/Accordion.js';
import CustomNav from './../components/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import WebFont from 'webfontloader';
import { keyframes } from 'styled-components';

import { FiSearch } from 'react-icons/fi';


export default function App(){

const [data,setData] = React.useState(null);
const [historicData,setHistoricData] = React.useState(null);
const [query,setQuery] = React.useState("");

const loadData = (tag) => {
  const dbRef = db.ref();
  dbRef.child(tag).get().then((snapshot) => {
    if (snapshot.exists()) {

      if (tag=="coins"){setData( snapshot.val() )}
      else if (tag=="historic"){setHistoricData( snapshot.val() )}

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// const SearchBar = () => (
//   // <form action="/" method="get">
//       <input
//           type="text"
//           value={query}
//           onInput={ e=>setQuery(e.target.value) }
//           id="header-search"
//           placeholder="Search..."
//           name="s" 
//       />
//     /// <button type="submit">Search</button></form>
// );


React.useEffect(() => {

  loadData("coins");
  loadData("historic");

  WebFont.load({
    google: {
      families: ["Nunito"]
    }
  });


  return () => {
    console.log("cleanup")
  }
}, [])

const _filter = (data) => {
if(query.length>0){
  let out = Object.fromEntries( Object.entries(data).filter( ([key,value]) => key.toLowerCase().includes( query.toLowerCase() ) ) );
  return out;
  }
else{return data;}
}


if (data==null || historicData==null){
  return(
        <div className="App">
          <div>
            <p>
              Loading...
            </p>
          </div>
        </div>
  );
}
else{
  return(
  <>
  <input
    type="text"
    value={query}
    onInput={ e=>setQuery(e.target.value) }
    id="header-search"
    placeholder="Search..."
    name="s" 
    autocomplete="off"
  />
  <Accord data={ _filter(data) } histData={historicData} />
  </>
  );
}
}


      // <Accordion style={{width:"60%"}} defaultActiveKey="">
      //     {listItems}
      //   </Accordion>