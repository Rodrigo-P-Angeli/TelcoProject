import React, { Component } from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class HeaderConfirm extends Component {
    render() {
        return (
            // }>
            <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginRight: 25, }}
                onPress={(a, b, c, d, e, f, g) => {
                    // this.props.route.params(a, b, c, d, e, f, g)
                    console.log(this.props.rotps)
                    this.props.navigation.navigate('Alarmes')
                }}>
                <FontAwesome name={'check'} color={'white'} size={20} />
            </TouchableOpacity>
        )
    }
}