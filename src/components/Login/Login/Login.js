import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    if (user) {
        navigate(from, { replace: true })
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
        <div className="w-50 mx-auto border p-5 mt-5">
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
                <br />
                <p>Don't Have an Account?<Link to="/register"> Please Register</Link></p>
                <p>Forgot Password? <button onClick={handleResetPassword}>Reset Password</button></p>
            </Form>
            <Button onClick={() => signInWithGoogle()}>Google Sign In</Button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;