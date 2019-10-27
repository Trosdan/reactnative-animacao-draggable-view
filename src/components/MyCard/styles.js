import styled from 'styled-components';

import { View, Text } from 'react-native';

import { colors, metrics } from '~/styles';

export const Container = styled(View)`
  position: absolute;
  width: ${metrics.screenWidth * 0.8}px;
  height: 150px;
  top: 55;
  left: ${metrics.screenWidth * 0.1}px;
  background-color: ${colors.secondaryLightColor};
  align-items: center;
  border-radius: ${metrics.baseRadius * 5}px;
  elevation: 8px;
`;

export const NameCardText = styled(Text)`
  margin-top: 15px;
  font-size: 28px;
`;

export const ValueText = styled(Text)`
  margin-top: 5px;
  font-size: 38px;
`;
