import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert, Animated, SafeAreaView, StatusBar, LogBox } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as dateFns from 'date-fns'
import AsyncStorage from '@react-native-community/async-storage'

import { AlarmList } from '../Component/AlarmeList'
import CommonStyles from '../CommonStyles'
import LoaderComponent from '../Component/LoaderComponent'
import SearchComponent from '../Component/SearchComponent'

LogBox.ignoreAllLogs(true)

const alarmes = [
    {
        idAlarm: 0,
        idObject: 0,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        idPriority: 0,
        alarmName: 'Alarme1',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 1,
        idObject: 1,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        idPriority: 1,
        alarmName: 'Alarme2',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 2,
        idObject: 2,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        idPriority: 2,
        alarmName: 'Alarme3',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 3,
        idObject: 3,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000),
        end: dateFns.addHours(new Date(), (Math.random() * 10000) - 5000),
        idPriority: 3,
        alarmName: 'Alarme4',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
]
export default class MenuAlarm extends Component {
    state = {
        scrollYValue: new Animated.Value(0),
        alarmes: []
    }
    componentDidMount = async () => {
        try {
            let alarmes2 = await AsyncStorage.getItem('ListaAlarmes')
            if (alarmes2 !== null) {
                let alarmes = JSON.parse(alarmes2)
                alarmes.map(item => {
                    item.start = new Date(item.start)
                    item.end = new Date(item.end)
                    return (
                        item
                    )
                }
                )
                alarmes.sort((a, b) => b.start - a.start)
                this.setState({ alarmes, alarmeTotal: alarmes })
            } else {
                this.setState({ alarmes, alarmeTotal: alarmes })
            }
        } catch (e) {
            Alert.alert('Erro', 'Erro ao carregar list')
        }
    }
    onAddAlarme = async (start, end, idPrioridade, alarmeName, objectName, tipo, endWasSet) => {
        let id = Math.random() * 1000
        let alarmes = this.state.alarmeTotal
        if (endWasSet) {
            alarmes.push({
                idAlarm: id,
                idObject: id,
                start: start,
                end: end,
                idPriority: idPrioridade,
                alarmName: alarmeName,
                objectName: objectName,
                type: tipo,
            })
        } else {
            alarmes.push({
                idAlarm: id,
                idObject: id,
                start: start,
                end: null,
                idPriority: idPrioridade,
                alarmName: alarmeName,
                objectName: objectName,
                type: tipo,
            })
        }
        alarmes.sort((a, b) => b.start - a.start)
        this.setState({ alarmes, alarmeTotal: alarmes })
        try {
            let listaAlarmes = JSON.stringify(this.state.alarmeTotal)
            await AsyncStorage.setItem('ListaAlarmes', listaAlarmes)
        } catch (e) {
            Alert.alert('Erro', 'Erro ao salvar lista')
        }
    }
    onDeleteItem = async (id) => {
        let alarm = this.state.alarmeTotal
        let alarmes = []
        for (let i = 0; i < alarm.length; i++) {
            if (alarm[i].idAlarm != id) {
                alarmes.push(alarm[i])
            }
        }
        this.setState({ alarmes, alarmeTotal: alarmes })
        try {
            let listaAlarmes = JSON.stringify(this.state.alarmeTotal)
            await AsyncStorage.setItem('ListaAlarmes', listaAlarmes)
        } catch (e) {
            Alert.alert('Erro', 'Erro ao deletar item')
        }
    }
    searchFilterFunction = text => {
        let alarmes = this.state.alarmeTotal
        const newData = alarmes.filter(item => {
            const itemData = `${item.alarmName.toUpperCase()} 
          ${item.objectName.toUpperCase()} ${item.type.toUpperCase()}`
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        });
        if (text.length > 0) {
            return this.setState({ alarmes: newData })
        }
        this.setState({ alarmes })
    }
    render() {
        const clampedScroll = Animated.diffClamp(
            Animated.add(
                this.state.scrollYValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: 'extend',
                }),
                new Animated.Value(0),
            ),
            0,
            50,
        )
        return (
            <Animated.View>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#000066','#47479F']} style={styles.linearGradient}>
                        <SearchComponent
                            clampedScroll={clampedScroll}
                            searchFilter={this.searchFilterFunction} />
                        <Animated.ScrollView
                            style={{
                                height: '100%'
                            }}
                            showsVerticalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: this.state.scrollYValue } } }],
                                { useNativeDriver: true },
                                () => { },          // Optional async listener but I didn't use.
                            )}
                            contentInsetAdjustmentBehavior='never'>
                            <View style={{ marginTop: 60, }}></View>
                            {this.state.alarmes.map(item =>
                                <AlarmList
                                    key={item.idObject}
                                    {...item}
                                    {...this.props}
                                    deleteItem={this.onDeleteItem}
                                />)}
                        </Animated.ScrollView>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => this.props.navigation.navigate('AddAlarm',
                                { addalarm: this.onAddAlarme })}>
                            <Icon name={'plus'} size={20} color={'white'} />
                        </TouchableOpacity>
                    </LinearGradient>
                </SafeAreaView>
            </Animated.View >
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        padding: 10,
        paddingTop: 50,
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CommonStyles.Colors.addButton,
    },
})