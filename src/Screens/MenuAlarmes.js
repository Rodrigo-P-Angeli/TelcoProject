import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import { AlarmList } from '../Component/AlarmeList'
import CommonStyles from '../CommonStyles'

export default class MenuAlarm extends Component {
    state = {
        alarmes: [
            {
                id_alarm: 0,
                id_object: 0,
                start: 0,
                end: 1,
                id_priority: 0,
                alarm_name: 'Alarme1',
                object_name: 'Objeto1',
                type: 'Dispositivo',
            },
            {
                id_alarm: 1,
                id_object: 1,
                start: 0,
                end: 1,
                id_priority: 1,
                alarm_name: 'Alarme2',
                object_name: 'Objeto1',
                type: 'Dispositivo',
            },
            {
                id_alarm: 2,
                id_object: 2,
                start: 0,
                end: 1,
                id_priority: 2,
                alarm_name: 'Alarme3',
                object_name: 'Objeto1',
                type: 'Dispositivo',
            },
            {
                id_alarm: 3,
                id_object: 3,
                start: 0,
                end: 1,
                id_priority: 3,
                alarm_name: 'Alarme4',
                object_name: 'Objeto1',
                type: 'Dispositivo',
            },
        ]
    }
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#050055', '#000594']} style={styles.linearGradient}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.alarmes}
                        keyExtractor={item => `${item.id_object}`}
                        renderItem={({ item }) => <AlarmList {...item} {...this.props} />}
                        style={styles.flatlist}
                    />
                    <TouchableOpacity style={styles.addButton}>
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
        paddingTop: 80,
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