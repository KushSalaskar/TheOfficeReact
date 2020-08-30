import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Cardgrp3 extends Component {
    
    render() { 
        return ( <div className="card-deck">
        <CardDeck>

<Card>

<Card.Img variant="top" src="kelley.jpg" />
<Card.Body>
<div className="card-bg">
  <Card.Title>This is Kelly Kapoor.</Card.Title>
  <Card.Text>
    Kelly Kapoor is incharge of customer service and communication. Kelly is very jolly and loves to chit-chat. 
  </Card.Text>
  </div>
</Card.Body>
<Card.Footer>
  <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
</Card.Footer>

</Card>


<Card>

<Card.Img variant="top" src="pam.jpg" />
<Card.Body>
<div className="card-bg">
  <Card.Title>This is Pam Beesley.</Card.Title>
  <Card.Text>
    Pam Beesley is our receptionist. If you think she's hot now, you should've seen her few years ago.
  </Card.Text>
  </div>
</Card.Body>
<Card.Footer>
  <small className="text-muted card-bg">Brought to you by DunderMifflin.Inc</small>
</Card.Footer>

</Card>


<Card>

<Card.Img variant="top" src="angela.jpg" />
 
<Card.Body>
<div className='card-bg'>
  <Card.Title>This is Angela Martin.</Card.Title>
  <Card.Text>
    Angela is our accountant and she is also pretty intense.
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
 
export default Cardgrp3;