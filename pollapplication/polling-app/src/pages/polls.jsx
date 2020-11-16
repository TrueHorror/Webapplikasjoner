import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Button,
  Textarea,
} from '@chakra-ui/core';

import { list } from '../utils/pollService.js';

const Polls = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const takePoll = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      console.log(data, error);
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const idCounter = () => {
    setCount((c) => c + 1);
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        All Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box p="6" key={poll.id} onClick={takePoll}>
              <Box
                p="6"
                mt="1"
                fontWeight="semibold"
                lineHeight="tight"
                isTruncated
                borderWidth="1px"
                borderRadius="lg"
              >
                <Heading mb={2} size="sm">
                  {poll.question}
                </Heading>
                <Text fontSize="lg" mb={2}>
                  By: {poll.user.name}
                </Text>
                <Text fontSize="md" mb={2}>
                  <Icon name="time" mr={2} />
                  {new Date(poll.createdAt).toDateString()}
                </Text>
              </Box>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Polls;
