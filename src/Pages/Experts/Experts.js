import React from 'react';
import { Row ,Col,Card} from 'react-bootstrap';

const Experts = (props) => {
    const {id,service,picture,description}=props.service;
    return (
        <div>
             <div className=''>


 
<Col>
  <Card className='h-100'>
    <Card.Img className='img-fluid ' id='img' variant="top" src={picture} />
    <Card.Body>
      <Card.Title className="text-center">{service}</Card.Title>
      <Card.Text>
   {description}

      </Card.Text>
     
    </Card.Body>
  </Card>
</Col>


    
    </div>
        </div>
    );
};

export default Experts;