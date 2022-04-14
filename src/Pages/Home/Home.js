
import React from 'react';
import useService from '../../Hooks/useService';
import Services from './Services/Services';
import { Row ,Container} from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import useExpert from '../../Hooks/useExpert';
import Experts from '../Experts/Experts';

const Home = () => {
  const  [services,setServices]=useService();
  const [expert,setExpert]=useExpert();
    return (
        <div>
          <Header></Header>
          <Container>
            <h4 className='text-center'>Services</h4>
          <div className='service'>
          <Row xs={1} md={3} className="g-4">
          {/* {Array.from({ length: 4}).map((_, id) => ( */}
           {
             services.map(service=>< Services  service={service} key={service.id}></Services>)
           }
          
        

           </Row>
          </div>
          </Container>


          <Container>
          <div className='expert'>
          <h4 className='text-center'>Experts</h4>
          <Row xs={1} md={3} className="g-4">
          {/* {Array.from({ length: 4}).map((_, id) => ( */}
           {
             expert.map(expert=>< Experts  expert={expert} key={expert.id}></Experts>)
           }
          
        

           </Row>
          </div>
          </Container>

        </div>
    );
};

export default Home;


