import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Cardgrp extends Component {
    
    render() { 
        return ( <div className="card-deck">
            <CardDeck>

 <Card>
 
    <Card.Img variant="top" src="firstimg.jpg" />
    <Card.Body>
    <div className="card-bg">
      <Card.Title>Welcome to The Office.</Card.Title>
      <Card.Text>
        This is Dunder Mifflin Scranton branch, our branch manager is Michael Scott and we have many harderworking salesmen who'll be at your service 24*7.
      </Card.Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
    </Card.Footer>
    
  </Card>
  
  
  <Card>
  
    <Card.Img variant="top" src="secondimg.jpg" />
    <Card.Body>
    <div className="card-bg">
      <Card.Title>We are a Paper Supply Company.</Card.Title>
      <Card.Text>
        We supply and provide your every Paper and Stationery need with unsurmountable amount of customer satisfaction.
      </Card.Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
    </Card.Footer>
    
  </Card>
  
  
  <Card>
   
    <Card.Img variant="top" src="thirdimg.jpg" />
     
    <Card.Body>
    <div className='card-bg'>
      <Card.Title>Customer Satisfaction Guaranteed.</Card.Title>
      <Card.Text>
        We may not be able to compete with the big chains, but or customer care is worth the higher price.
      </Card.Text>
      </div>
    </Card.Body>
    
    <Card.Footer>
      <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
    </Card.Footer>
    
  </Card>
</CardDeck>
</div>
         );
    }
}
 
export default Cardgrp;