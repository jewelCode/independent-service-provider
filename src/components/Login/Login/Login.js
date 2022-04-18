import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import google from '../../../resources/google.png'



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    if (user) {
        navigate(from, { replace: true })
    }


    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }
    if (user1) {
        navigate("/home")
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast("Email Sent")
        }
        else {
            toast("please enter your email address")
        }
    }
    return (
        <div className="w-50 mx-auto border p-5 mt-5" style={{ backgroundColor: '#0D63A5' }}>
            <h2 className="text-light">Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-light">Email address: </Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-light">Password: </Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
                <br />
                <p className="text-light">Don't Have an Account? <Link to="/register" className="text-light">Please Register</Link></p>
                <p className="text-light">Forgot Password? <button className="btn btn-warning" onClick={handleResetPassword}>Reset Password</button></p>
            </Form>
            {errorElement}
            <div className="text-center mt-5">
                <Button variant="outline-warning" onClick={() => signInWithGoogle()}><img src={google}></img>Sign In With Google</Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;