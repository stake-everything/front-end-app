import { ListGroup, Accordion, Button, Card, useAccordionToggle } from 'react-bootstrap';
import './../App.css';
import React from 'react';
/*

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>

*/



const ListElement = (props) => {

    const [up,setUp]=React.useState(true)

    const CustomButton = () =>{

        if (up==true){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
            );
        }
        else if (up==false){
            return(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
            );   
    }
    }

    const InsideListElement = (props) =>{

        return(
            <ListGroup.Item style={{borderTopColor:"white"}}>

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
            </ListGroup.Item>
        );}
    
    let INFO = props.info;
    let TITLE = props.title;

    const listItems = INFO.map((ind_site) =>
    //   <InsideListElement site={site.site} url={site.url} apry_val={ site.apr ? "APR" : "APY" } apry_val={ site.apr ? site.apr : site.apy } />
      <InsideListElement site={ind_site.site} url={ind_site.url} token_earned={ind_site.token_earned} apry={ ind_site.apr ? "APR" : "APY" } apry_val={ ind_site.apr ? ind_site.apr : ind_site.apy } />
    );

    return(
            <Card >
                <Card.Header class="Card">
                <div className="Coin-logo">
                    <img
                        alt=""
                        src={props.image}
                        width="22"
                        height="22"
                        className="d-inline-block align-top"
                    />
                    <div className="Coin-title"><p><b>{TITLE}</b></p></div>
                </div>
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey={props.tag} onClick={()=>setUp(false)}>
                    <CustomButton />
                    </Accordion.Toggle>
                
                </Card.Header>

                <Accordion.Collapse eventKey={props.tag} onClick={()=>setUp(true)}>
                    <ListGroup>
                        {listItems}
                    </ListGroup>
                </Accordion.Collapse>
            </Card>

    );
}


const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = React.useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  export default function App(props) {
    
    
    let data =props.data;
    
    let coins = Object.keys(data);
    
    const listItems = coins.map((ind_coin) => 
    <ListElement tag={ String( coins.indexOf(ind_coin)) } image={data[ind_coin]["image_uri"]} title={ind_coin} info={data[ind_coin]["info"]} />
  );
    return (
     <Accordion style={{width:"60%"}} defaultActiveKey="">
        {props.listItems}
      </Accordion>
    );
  }
  