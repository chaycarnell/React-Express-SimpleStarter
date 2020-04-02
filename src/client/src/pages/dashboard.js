import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Content = styled('div')`
  height: 20px;
  width: 100%;
`;

const Render = () => {
  const [status, setStatus] = useState(undefined);

  const getStatus = () => {
    axios.get('http://localhost:3001/api/example/test').then(result => {
      setStatus(result.data.message);
    });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <>
      <Content>{status}</Content>
    </>
  );
};

export default Render;
