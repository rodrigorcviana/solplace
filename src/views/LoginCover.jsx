import React from 'react';
import { Row, Col } from 'antd'
import worker from '../img/PNG.png'
import array from '../img/array.svg'

const LoginCover = () => {
  return (
    <div className='login-cover'>
      <Row type="flex" align="middle" justify="center" className="cover-text">
        <img src={array} alt="" />
        <h1>Viabilidade e confiança <br/> para o seu negócio</h1>
      </Row>
      <Row className='login-cover-row'>
        <img src={worker} alt=""/>
      </Row>
    </div>
  )
}

export default LoginCover;