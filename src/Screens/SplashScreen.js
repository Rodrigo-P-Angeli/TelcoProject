/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import CommonStyles from '../CommonStyles'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ActivityIndicator animating={true} size={'large'} style={styles.ActInd} color={CommonStyles.Colors.white} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CommonStyles.Colors.addButton,
    },
    ActInd: {
        alignSelf: 'center'
    },
})
