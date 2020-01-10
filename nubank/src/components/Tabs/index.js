import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";

import { Container, TabContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
      <TabContainer>
        <TabItem>
          <MaterialCommunityIcons name='person-add' size={24} color='#FFF' />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <MaterialCommunityIcons name='chat-bubble-outline' size={24} color='#FFF' />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <MaterialCommunityIcons name='arrow-downward' size={24} color='#FFF' />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <MaterialCommunityIcons name='arrow-upward' size={24} color='#FFF' />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <MaterialCommunityIcons name='lock' size={24} color='#FFF' />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabContainer>
    </Container>
  );
}
