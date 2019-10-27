import React, { useState, useEffect, useRef } from 'react';
// import Animated from 'react-native-reanimated';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Header, PushBar, TransactionList } from './styles';

import CardTransaction from '~/components/CardTransaction';

const list = ['1', '2', '3', '4', '5', '6', '7'];

export default function Transaction() {
  let offset = 0;
  let opened = false;

  const transactionListRef = useRef();

  const [isOpened, setIsOpned] = useState(false);
  const transactionY = new Animated.Value(0);

  function animatedEvent(event) {
    transactionY.setValue(event.nativeEvent.translationY);
  }

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY <= -50) {
        opened = true;
      } else {
        transactionY.setOffset(0);
        transactionY.setValue(offset);
        offset = 0;
      }

      Animated.timing(transactionY, {
        toValue: opened ? -300 : 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -300 : 0;
        transactionY.setOffset(offset);
        transactionY.setValue(0);
      });
    }
  }

  return (
    <Container
      style={{
        transform: [
          {
            translateY: transactionY.interpolate({
              inputRange: [-300, 0, 200],
              outputRange: [-300, 0, 50],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}
    >
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Header>
          <PushBar />
        </Header>
      </PanGestureHandler>
      <TransactionList
        ref={transactionListRef}
        data={list}
        keyExtractor={item => String(item)}
        renderItem={CardTransaction}
      />
    </Container>
  );
}
