import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 1px 8px #00000029;
  border-radius: 8px;
`;

export const AllPollsCard = styled(StyledForm)`
  &:hover {
    box-shadow: 0px 2px 30px #00000029;
  }
`;

export const FrontPageCards = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;
`;

export const StyledButton = styled.button`
  color: darkgreen;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkgreen;
  border-radius: 3px;
  background: white;
  &:hover {
    background: ${(props) => (props.primary ? 'darkgreen' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'darkgreen')};
    cursor: pointer;
  }
  text-decoration: none;
  margin: 10px auto;
`;

export const StyledInput = styled.input`
  border-radius: 3px;
  width: 400px;
  position: relative;
  height: 50px;
  font-size: 2em;
  margin: 10px auto;
  border: ${(props) =>
    props.isInvalid ? '2px solid #ff3634' : ' 2px solid darkgreen'};
`;

export const PollQuestionInput = styled.input`
  border-radius: 3px;
  width: 400px;
  position: relative;
  height: 50px;
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  margin: 10px auto;
  border: 2px solid darkgreen;
`;

export const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputDiv = styled(StyledDiv)`
  border: 1px solid black;
`;

export const ErrorText = styled.p`
  color: ${({ theme: { colors } }) => colors.warning};
  margin: 0 auto;
`;

export const TextAreaStyled = styled.textarea`
  border-radius: 3px;
  width: 400px;
  position: relative;
  height: 50px;
  font-size: 2em;
  margin: 10px auto;
  border: ${(props) =>
    props.isInvalid ? '2px solid #ff3634' : ' 2px solid darkgreen'};
  min-height: 1em;
  height: 7em;
`;

export const TextDiv = styled(StyledDiv)`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  margin-left: 50px;
  margin-bottom: 10px;
`;

export const HeaderText = styled.header`
  margin: 20px auto;
  width: 100%;
  text-align: center;
`;

export const SmallHeader = styled(HeaderText)`
  font-size: ${({ theme: fontSizes }) => fontSizes.md};
`;

export const QuestionText = styled(HeaderText)`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;

export const StyledLink = styled(Link)`
  color: darkgreen;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkgreen;
  border-radius: 3px;
  background: white;
  &:hover {
    background: ${(props) => (props.primary ? 'darkgreen' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'darkgreen')};
    cursor: pointer;
  }
  text-decoration: none;
  margin: 10px auto;
`;
