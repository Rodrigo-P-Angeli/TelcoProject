import React from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export const AlarmList = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Grafico', props)}>
            <Text>{props.alarm_name}</Text>
            <Text>{props.start}</Text>
            <Text>{props.type}</Text>
            <Text>{props.id_priority}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})