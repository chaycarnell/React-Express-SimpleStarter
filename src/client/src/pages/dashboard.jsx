import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './dashboard.styles';

const Render = () => {
  const [serverMessage, setServerMessage] = useState(undefined);

  const getStatus = () => {
    axios.get(`${process.env.SERVER_URL}/api/public/example`).then((result) => {
      setServerMessage(result.data.message);
    });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <S.Container>
      <S.Content>
        The response from the Express server is: {serverMessage}
      </S.Content>
    </S.Container>
  );
};

export default Render;
