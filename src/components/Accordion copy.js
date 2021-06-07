import './../App.css';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import LineChart from './hchart.js'



let style1={}
let style2 = {backgroundColor:"#118ab2",padding:"0.5%",borderRadius:"4px"}


const DropdownListGroup = (props) => {

    const InsideListElementData = (props) =>{

        return(
            <div className="DropDownListEl">
                <div className="List-element">
                  <div className="ddle-text">
                    <div className="ddle-text-item"><b>Farm :</b> {props.site}</div>
                    <div className="ddle-text-item"><b>Token earned :</b> {props.token_earned}</div>
                    <div className="ddle-text-item"><b>{props.apry} :</b> {props.apry_val}%</div>
                  </div>

                  <a className="A-tag" href={props.url}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                  </svg>
                  </a>
                </div>
            </div>
        );}

    let INFO = props.info;

    // console.log("here")
    // console.log( INFO )
    // console.log( props._item )
    // console.log(props.histData)

    const listItems = INFO.map((ind_site) =>
    //   <InsideListElement site={site.site} url={site.url} apry_val={ site.apr ? "APR" : "APY" } apry_val={ site.apr ? site.apr : site.apy } />
      (
      <>
      <InsideListElementData site={ind_site.site} url={ind_site.url} token_earned={ind_site.token_earned} apry={ ind_site.apr ? "APR" : "APY" } apry_val={ ind_site.apr ? ind_site.apr : ind_site.apy } />
      <LineChart histData={ props.histData[ ind_site.tag ][ props._item ]  } />
      </>
      )
    );
    
    return(
        <ul className="Dd-list">
            {listItems}
        </ul>
    );

}

const Accordion = (props) => {

  const [clicked, setClicked] = useState(null);


  let data = props.data;
  let coins = Object.keys(data);


  // let resizeSection = () =>{
  //   let f = coins.length;
  //   let h;
    
  //   if (f>10){
  //     let nOi = clicked==null ? 0 : 1;
  //     h = String( f*(46.3 + 5.3*nOi) )+"px"
  //   }
  //   else{h="60vh"}
  //   return h;
  // }

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  let hi =resizeSection()
  
  return (
    <IconContext.Provider value={{ color: 'black', size: '25px' }}>
      <div style={{height: hi }} className="List-section">
      {/* <div className="List-section"> */}
        <div className="Cont">
          {
          
          coins.map((item, index) => {
            return (
              <>
                <div className="Wrap" onClick={() => toggle(index)} key={index}>
                 <div className="Coin-logo">
                    <img
                        alt=""
                        src={data[item].image_uri}
                        width="22"
                        height="22"
                        className="d-inline-block align-top"
                    />
                  {/* <div className="Coin-title"><p><b>{item}</b></p></div> */}
                  <h6 className="Coin-title"><b>{ "jim" } - </b></h6>
                 </div>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <div style={clicked === index ? style2 : style1}>
                {clicked === index ? (
                      <DropdownListGroup info={data[item]["info"]} _item={item} histData={props.histData} />
                ) : null}
                </div>
              </>
            );
          })
          }
        </div>
        <div className="three"></div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;





// const Dropdown = styled.div`
//   color: black;
//   width: 100%;
// // height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// // align-items: center;
// //   border-bottom: 1px solid #00ffb9;
// //   border-top: 1px solid #00ffb9;
// //   p {
// //     font-size: 2rem;
// //   }
// `;