import React from 'react';

import { Container, NameCardText, ValueText } from './styles';

export default function MyCard() {
  return (
    <Container>
      <NameCardText>Jordinha</NameCardText>
      <ValueText>R$ 58,65</ValueText>
    </Container>
  );
}
