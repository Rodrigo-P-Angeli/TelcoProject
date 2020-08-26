import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='float'>
                    <Stack.Screen name="TelcoProject">
                        {() => { }}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
