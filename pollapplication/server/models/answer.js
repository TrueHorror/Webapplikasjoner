import mongoose from 'mongoose';

const { Schema } = mongoose;

const AnswerSchema = new Schema({
  answerText: {
    type: String,
    required: true,
    minlength: ['1', 'Must have at least one character in answer'],
    maxlength: ['100', 'Cannot have more than 100 characters in answer'],
  },
});

AnswerSchema.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'answer',
  justOne: false,
});

const Answer = mongoose.model('Answer', AnswerSchema);
export default Answer;
