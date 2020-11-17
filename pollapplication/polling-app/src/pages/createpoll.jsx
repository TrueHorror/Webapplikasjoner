import React, { useState } from 'react';
import { create } from '../utils/pollService.js';

import {
  StyledButton,
  StyledForm,
  HeaderText,
  QuestionText,
  PollQuestionInput,
} from '../styles/Styled';

const CreatePoll = () => {
  const [pollData, setPollData] = useState(null);

  const updatePollData = (e) => {
    setPollData({ question: e.target.value, user: '5faf1d9a7812854a4cf22d79' }); // hardkodet ID, får ikke til å ha user state eller lignende.
    // Fikk ikke hentet ut user id
  };

  const savePoll = (e) => {
    e.preventDefault();
    if (pollData.question !== '') {
      const question = pollData;
      console.log(question);
      create(question);
    } else {
      console.log('ooopsie!');
    }
  };

  return (
    <section>
      <HeaderText as="h1">Create Poll</HeaderText>
      <QuestionText>Type your question:</QuestionText>
      <StyledForm>
        <PollQuestionInput name="question" onChange={updatePollData} />
        <StyledButton primary onClick={savePoll}>
          Create
        </StyledButton>
      </StyledForm>
    </section>
  );
};

export default CreatePoll;
