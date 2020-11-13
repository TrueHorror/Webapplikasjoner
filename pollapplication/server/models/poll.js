import mongoose from 'mongoose';
import slugify from 'slugify';
import User from './user.js';
import Answer from './answer.js';

const { Schema } = mongoose;

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Poll question must be more than 3 characters'],
      max: ['100', 'Poll question cannot be more than 100 characters'],
    },
    slug: String,
    answer: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Answer',
        default: 'No Answer',
      },
    ],
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

pollSchema.pre('save', function (next) {
  this.slug = slugify(this.question, { lower: true });
  next();
});

export default mongoose.model('Poll', pollSchema);
