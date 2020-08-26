import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'
import Grafico from './Screens/Grafico'
import CommonStyles from './CommonStyles';

const Stack = createStackNavigator();

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
                        headerTitleStyle: {
                            fontFamily: CommonStyles.fontFamilyTitle,
                            alignSelf: 'center',
                            fontSize: 20,
                        },
                    }}
                    initialRouteName='Alarmes'>
                    <Stack.Screen name="Alarmes" component={MenuAlarmes} />
                    <Stack.Screen name="Grafico" component={Grafico} />
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
