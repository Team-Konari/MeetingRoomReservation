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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>
      </DesktopOrTablet>
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <p className="form-info">Create Your Accounts.</p>
        <SignupForm />
        <div>
          Already a member? <Link to="/accounts/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
