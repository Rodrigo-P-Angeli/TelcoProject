import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='float'>
                    <Stack.Screen name="Alarmes">
                        {() => <MenuAlarmes />}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
