import React, { useEffect, useState } from 'react';
import { WarningIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import { get, update, list } from '../utils/pollService.js';
import { create } from '../utils/answerService.js';

import {
  StyledButton,
  StyledForm,
  HeaderText,
  QuestionText,
  PollQuestionInput,
  ErrorText,
  StyledDiv,
} from '../styles/Styled';

const TakePoll = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState({
    answerText: '',
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const { id } = useParams();
  const pollId = '5fb040f116c56f4860f6ee82';

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(id);
      console.log(data);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const updateAnswer = (event) => {
    setAnswer({ [event.target.name]: event.target.value });
  };

  const saveAnswer = (e) => {
    console.log(e.target.value);
    if (answer.answerText === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      update(pollId, create(answer)); // Does not work
    }
  };

  return (
    <section>
      {polls && (
        <StyledDiv>
          <HeaderText as="h1">{polls.question}</HeaderText>
          <QuestionText>What is you answer?</QuestionText>
          <StyledForm>
            {isEmpty && (
              <ErrorText fontSize="sm" color="red.500">
                <WarningIcon mr={2} />
                Please type an answer!
              </ErrorText>
            )}
            <PollQuestionInput
              value={answer.answerText}
              name="question"
              onChange={updateAnswer}
            />
            <StyledButton primary onClick={saveAnswer}>
              Create
            </StyledButton>
          </StyledForm>
        </StyledDiv>
      )}
    </section>
  );
};

export default TakePoll;
