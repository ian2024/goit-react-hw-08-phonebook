import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/phonebook/auth/auth-operations';
import { Button, Container, Form, Input, Label } from './RegisterForm.styled';


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const input = {
        name: setName,
        email: setEmail,
        password: setPassword,
    };

    const handleInput = e => {
        input[e.target.name](e.target.value.trim());
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(password) {
            const userInfo = {
                name,
                email,
                password,
            };
            
            dispatch(register(userInfo));
            setName('');
            setEmail('');
            setPassword('');
        } else {
            toast.error('Try again.');
        }
    };

    return (
        <Container>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input type="text" value={name} name='name' required onChange={handleInput} />
                </Label>
                <Label>
                    Email
                    <Input type="email" value={email} name='email' required onChange={handleInput} pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"/>
                </Label>
                <Label>
                    Password
                    <Input type="number" value={password} name='password' minLength={4} required onChange={handleInput} />
                </Label>
                <Link to='/login'>
                    Already have an account? Sign in
                </Link>
                <Button type='submit'>
                    Sign in
                </Button>
            </Form>{''}
        </Container>
    )
}