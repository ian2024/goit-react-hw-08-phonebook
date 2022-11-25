import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "redux/phonebook/auth/auth-operations";
import { Container, Form, Label } from "./Login.styled";


export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        
        setPassword('');
        setEmail('');
    };

    return (
        <Container>
                    <h2>Login Form</h2>

        <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label>
                    Email
                    <input type="email" name='email' value={email} onChange={handleChange} pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" required/>
                </Label>
                <Label>
                    Password
                    <input type="password" name='password' value={password} onChange={handleChange} />
                </Label>
                <Link to='/registration'>
                    Create new Account
                </Link>
                <button type="submit">
                    Log In
                </button>
                
            </Form>
            
        </Container>
    )
}