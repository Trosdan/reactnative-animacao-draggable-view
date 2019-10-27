import React from 'react';

import {
  Container,
  ContainerTransaction,
  IconTransaction,
  ContentContainer,
  DataText,
  ValueText,
} from './styles';

export default function CardTransaction() {
  return (
    <Container>
      <ContainerTransaction>
        <IconTransaction />
      </ContainerTransaction>
      <ContentContainer>
        <DataText>25/10/2019 - 08:40</DataText>
        <ValueText>R$ 3,95</ValueText>
      </ContentContainer>
    </Container>
  );
}
