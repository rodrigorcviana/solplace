import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

const CoverCard = () => {
  const [counter, setCounter] = useState(0);

  const getText = () => {
    if (counter === 0) {
      return (
        <text className="text-cover-card">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Urna nulla enim semper augue
          condimentum quis mattis.
        </text>
      )
    }

    if (counter === 1) {
      return (
        <text className="text-cover-card">
          Morbi commodo aliquet risus.
          Curabitur vehicula sapien id massa lobortis iaculis.
          Nulla a ante pharetra, lacinia turpis non, imperdiet lacus.
        </text>
      )
    }

    if (counter === 2) {
      return (
        <text className="text-cover-card">
          Phasellus vehicula elit hendrerit metus consequat, non blandit ipsum pharetra.
          Suspendisse gravida quam at diam mollis, eget volutpat ante pretium.
        </text>
      )
    }
  }

  const getCircles = () => {
    const circles = [];

    for (let i = 0; i < 3; i++) {
      if (i === counter) {
        circles.push(
          <div className="card-circles-lg" key={i} />
        );
      } else {
        circles.push(
          <div className="card-circles-md" key={i} />
        );
      }
    }
    return circles;
  }

  useEffect(() => setTimeout(() => {
    counter > 1 ? setCounter(0) : setCounter(counter + 1) ;
  }, 2000), [counter]);

  return (
    <div className="cover-card">
      <svg className="rectangle-card" />
      <Row>
        <Col>
          {getText()}
        </Col>
        <Col className="circles-wrapper">
          {getCircles()}
        </Col>
      </Row>
    </div>
  )
}

export default CoverCard;
