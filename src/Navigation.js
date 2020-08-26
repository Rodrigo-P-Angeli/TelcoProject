import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'
import Grafico from './Screens/Grafico'
import CommonStyles from './CommonStyles';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default class App extends Component {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    screenOptions={{
                        headerTransparent: true,
                        headerStyle: {
                            height: 50,

                        },
                        headerTintColor: '#fff',
                    }}
                    initialRouteName='Alarmes'>
                    <Stack.Screen name="Alarmes" component={MenuAlarmes}
                        options={({ route }) => ({
                            headerTitleStyle: {
                                fontFamily: CommonStyles.fontFamilyTitle,
                                alignSelf: 'flex-start',
                                fontSize: 20,
                                marginLeft: 50,
                            },
                            gestureDirection: 'vertical',
                            transitionSpec: {
                                open: config,
                                close: config,
                            },
                        })} />
                    <Stack.Screen name="Grafico" component={Grafico}
                        options={({ route }) => ({
                            title: route.params.alarm_name,
                            headerTitleStyle: {
                                fontFamily: CommonStyles.fontFamilyTitle,
                                alignSelf: 'flex-start',
                                fontSize: 20,
                            },
                            gestureDirection: 'horizontal',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
