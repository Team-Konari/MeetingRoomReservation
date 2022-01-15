import React from 'react';
import SignupForm from 'components/SignupForm';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="accounts">
      <div className="accounts-form">
        <h1>회원가입</h1>
        <SignupForm />
      </div>
      <div className="accounts-info">class</div>
    </div>
  );
};

export default Signup;
