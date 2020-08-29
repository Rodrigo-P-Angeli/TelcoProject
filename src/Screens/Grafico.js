import React, { Component } from 'react'
import { StyleSheet, LogBox, View, Text, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as dateFns from 'date-fns'

import { Chart } from '../Component/Charts'
import { FadeInView } from '../Component/FadeInView'
import CommonStyles from '../CommonStyles'

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
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#000066', '#47479F']} style={styles.linearGradient}>
                {this.state.loading ? null :
                    <FadeInView>
                        <View style={styles.viewInfoContainer}>
                            <View style={styles.viewInfo}>
                                <Text style={styles.text}>
                                    Nome do objeto: {this.props.route.params.objectName}
                                </Text>
                                <Text style={styles.text}>
                                    Tipo do alarme: {this.props.route.params.type}
                                </Text>
                                <Text style={styles.text}>
                                    Prioridade do alarme: {this.props.route.params.idPriority}
                                </Text>
                            </View>
                            <View style={styles.viewInfoDate}>
                                <Text style={styles.text}>
                                    Data de início: {dateFns.format(this.props.route.params.start, 'dd-MM-yyyy HH:mm')}
                                </Text>
                                <Text style={styles.text}>
                                    Data de término: {dateFns.format(this.props.route.params.end, 'dd-MM-yyyy HH:mm')}
                                </Text>
                            </View>
                        </View>
                    </FadeInView>}
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
        flex: 1,
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
    viewInfoContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: Dimensions.get('screen').width,
        padding: 10,
        marginBottom: 100,
    },
    viewInfoDate: {
        alignSelf: 'flex-start'
    },
    text: {
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
        marginBottom: 20,
    }
})