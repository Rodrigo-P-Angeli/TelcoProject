import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { HeaderBackButton } from '@react-navigation/stack'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

import CommonStyles from '../CommonStyles'


export default class MenuDrawer extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000066', elevation: 10, }}>
                <View style={styles.container}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#000066', '#47479F']} style={styles.linearGradient}>
                        <HeaderBackButton
                            tintColor={CommonStyles.Colors.white}
                            onPress={() => this.props.navigation.closeDrawer()} />
                        <Text style={styles.title}>Menu</Text>
                    </LinearGradient>
                    <Text style={styles.title}>Telcomanager</Text>
                    <View style={styles.content}>
                        <View style={styles.itens}>
                            <Email name={'email'} size={15} color={CommonStyles.Colors.white} />
                            <Text style={styles.contato}>rodrigop.deangeli@gmail.com</Text>
                        </View>
                        <View style={styles.itens}>
                            <Email name={'phone'} size={15} color={CommonStyles.Colors.white} />
                            <Text style={styles.contato}>+55 27 99992-8105</Text>
                        </View>
                    </View>
                </View>
                <DrawerContentScrollView {...this.props}>
                    <DrawerItemList {...this.props} />
                </DrawerContentScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-around',
        padding: 15,
        paddingTop: 0,
    },
    title: {
        fontSize: 20,
        fontFamily: CommonStyles.fontFamilyTitle,
        color: CommonStyles.Colors.white,
        padding: 15,
    },
    linearGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
    },
    contato: {
        fontSize: 13,
        paddingLeft: 5,
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.Colors.white,
    },
    container: {
        paddingBottom: 20,
        // borderBottomColor: CommonStyles.Colors.white,
        // borderBottomWidth: 1,
    },
    itens: {
        flexDirection: 'row',
    },
})