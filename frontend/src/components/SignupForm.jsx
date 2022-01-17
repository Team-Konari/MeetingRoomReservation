import React, { useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import './SignupForm.scss';

const SignupForm = () => {
  return (
    <Form name="basic" layout="vertical" wrapperCol={{ offset: 0, span: 32 }}>
      <Form.Item label="email" name="email" rules={[{ required: true, message: '이메일을 입력하세요.' }]}>
        <Input autoComplete="true" placeholder="이메일 입력" />
      </Form.Item>
      <Form.Item label="password" name="password" rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}>
        <Input.Password autoComplete="true" placeholder="비밀번호 입력" />
      </Form.Item>
      <Form.Item
        label="password-check"
        name="password-check"
        rules={[{ required: true, message: '비밀번호를 확인해주세요.' }]}
      >
        <Input.Password autoComplete="true" placeholder="비밀번호 확인" />
      </Form.Item>
      <Form.Item label="phone" name="phone" rules={[{ required: true, message: '휴대폰 번호를 입력하세요.' }]}>
        <InputNumber style={{ width: '100%' }} maxLength={11} placeholder="휴대전화(-제외)" />
      </Form.Item>
      <Form.Item label="otp" name="otp" rules={[{ required: true, message: '발송된 인증번호를 입력하세요.' }]}>
        <InputNumber style={{ width: '100%' }} maxLength={6} placeholder="123456" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" placeholder="123" block>
          Create account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
