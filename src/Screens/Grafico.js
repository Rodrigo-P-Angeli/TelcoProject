import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, LogBox, Button, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as dateFns from 'date-fns'

import { Chart } from '../Component/Charts'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const initialState = {
    entrada: [],
    saida: [],
    time: [],
    loading: true,
}
export default class Grafico extends Component {
    state = {
        ...initialState
    }
    async componentDidMount() {
        let entrada = this.generatePoints(30)
        let saida = this.generatePoints(40)
        let time = this.generateTime()
        setTimeout(() => this.setState({
            entrada,
            saida,
            time,
            loading: false,
        }), 1);
    }
    generatePoints(padrao) {
        const dado = [padrao]
        for (let i = 1; i < 288; i++) {
            dado.push(dado[i - 1] + Math.round(Math.random() * 10 - 5)) //Criando um gráfico maneiro
        }
        return dado
    }
    generateTime() {
        const dado = []
        const date = new Date()
        const coff = 1000 * 60 * 5
        const agora = Math.round(date.getTime() / coff) * coff
        for (let i = 0; i < 288; i++) {
            if ((i + 32) % 32 == 0 || i == 287) {

                let hora = dateFns.addHours(agora, -(288 - i) / 288 * 24)
                dado[i] = dateFns.format(hora, 'HH:mm')
            }
        }
        return dado
    }
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#050055', '#000594']} style={styles.linearGradient}>
                <Chart entrada={this.state.entrada} saida={this.state.saida} time={this.state.time} loading={this.state.loading} />
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    chart: {
        height: 300,
        width: '80%',
        alignSelf: 'center',
    },
    ActInd: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
    },
    //scrowview:
    // {
    //     alignSelf: 'center',
    //     flexDirection: 'row',
    //     marginTop: 150,
    //     marginRight: 30,
    // }
})