import styled from 'styled-components';
import { View, FlatList, Animated } from 'react-native';
// import Animated from 'react-native-reanimated';

import { metrics, colors } from '~/styles';

export const Container = styled(Animated.View)`
  position: absolute;
  flex: 1;
  align-items: center;
  width: 100%;
  height: ${300 + 145}px;
  top: ${metrics.screenHeight - 170};
  background-color: white;
  border-top-left-radius: ${metrics.baseRadius * 5};
  border-top-right-radius: ${metrics.baseRadius * 5};
  elevation: 4px;
`;

export const Header = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const PushBar = styled(View)`
  background-color: ${colors.light};
  border-radius: ${metrics.baseRadius * 3};
  width: 100px;
  height: 5px;
`;

export const TransactionList = styled(Animated.FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})``;
