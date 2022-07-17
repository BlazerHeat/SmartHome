import React, { useState } from 'react';
import { toast } from 'react-toastify';
import defaultToastConfig from '../../defaultToastConfig.json';
import { InputWrapper, Btn, Form } from '../';

function SignUpForm({ user, setUser, handleSubmit }) {
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmitWrapper = (event) => {
        event.preventDefault();
        if (usernameError || passwordError) {
            toast.error('Incorrect Data!', defaultToastConfig);
            return;
        }

        handleSubmit();
    };

    const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value });
    };
    const handlePassowrdChange = (e) => {
        setUser({ ...user, password: e.target.value });
    };
    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        if (newUsername.length < 3 || newUsername.length > 12) {
            setUsernameError(
                'Username should be atlest 3 characters long (max 12).'
            );
        } else {
            setUsernameError(false);
        }
        setUser({ ...user, username: e.target.value });
    };
    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        if (newConfirmPassword !== user.password) {
            setPasswordError('Password and Confirm Password are NOT same.');
        } else {
            setPasswordError(false);
        }
        setUser({ ...user, confirmPassword: newConfirmPassword });
    };

    return (
        <Form onSubmit={handleSubmitWrapper}>
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <InputWrapper>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username || ''}
                    required
                    onChange={handleUsernameChange}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email || ''}
                    required
                    onChange={handleEmailChange}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password || ''}
                    required
                    onChange={handlePassowrdChange}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={user.confirmPassword || ''}
                    required
                    onChange={handleConfirmPasswordChange}
                ></input>
            </InputWrapper>

            {(usernameError || passwordError) && (
                <InputWrapper>
                    <p style={{ color: 'red', fontSize: '12px' }}>
                        {usernameError} <br />
                        {passwordError}
                    </p>
                </InputWrapper>
            )}

            <InputWrapper>
                <Btn type="submit">Sign Up</Btn>
            </InputWrapper>
        </Form>
    );
}

export default SignUpForm;
