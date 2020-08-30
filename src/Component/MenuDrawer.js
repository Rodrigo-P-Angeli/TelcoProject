import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import Email from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonStyles from '../CommonStyles'


export default class MenuDrawer extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#47479F', elevation: 10, }}>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.content}>
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
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
                </View>
                <DrawerContentScrollView {...this.props}>
                    <DrawerItemList {...this.props} />
                </DrawerContentScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        padding: 10,
        fontFamily: CommonStyles.fontFamilyTitle,
        color: CommonStyles.Colors.white,
    },
    contato: {
        fontSize: 13,
        paddingLeft: 5,
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.Colors.white,
    },
    container: {
        padding: 10,
        borderBottomColor: CommonStyles.Colors.white,
        borderBottomWidth: 1,
    },
    content: {
        flexDirection: 'row',
        padding: 5,
    },
    itens: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
})