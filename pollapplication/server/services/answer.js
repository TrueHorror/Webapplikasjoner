import Answers from '../models/answer.js';

export const getAnswerById = async (id) => Answers.findById(id);

export const listAnswers = async () => Answers.find();

export const createAnswer = async (data) => Answers.create(data);

export const updateAnswer = async (id, data) =>
  Answers.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: false,
    useFindAndModify: false,
  });

export const removeAnswer = async (id) => {
  const answer = await Answers.findById(id);
  answer.remove();
};
