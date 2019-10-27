import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import MyCard from '~/components/MyCard';
import Transaction from '~/components/Transaction';

export default function Home() {
  return (
    <Container>
      <Header />
      <MyCard />
      <Transaction />
    </Container>
  );
}
