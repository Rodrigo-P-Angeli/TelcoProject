import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, LogBox } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { LineChart, Grid } from 'react-native-svg-charts'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

export default class Grafico extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2b2680', '#3393a7']} style={styles.linearGradient}>
                <Text>
                    <Text>{this.props.route.params.alarm_name}</Text>
                </Text>
                <LineChart
                    style={styles.chart}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
                </LineChart>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 50,
    },
    chart: {
        height: 200,
        width: '80%', 
        alignSelf: 'center'
    },
})