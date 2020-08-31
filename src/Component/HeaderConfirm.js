import React, { Component } from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class HeaderConfirm extends Component {
    state = {
        disable: false
    }
    render() {
        return (
            <TouchableOpacity
                style={{ alignSelf: 'center', alignItems: 'center', marginRight: 25, }}
                disabled={this.state.disable}
                onPress={(a, b, c, d, e, f, g) => {
                    this.setState({ disable: true })
                    this.props.addAlarm(a, b, c, d, e, f, g)
                    this.props.navigation.navigate('Alarmes')
                }}>
                <FontAwesome name={'check'} color={'white'} size={20} />
            </TouchableOpacity>
        )
    }
}