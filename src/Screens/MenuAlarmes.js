import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as dateFns from 'date-fns'
import AsyncStorage from '@react-native-community/async-storage'

import { AlarmList } from '../Component/AlarmeList'
import CommonStyles from '../CommonStyles'

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
                this.setState({ alarmes })
            } else {
                this.setState({ alarmes })
            }
        } catch (e) {
            Alert.alert('Erro', 'Erro ao carregar list')
        }
    }
    onAddAlarme = async (start, end, idPrioridade, alarmeName, objectName, tipo, endWasSet) => {
        let id = this.state.alarmes.length
        let alarmes = this.state.alarmes
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
        this.setState({ alarmes })
        try {
            let listaAlarmes = JSON.stringify(this.state.alarmes)
            await AsyncStorage.setItem('ListaAlarmes', listaAlarmes)
        } catch (e) {
            Alert.alert('Erro', 'Erro ao salvar lista')
        }
    }
    onDeleteItem = async (id) => {
        let alarm = this.state.alarmes
        let alarmes = []
        for (let i = 0; i < alarm.length; i++) {
            if (alarm[i].idObject != id) {
                alarmes.push(alarm[i])
            }
        }
        this.setState({ alarmes })
        try {
            let listaAlarmes = JSON.stringify(this.state.alarmes)
            await AsyncStorage.setItem('ListaAlarmes', listaAlarmes)
        } catch (e) {
            Alert.alert('Erro', 'Erro ao deletar item')
        }
    }
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#050055', '#000594']} style={styles.linearGradient}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.alarmes}
                        keyExtractor={item => `${item.idObject}`}
                        renderItem={({ item }) => <AlarmList {...item} {...this.props} deleteItem={this.onDeleteItem} />}
                        style={styles.flatlist}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('AddAlarm', { addalarm: this.onAddAlarme })}>
                        <Icon name={'plus'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 50,
    },
    flatlist: {
        padding: 5,
        flex: 1,
        paddingTop: 30,
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