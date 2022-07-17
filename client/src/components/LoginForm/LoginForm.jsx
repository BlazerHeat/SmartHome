import React from 'react';
import { Form, InputWrapper, Btn } from '../';

function LoginForm({ user, setUser, handleSubmit }) {
    const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setUser({ ...user, password: e.target.value });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p>Please fill in this form to login!</p>
            <hr />

            <InputWrapper>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={user.email || ''}
                    onChange={handleEmailChange}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={user.password || ''}
                    onChange={handlePasswordChange}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <Btn type="submit">Login</Btn>
            </InputWrapper>
        </Form>
    );
}

export default LoginForm;
