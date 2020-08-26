import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='screen'
                    headerMode="screen"
                    mode="modal"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'transparent',
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            borderBottomWidth: 0,
                            position: 'absolute', zIndex: 100, top: 0, left: 0, right: 0 
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }
                    }
                >
                    <Stack.Screen
                        options={{
                            title: 'Alarmes',
                        }}
                        name="Alarmes">
                        {() => <MenuAlarmes />}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
