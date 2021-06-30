import React from 'react';
import styled, {css} from 'styled-components/native';
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const whiteText = css`
color: #f00;
font-size: 14px;
font-weight: 600;
`;

const MyBoldTextComponent = styled.Text`
${whiteText}
font-weight: 600;
font-size: 36px;
`;

const App = () => {
  return (
    <Container>
      <Button title="Hanbit"/>
      <Button title="React Native"/>
    </Container>
  );
};

export default App;
