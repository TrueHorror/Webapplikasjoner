import React, { useEffect, useState } from 'react';
import { WarningIcon, TimeIcon } from '@chakra-ui/icons';
import { list, update } from '../utils/pollService.js';
import { create, listAnswer } from '../utils/answerService.js';
import {
  StyledButton,
  StyledForm,
  StyledDiv,
  HeaderText,
  TextAreaStyled,
  SmallHeader,
  ErrorText,
  FrontPageCards,
  TextDiv,
} from '../styles/Styled';

const FrontPage = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState({
    answerText: '',
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const [pollId, setPollId] = useState('');

  const [answerData, setAnswerData] = useState(null);

  const updateAnswer = (event) => {
    setAnswer({ [event.target.name]: event.target.value });
  };

  const saveAnswer = (e) => {
    console.log(e.target.value);
    if (answer.answerText === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      console.log(e.target.id); // poll id lolxd
      setPollId(e.target.id);
      update(pollId, create(answer));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      console.log(data, error);
      if (error) {
        setError(error.statuscode);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await listAnswer();
      console.log(data, error);
      if (error) {
        setError(error.statuscode);
      } else {
        setAnswerData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <HeaderText mb={3} as="h1" size="md">
        Front page
      </HeaderText>
      {error && <p>{error}</p>}
      <FrontPageCards>
        {polls &&
          polls.map((poll) => (
            <StyledForm>
              <StyledDiv p="6" as="article">
                <SmallHeader mb={2} as="h2" size="sm">
                  {poll.question}
                </SmallHeader>
                {isEmpty && (
                  <ErrorText fontSize="sm" color="red.500">
                    <WarningIcon mr={2} />
                    Please type an answer!
                  </ErrorText>
                )}
                <StyledDiv>
                  <TextAreaStyled
                    placeholder="Type you answer here..."
                    name="answerText"
                    size="lg"
                    onChange={updateAnswer}
                  />
                </StyledDiv>
                <TextDiv>By: {poll.user.name}</TextDiv>
                <TextDiv>
                  <TimeIcon name="time" mr={2} />
                  {new Date(poll.createdAt).toDateString()}
                </TextDiv>
                <StyledButton primary id={poll.id} onClick={saveAnswer}>
                  Save
                </StyledButton>
              </StyledDiv>
            </StyledForm>
          ))}
      </FrontPageCards>
      <StyledDiv>
        <StyledButton primary as="a" href="/createpoll">
          Create new poll
        </StyledButton>
        <StyledButton primary as="a" href="/polls">
          View all polls
        </StyledButton>
      </StyledDiv>
    </section>
  );
};

export default FrontPage;
