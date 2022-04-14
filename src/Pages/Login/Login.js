import React,  { useRef }  from 'react';
import { Row ,Col,Card,Form,Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js'

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


  const emailRef=useRef('');
  const passwordRef=useRef('')
  const navigate=useNavigate();
  const handleSubmit =event =>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
  }
  if(user){
    navigate('/');
  }
  const navigateRegister =event =>{
 navigate('/register');
  }
    return (
        <div className='container w-50 mx-auto'>
          <h4 className='text-center'>Plase Login</h4>
           <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New To Genius Car <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
   
   <button className='btn btn-success' onClick={()=>signInWithGoogle()}>Sign in with google</button>

        </div>
    );
};

export default Login;