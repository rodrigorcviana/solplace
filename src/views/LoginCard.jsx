import React from 'react';
import { Card, Input, Row, Form, Button, Col } from 'antd';
import { Link } from 'react-router-dom';

const LoginCard = () => {

  const onFinish = () => {}

  return (
    <Card className="login-card" type="flex" justify="center" align="middle">
      <h1 className="login-card-title"> Login </h1>
      <Form
        layout="vertical"
        name="loginform"
        onFinish={onFinish}
      >
        <Row type="flex" justify="center" align="middle">
          <Col span={20}>
            <Form.Item
              label={
                <div className="login-card-input-label label-email">E-mail</div>
              }
              name="email"
              colon={false}
              rules={[{
                required: true,
                message: 'Digite o email do usuário'
              }]}
            >
              <Input type="email" name="email" id="email" className="login-card-input email" />
            </Form.Item>
          </Col>
        </Row>

        <Row type="flex" justify="center" align="middle">
          <Col span={20}>
            <Form.Item
              label={<div className="login-card-input-label label-password">Senha</div>}
              name="password"
              colon={false}
              rules={[{ required: true, message: 'Digite a senha' }]}
            >
              <Input
                name="password"
                type="password"
                id="password"
                className="login-card-input password"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row type="flex" justify="center" allign="middle" gutter={8}>
          <Col span={20}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-card-btn button-text"
            >
              <h3>Entrar</h3>
            </Button>
          </Col>
        </Row>

        <div className="login-card-options-wrapper">
            <Input type="checkbox" className="login-card-checkbox"/>
            <Link to="/register">
              <span className="login-card-options-link options-connected">Mantenha-me conectado</span>
            </Link>
            <Link to="/resetpassword">
              <span className="login-card-options-link options-forgot">Esqueci minha senha</span>
            </Link>
          </div>
      </Form>
    </Card>
  );
}

export default LoginCard;