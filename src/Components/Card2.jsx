import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Cardgrp2 extends Component {
    
    render() { 
        return ( 
            <div className="card-deck">
            <CardDeck>

 <Card>
 
    <Card.Img variant="top" src="michael.jpg" />
    <Card.Body>
    <div className="card-bg">
      <Card.Title>This is Michael Scott.</Card.Title>
      <Card.Text>
        Michael is the branch manager of DunderMifflin Scranton. Michael is one of the most profitable branch manager, as his branch continues to perform regardless.
      </Card.Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
    </Card.Footer>
    
  </Card>
  
  
  <Card>
  
    <Card.Img variant="top" src="jim.jpg" />
    <Card.Body>
    <div className="card-bg">
      <Card.Title>This is Jim Halpert.</Card.Title>
      <Card.Text>
        Jim is smart, good-looking but also smug and arrogant. Michael can spend a day with a project and Jim will do it in 45mins, that'll tell you something about him.
      </Card.Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
    </Card.Footer>
    
  </Card>
  
  
  <Card>
   
    <Card.Img variant="top" src="dwight.jpg" />
     
    <Card.Body>
    <div className='card-bg'>
      <Card.Title>This is Dwight Shrute.</Card.Title>
      <Card.Text>
        Dwight is a bit intense at times but he is the best salesman we've got! He is loyal, hardworking and he also beat The Computer.
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
 
export default Cardgrp2;