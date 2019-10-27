import styled from 'styled-components';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '~/styles';

export const Container = styled(View)`
  height: 65px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: ${colors.primaryLightColor};
  elevation: 8px;
`;

export const IconPerson = styled(Icon).attrs({
  name: 'account',
  size: 25,
  color: colors.white,
})``;

export const TextHeader = styled(Text)`
  color: ${colors.white};
  font-size: 24;
`;

export const IconSettings = styled(Icon).attrs({
  name: 'dots-vertical',
  size: 25,
  color: colors.white,
})``;
