import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAlarmes from './Screens/MenuAlarmes'
import CommonStyles from './CommonStyles';

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
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
                    }}>
                    <Stack.Screen name="Alarmes">
                        {(props) => <MenuAlarmes {...props} />}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
