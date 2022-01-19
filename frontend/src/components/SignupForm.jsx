import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import './SignupForm.scss';

const SignupForm = () => {
  return (
    <Form name="basic" layout="vertical" wrapperCol={{ offset: 0, span: 32 }}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name' }]}>
        <Input autoComplete="true" placeholder="name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email.' },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input autoComplete="true" placeholder="user@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password.' }]}
        hasFeedback
      >
        <Input.Password autoComplete="true" placeholder="6+ characters" />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password.' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password dependencies={['password']} autoComplete="true" placeholder="6+ characters" />
      </Form.Item>
      <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please confirm your phone number.' }]}>
        <Row gutter={24}>
          <Col span={16}>
            <Input type="number" name="phone" placeholder="01012345678" />
          </Col>
          <Col span={8}>
            <Button type="primary" htmlType="button" style={{ width: '100%' }}>
              Send
            </Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item name="otp" rules={[{ required: true, message: 'Please input verification code.' }]}>
        <Input name="otp" type="number" style={{ width: '100%' }} placeholder="000000" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
