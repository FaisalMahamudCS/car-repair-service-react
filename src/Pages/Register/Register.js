import React from 'react';
import { Row ,Col,Card,Form,Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {

    
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate()
   const navigateLogin=()=>{
       navigate('/login')
   }

if(user){
    navigate('/')
}

   const handleRegister =event =>{
       event.preventDefault();
       const name=event.target.name.value;
       const email=event.target.email.value;
       const password=event.target.password.value;
       console.log(email)
       createUserWithEmailAndPassword(email, password);

   }
    return (
        <div>
            <div className='container w-50 mx-auto'>
          <h4 className='text-center'>Please Register</h4>
           <Form onSubmit={handleRegister}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name </Form.Label>
    <Form.Control type="text"  placeholder="Enter name" name='name' required/>

  </Form.Group>
  
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  placeholder="Enter email" name='email' required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New To Genius Car <Link className='text-danger pe-auto text-decoration-none ' to='/register' onClick={navigateLogin}>Alrady have account ?Login</Link></p>
        </div> 
        </div>
    );
};

export default Register;