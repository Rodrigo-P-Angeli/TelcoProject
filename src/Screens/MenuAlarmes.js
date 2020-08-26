import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { AlarmList } from '../Component/AlarmeList'

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
            }
        ]
    }
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2b2680', '#3393a7']} style={styles.linearGradient}>
                    <FlatList
                        data={this.state.alarmes}
                        keyExtractor={item => item.id_object}
                        renderItem={({ item }) => <AlarmList {...item} />}
                        style={styles.flatlist}
                    />
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
    }
})