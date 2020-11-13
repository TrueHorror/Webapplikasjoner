import React from 'react';

const SignUp = () => {
  <>
    <div className="formCenter">
      <form className="formFields" onSubmit={this.handleSubmit}>
        <div className="formField">
          <label htmlFor="name" className="formField__Label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formField__Input"
            placeholder="Full Name..."
            name="name"
          />
        </div>
        <div className="formField">
          <label htmlFor="email" className="formField__Label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="formField__Input"
            placeholder="Email..."
            name="email"
          />
        </div>
        <div className="formField">
          <label htmlFor="password" className="formField__Label">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="formField__Input"
            placeholder="Password..."
            name="password"
          />
        </div>
        <div>
          <button type="button" className="formField__Button mr-20">
            Sign In
          </button>
          <a href="#" className="formField__Link">
            I already have a user
          </a>
        </div>
      </form>
    </div>
  </>;
};

export default SignUp;
