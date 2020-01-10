import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <QRCode value="https://github.com/joaodematejr" size={80} backgroundColor="#FFF" color="#8B10AE" />
      </Code>
      <Nav>
        <NavItem>
          <MaterialCommunityIcons name='help-outline' size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <MaterialCommunityIcons name='person-outline' size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <MaterialCommunityIcons name='credit-card' size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <MaterialCommunityIcons name='smartphone' size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>
          Sair do App
        </SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
