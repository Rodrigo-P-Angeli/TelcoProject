import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FlashMessage from 'react-native-flash-message'

import Grafico from './Screens/Grafico'
import AddAlarm from './Screens/AddAlarm'
import CommonStyles from './CommonStyles'
import MenuDrawer from './Component/MenuDrawer'
import MenuAlarm from './Screens/MenuAlarmes'
import SplashScreen from './Screens/SplashScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const drawerOptions = {
    labelStyle: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
    },
    activeTintColor: CommonStyles.Colors.white,
    inactiveTintColor: CommonStyles.Colors.white,
    activeBackgroundColor: '#47479F',
    inactiveBackgroundColor: 'transparent',
}

export default class App extends Component {
    state = {
        loadedScreen: false
    }
    componentDidMount = () => {
        setTimeout(() => this.setState({ loadedScreen: true }), 2000)
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode={'none'}
                    initialRouteName='Alarmes'>
                    {!this.state.loadedScreen ?
                        <Stack.Screen name="SplashScreen" component={SplashScreen} /> :
                        <Stack.Screen name="App" component={AppDrawer} />}
                </Stack.Navigator>
                <FlashMessage
                    position='bottom'
                    floating={true}
                    hideStatusBar={false}
                />
            </NavigationContainer >
        )
    }
}

class AppDrawer extends Component {
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Lista"
                drawerContent={props => <MenuDrawer {...props} />}
                drawerContentOptions={drawerOptions}
                backBehavior={'initialRoute'} >
                <Drawer.Screen name="Lista">
                    {(props) => <AppStack  {...this.props} {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        )
    }
}

class AppStack extends Component {
    render() {
        return (
            <Stack.Navigator
                mode={'card'}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerTransparent: true,
                    headerStyle: {
                        height: 50,
                    },
                    headerTintColor: CommonStyles.Colors.white,
                }}
                initialRouteName='Lista de Objetos'>
                <Stack.Screen name="Lista de Objetos" component={MenuAlarm}
                    options={({ route, navigation }) => ({
                        headerTitleStyle: {
                            fontFamily: CommonStyles.fontFamilyTitle,
                            alignSelf: 'flex-start',
                            fontSize: CommonStyles.headerFontSize,
                        },
                    })} />
                <Stack.Screen name="Grafico" component={Grafico}
                    options={({ route }) => ({
                        title: route.params.alarmName,
                        headerTitleStyle: {
                            fontFamily: CommonStyles.fontFamilyTitle,
                            alignSelf: 'flex-start',
                            fontSize: CommonStyles.headerFontSize,
                        },
                    })} />
                <Stack.Screen name="AddAlarm" component={AddAlarm}
                    options={({ route, navigation }) => ({
                        title: "Adicionar Alarme",
                        headerTitleStyle: {
                            fontFamily: CommonStyles.fontFamilyTitle,
                            alignSelf: 'flex-start',
                            fontSize: CommonStyles.headerFontSize,
                        },
                    })} />
            </Stack.Navigator>
        )
    }
}
