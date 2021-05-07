import './../App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: red;
  width: 70%;
  margin-top:5%
  margin-bottom:5%
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height:100%;
  background-color: white;
`;

const Wrap = styled.div`
  background: #f1faee;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1%;
  border-radius: 3px;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

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

const DropDownListEl = styled.li`
color: white;
width:96%;
margin:2%
`;


const DropdownListGroup = (props) => {

    const InsideListElement = (props) =>{

        return(
            <DropDownListEl style={{borderTopColor:"white"}}>
                <div className="List-element">
                    <div >Farm : {props.site}</div>
                    <div>Token earned : {props.token_earned}</div>
                    <div>{props.apry} : {props.apry_val}</div>

                    <a href={props.url}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                    </svg>
                    </a>
                
                </div>
            </DropDownListEl>
        );}

    
        console.log("here")
        console.log(props.info)
    
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
      <AccordionSection>
        <Container>
          {coins.map((item, index) => {
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
                  <h6 className="reset-this"><b>{item}</b></h6>
                 </div>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                      <DropdownListGroup info={data[item]["info"]} />
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;