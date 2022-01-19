import React from 'react';
import SignupForm from 'components/SignupForm';
import { DesktopOrTablet } from 'utils/MediaQuery';
import { Link } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="container">
      <DesktopOrTablet>
        <div className="info-container">
          <div className="black_overlay"></div>
          <h2 className="info-title">CREATE ACCOUNT</h2>
          <p className="info-detail">
            Conference Room Reservation System
            <br />
            Our services enable you to use your meetings and conference rooms more efficiently.
          </p>
        </div>
      </DesktopOrTablet>
      <div className="form-container">
        <h2 className="form-title">Join Us</h2>
        <p className="form-info">Create Your Accounts.</p>
        <SignupForm />
        <div className="link-container">
          Already a member?{' '}
          <Link to="/accounts/login">
            <b>Login</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
