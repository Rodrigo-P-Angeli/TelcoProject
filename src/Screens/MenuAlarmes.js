import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class MenuAlarm extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2b2680','#3393a7']} style={styles.linearGradient}>
                <View>

                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    linearGradient: {
        flex: 1,
    }
})