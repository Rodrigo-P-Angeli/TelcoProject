import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, LogBox } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
export default class Grafico extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2b2680', '#3393a7']} style={styles.linearGradient}>
                <Text>
                    <Text>{this.props.route.params.alarm_name}</Text>
                </Text>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 50,
    },
})