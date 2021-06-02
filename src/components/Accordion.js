import './../App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import useWindowSize from './../hooks/useWindowSize.js';


// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   background-color: red;
//   width: 70%;
//   height:100%;
//   max-width: 700px;
//   min-width: 650px;
//   //margin: 5%;
// `;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  //background-color: blue;
  overflow: auto;
  padding: 2%;
`;

const Wrap = styled.div`
  //background-color: #f1faee;
  background-color: #118ab2;
  color: black;
  display: flex;
  max-height: 40px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1%;
  margin-top: 1%;
  border-radius: 3px;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const DropDownListEl = styled.li`
color: white;
//width: 100%;
padding: 1%;
margin: 1%;
border-radius: 4px;
// background-color: #ef476f;
background-color: #0e6e8e;
//background-color: #f1faee;
//background-color: #8ecae6;
`;


let style1 = {}
let style2 = {backgroundColor:"#118ab2",padding:"0.5%",borderRadius:"4px"}
let section_style={
  display: "flex",
  flexDirection:"column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  //backgroundColor: "red",
  width: "70%",
  height:"100%",
  maxWidth: "700px",
  minWidth: "450px",
  marginTop: "2%",
  marginBottom: "2%",
}


const DropdownListGroup = (props) => {

    const InsideListElement = (props) =>{

        return(
            <DropDownListEl style={{}}>
                <div className="List-element">
                  <div className="ddle-text">
                    <div className="ddle-text-item"><b>Farm :</b> {props.site}</div>
                    <div className="ddle-text-item"><b>Token earned :</b> {props.token_earned}</div>
                    <div className="ddle-text-item"><b>{props.apry} :</b> {props.apry_val}</div>
                  </div>

                  <a className="A-tag" href={props.url}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                  </svg>
                  </a>
                
                </div>
            </DropDownListEl>
        );}

    let INFO = props.info;

    const listItems = INFO.map((ind_site) =>
    //   <InsideListElement site={site.site} url={site.url} apry_val={ site.apr ? "APR" : "APY" } apry_val={ site.apr ? site.apr : site.apy } />
      <InsideListElement site={ind_site.site} url={ind_site.url} token_earned={ind_site.token_earned} apry={ ind_site.apr ? "APR" : "APY" } apry_val={ ind_site.apr ? ind_site.apr : ind_site.apy } />
    );
    
    return(
        <ul className="Dd-list">
            {listItems}
        </ul>
    );

}

const Accordion = (props) => {

  const size = useWindowSize();
  const [clicked, setClicked] = useState(false);

  let data = props.data;
  let coins = Object.keys(data);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  
  return (
    <IconContext.Provider value={{ color: 'black', size: '25px' }}>
      <div style={section_style}>
        <Container>
          {
          
          coins.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                 <div className="Coin-logo">
                    <img
                        alt=""
                        src={data[item].image_uri}
                        width="22"
                        height="22"
                        className="d-inline-block align-top"
                    />
                  {/* <div className="Coin-title"><p><b>{item}</b></p></div> */}
                  <h6 className="Coin-title"><b>{item}</b></h6>
                 </div>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                <div style={clicked === index ? style2 : style1}>
                {clicked === index ? (
                      <DropdownListGroup info={data[item]["info"]} />
                ) : null}
                </div>
              </>
            );
          })
          }
        </Container>
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