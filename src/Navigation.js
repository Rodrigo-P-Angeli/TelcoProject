import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuAlarmes from './Screens/MenuAlarmes'
import Grafico from './Screens/Grafico'
import CommonStyles from './CommonStyles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class AppDrawer extends Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Cardapio"
                //drawerContent={props => <MenuDrawer {...props} user={this.props.user} onSignOut={this.props.onSignOut} />}
                //drawerContentOptions={drawerOptions}
                backBehavior={'initialRoute'} >
                <Drawer.Screen name="Cardapio" component={MenuAlarmes} backBehavior={'none'} />
            </Drawer.Navigator>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    mode={'card'}
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTransparent: true,
                        //animationEnabled: false,
                        headerStyle: {
                            height: 50,
                            backgroundColor: 'black',
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
                            },
                            headerLeft: (props) => (
                                <HeaderBackButton
                                    disabled={true}
                                    tintColor={'rgba(0,0,0,0)'}
                                />)
                        })} />
                    <Stack.Screen name="Grafico" component={Grafico}
                        options={({ route }) => ({
                            title: route.params.alarm_name,
                            headerTitleStyle: {
                                fontFamily: CommonStyles.fontFamilyTitle,
                                alignSelf: 'flex-start',
                                fontSize: 20,
                            },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}
