import React from 'react'
import { View, StyleSheet, ScrollView, Text, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Prioridade from '../Prioridade'
import CommonStyles from '../CommonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FadeInView } from './FadeInView';

export const AlarmList = props => {
    return (
        <FadeInView>
            <TouchableOpacity activeOpacity={.5} style={styles.container} onPress={() => props.navigation.navigate('Grafico', props)}>
                <View style={[styles.prioridade, { backgroundColor: Prioridade[props.id_priority].background_color }]}></View>
                <Text style={[styles.text, { color: Prioridade[props.id_priority].text_color }]}>{props.alarm_name}</Text>
                <View style={styles.startEnd}>
                    <Text style={[styles.startEndText, { color: Prioridade[props.id_priority].text_color }]}>{props.start}</Text>
                    <Text style={[styles.startEndText, { color: Prioridade[props.id_priority].text_color }]}>{props.end}</Text>
                </View>
                {/* 
            <Text>{props.type}</Text> */}
            </TouchableOpacity>
        </FadeInView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 0.7,
        paddingBottom: 5,
        paddingTop: 20,
        alignItems: 'center'
    },
    prioridade: {
        marginLeft: 15,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    text: {
        fontFamily: CommonStyles.fontFamily,
        marginLeft: 15,
        fontSize: 20,
        textAlignVertical: 'center',
    },
    startEnd: {
        alignItems: 'flex-end',
        flex: 1,
    },
    startEndText: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 11,
    }
})