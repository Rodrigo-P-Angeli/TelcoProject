import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MenuAlarm = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{props.alarm_name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})