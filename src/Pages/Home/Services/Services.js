import { Button } from 'bootstrap';
import React from 'react';
import { Row ,Col,Card} from 'react-bootstrap';
import './Services.css'


const Services = (props) => {
  const {id,service,picture,description}=props.service;
    return (


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
    );
};

export default Services;