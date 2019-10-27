import styled from 'styled-components';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { metrics, colors } from '~/styles';

export const Container = styled(View)`
  flex-direction: row;
  width: ${metrics.screenWidth * 0.9};
  height: 90px;
  align-items: center;
  border-radius: ${metrics.baseRadius * 2};
  border-width: 1px;
  border-color: ${colors.light};
  background-color: ${colors.white};
  elevation: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ContainerTransaction = styled(View)`
  flex: 0.3;
  align-items: center;
`;

export const IconTransaction = styled(Icon).attrs({
  name: 'arrow-down-thick',
  color: colors.danger,
  size: 40,
})``;

export const ContentContainer = styled(View)`
  flex: 1;
`;

export const DataText = styled(Text)`
  font-size: 18;
`;

export const ValueText = styled(Text)`
  font-size: 24;
`;
