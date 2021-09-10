import React, { useState, useEffect } from 'react';
import { Card, Input, Row, Form, Button, Col, message } from 'antd';
import LoginCard from './LoginCard';
import LoginCover from './LoginCover';
import CoverCard from './CoverCard'
import logo from '../img/logo.svg';
import worker from '../img/PNG.png';
import backgroundFrame from '../img/background-frame.svg'


const LoginPage = () => {
  return (
    <div className="login-page">
      <Col>
        <div>
          <LoginCover />
          <CoverCard />
        </div>
      </Col>
      <Col type="flex" justify="center" align="middle">
        <Row>
          <Col>
            <img src={logo} alt="" className="login-page-logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="login-page-title">Controle de Acesso</h1>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" className="login-card-wrapper">
          <LoginCard />
        </Row>
      </Col>
    </div>
  )
}

export default LoginPage;