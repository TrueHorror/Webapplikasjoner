import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  if (user) {
    return <div>{user.name}</div>;
  }
  <>
    <div className="formCenter">
      <form className="formFields" onSubmit={this.handleSubmit}>
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
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
        <div className="formField">
          <button className="formField__Button mr-20">Log In</button>
        </div>
      </form>
    </div>
  </>;
};
