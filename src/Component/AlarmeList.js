import React from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Prioridade from '../Prioridade'

export const AlarmList = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Grafico', props)}>
            <View style={[styles.prioridade, { backgroundColor: Prioridade[props.id_priority].background_color }]}></View>
            <Text>{props.alarm_name}</Text>
            <Text>{props.start}</Text>
            <Text>{props.type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    prioridade: {
        marginLeft: 15,
        height: 20,
        width: 20,
        borderRadius: 10,
    }
})