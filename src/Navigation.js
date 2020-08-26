import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'
import CommonStyles from './CommonStyles';
//import Header from './Components/Header'

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='screen'
                    headerMode="screen"
                    mode="modal"
                    screenOptions={{
                        headerTransparent: true,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontFamily: CommonStyles.fontFamilyTitle,
                            alignSelf: 'center',
                            fontSize: 20,
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
