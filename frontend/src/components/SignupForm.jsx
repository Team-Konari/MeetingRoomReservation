import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import './SignupForm.scss';

const SignupForm = () => {
  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="이메일" name="email" rules={[{ required: true, message: '이메일을 입력하세요.' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="비밀번호 확인"
        name="password-check"
        rules={[{ required: true, message: '비밀번호를 확인해주세요.' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="휴대전화" name="phone" rules={[{ required: true, message: '휴대폰 번호를 입력하세요.' }]}>
        <InputNumber style={{ width: '100%' }} maxLength={11} />
      </Form.Item>
      <Form.Item label="인증번호" name="otp" rules={[{ required: true, message: '발송된 인증번호를 입력하세요.' }]}>
        <InputNumber style={{ width: '100%' }} maxLength={6} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
