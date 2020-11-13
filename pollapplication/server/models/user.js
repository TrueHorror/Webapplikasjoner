import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter name'],
      max: ['50', 'Name cannot be over 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Enter Email'],
      unique: true,
      validate: [validator.isEmail, 'The email is not valid'],
    },
    password: {
      type: String,
      required: [true, 'Enter Password'],
      minlength: [8, 'Password must at least be 8 characters'],
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'creator',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
