import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const AlarmList = props => {
    return (
        <TouchableOpacity style={styles.container}>
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