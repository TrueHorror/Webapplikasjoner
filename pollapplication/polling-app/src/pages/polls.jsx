import React, { useEffect, useState } from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  StyledDiv,
  HeaderText,
  SmallHeader,
  FrontPageCards,
  TextDiv,
  AllPollsCard,
  StyledButton,
  StyledLink,
} from '../styles/Styled';

import { list } from '../utils/pollService.js';

const Polls = (props) => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);

  const [pollId, setPollId] = useState('');

  // const takePoll = (e) => {
  //   e.preventDefault();
  //   props.history.push(`/takePoll/${e.target.id}`);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();

      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <HeaderText as="h1">All Polls</HeaderText>
      {error && <p>{error}</p>}
      <FrontPageCards>
        {polls &&
          polls.map((poll) => (
            <AllPollsCard>
              <StyledDiv>
                <SmallHeader as="h2">{poll.question}</SmallHeader>
                <TextDiv>By: {poll.user.name}</TextDiv>
                <TextDiv>
                  <TimeIcon name="time" />
                  {new Date(poll.createdAt).toDateString()}
                </TextDiv>

                <StyledLink primary to={{ pathname: `/poll/${poll.id}` }}>
                  Take poll
                </StyledLink>
              </StyledDiv>
            </AllPollsCard>
          ))}
      </FrontPageCards>
    </section>
  );
};

export default Polls;
