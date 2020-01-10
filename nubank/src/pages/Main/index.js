import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';


import { Container, Content, Card, CardHeader, CardContent, Title, Desciption, CardFooter, Annotation } from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  //FUNÇÃO DOS GESTO
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      //TOTAL DE PIXO
      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}>

        </Menu>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
            <CardHeader>
              <MaterialCommunityIcons name='attach-money' size={28} color='#666' />
              <MaterialCommunityIcons name='visibility-off' size={28} color='#666' />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Desciption>R$ 197.611,65</Desciption>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transfêrencia de R$ 197.611,65 recebida de João Edemar Dematé Junior hoje as 12:00H
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}

