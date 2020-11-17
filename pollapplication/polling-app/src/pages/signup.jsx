import React, { useState } from 'react';
import {
  ErrorText,
  StyledForm,
  StyledInput,
  StyledDiv,
  StyledButton,
  HeaderText,
} from '../styles/Styled';
import { create } from '../utils/userService.js';

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [passwordRep, setPasswordRep] = useState('');
  const [invalidPass, setInvalidPass] = useState(false);

  const updateValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createUser = (e) => {
    e.preventDefault();

    if (!user) {
      console.log('you done goofed');
    } else if (user.password === passwordRep) {
      setInvalidPass(false);
      create(user);
      props.history.push('/');
    } else {
      setInvalidPass(true);
    }
  };

  const passwordRepeat = (e) => {
    setPasswordRep(e.target.value);
  };

  return (
    <>
      <HeaderText as="h1">Sign Up</HeaderText>
      <StyledForm>
        <StyledDiv>
          <StyledInput
            value={user.name}
            id="name"
            placeholder="Full Name..."
            name="name"
            onChange={updateValue}
          />

          <StyledInput
            value={user.email}
            id="email"
            placeholder="Email..."
            name="email"
            onChange={updateValue}
          />

          <StyledInput
            value={user.password}
            id="password"
            placeholder="Password..."
            name="password"
            onChange={updateValue}
          />

          {invalidPass ? (
            <>
              <ErrorText>Passwords needs to be equal!</ErrorText>
              <StyledInput
                isInvalid
                id="passwordRep"
                placeholder="Repeat Password..."
                name="passwordRep"
                value={passwordRep}
                onChange={passwordRepeat}
              />
            </>
          ) : (
            <StyledInput
              id="passwordRep"
              placeholder="Repeat Password..."
              name="passwordRep"
              value={passwordRep}
              onChange={passwordRepeat}
            />
          )}
        </StyledDiv>
        <StyledDiv>
          <StyledButton primary onClick={createUser}>
            Create User
          </StyledButton>

          <StyledButton primary as="a" href="/signin">
            I already have a user.
          </StyledButton>
        </StyledDiv>
      </StyledForm>
    </>
  );
};

export default SignUp;
