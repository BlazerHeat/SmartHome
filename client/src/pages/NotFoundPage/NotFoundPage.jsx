import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Btn } from '../../components';
import { ErrorCenterDiv, HeadingDiv } from './NotFoundPage.styled';
import { BiError } from 'react-icons/bi';

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <ErrorCenterDiv>
            <HeadingDiv>
                <h1>404</h1>
                <h2>
                    Page Not <br />
                    Found! <BiError />
                </h2>
            </HeadingDiv>
            <p>
                The page you were looking for was not found. Please verify the
                link/URL or try starting back at our home page.
            </p>
            <Btn
                onClick={() => {
                    navigate('/');
                }}
            >
                Home Page
            </Btn>
        </ErrorCenterDiv>
    );
}

export default NotFoundPage;
