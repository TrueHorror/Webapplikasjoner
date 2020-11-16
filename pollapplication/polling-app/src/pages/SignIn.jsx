import React, { useState, useEffect } from 'react';

import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledDiv,
  HeaderText,
} from '../styles/Styled';

const SignIn = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const updateValue = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const logIn = () => {};

  return (
    <>
      <HeaderText as="h1">Log In</HeaderText>
      <StyledForm>
        <StyledDiv>
          <StyledInput
            id="email"
            placeholder="Email..."
            name="email"
            value={loginUser.email}
            onChange={updateValue}
          />

          <StyledInput
            id="password"
            placeholder="Password..."
            name="password"
            size="lg"
            value={loginUser.password}
            onChange={updateValue}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledButton primary>Log In</StyledButton>

          <StyledButton primary as="a" href="/signup">
            I don't have a user
          </StyledButton>
        </StyledDiv>
      </StyledForm>
    </>
  );
};

export default SignIn;
