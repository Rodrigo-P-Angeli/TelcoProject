import React, { Component } from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class HeaderDrawerButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginLeft: 20, }}
                onPress={() => this.props.navigation.openDrawer()}>
                <FontAwesome name={'bars'} color={'white'} size={20} />
            </TouchableOpacity>
        )
    }
}