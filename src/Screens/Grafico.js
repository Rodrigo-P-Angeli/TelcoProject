import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, LogBox } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { LineChart, Grid } from 'react-native-svg-charts'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const data1 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const data2 = [50, 10, 10, 120, -4, -24, -23, 21, 35, 53, 13, 24, 50, -20, -80]
const data = [
    {
        data: data1,
        svg: { stroke: 'red', strokeWidth: 2, },
    },
    {
        data: data2,
        svg: { stroke: 'green', strokeWidth: 2, },
    },
]


export default class Grafico extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#050055', '#000594']} style={styles.linearGradient}>
                <LineChart
                    style={styles.chart}
                    data={data}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid svg={{ stroke: 'white', strokeWidth: 0.4, }} />
                </LineChart>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 80,
        justifyContent: 'center'
    },
    chart: {
        height: 200,
        width: '80%',
        alignSelf: 'center',
    },
})