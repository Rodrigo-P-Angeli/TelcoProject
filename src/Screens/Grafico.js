import React, { Component } from 'react'
import { StyleSheet, LogBox, View, Text, Dimensions, ScrollView, Switch, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as dateFns from 'date-fns'

import { Chart } from '../Component/Charts'
import { FadeInView } from '../Component/FadeInView'
import CommonStyles from '../CommonStyles'
import Prioridade from '../Prioridade'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const initialState = {
    entrada: [],
    saida: [],
    time: [],
    loading: true,
    withDots: false,
}
export default class Grafico extends Component {
    state = {
        ...initialState,
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
        const { idPriority } = this.props.route.params
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#000066', '#47479F']} style={styles.linearGradient}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}>
                    {this.state.loading ? null :
                        <FadeInView>
                            <View style={[styles.prioridadeView, { backgroundColor: Prioridade[idPriority].background_color }]}>
                                <Text style={[styles.prioridade, { color: Prioridade[idPriority].text_color }]}>
                                    {Prioridade[idPriority].name}
                                </Text>
                            </View>
                            <View style={styles.viewInfoContainer}>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.text}>Nome do objeto:</Text>
                                    <Text style={styles.text2}>{this.props.route.params.objectName}</Text>
                                    <Text style={styles.text}>Tipo do alarme:</Text>
                                    <Text style={styles.text2}>{this.props.route.params.type}</Text>
                                </View>
                                <View style={styles.viewInfoDate}>
                                    <Text style={[styles.text, { textAlign: 'right' }]}>Data de início:</Text>
                                    <Text style={[styles.text2, { textAlign: 'right' }]}>{dateFns.format(this.props.route.params.start, 'dd-MM-yyyy HH:mm')}</Text>
                                    <Text style={[styles.text, { textAlign: 'right' }]}>Data de término: </Text>
                                    <Text style={[styles.text2, { textAlign: 'right' }]}>{this.props.route.params.end ? dateFns.format(this.props.route.params.end, 'dd-MM-yyyy HH:mm') : '- - -'}</Text>
                                </View>
                            </View>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.withDots ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(value) => this.setState({ withDots: value })}
                                value={this.state.withDots}
                            />
                            <Text style={styles.textSwitch}>Mostrar pontos</Text>
                        </FadeInView >}
                    <Chart entrada={this.state.entrada} saida={this.state.saida} time={this.state.time} loading={this.state.loading} withDots={this.state.withDots} />
                </ScrollView>
            </LinearGradient >
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 60,
        paddingTop: 60,
        flex: 1,
    },
    viewInfoContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: Dimensions.get('screen').width,
        padding: 10,
    },
    viewInfoDate: {
        alignSelf: 'flex-start',
    },
    text: {
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
    },
    text2: {
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamilyTitle,
        fontSize: 15,
        marginBottom: 20,
        paddingLeft: 10,
    },
    prioridade: {
        fontFamily: CommonStyles.fontFamilyTitle,
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    prioridadeView: {
        width: Dimensions.get('screen').width / 3,
        alignSelf: 'center',
        marginBottom: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    textSwitch: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.Colors.white,
        fontSize: 10,
        textAlign: 'right',
        marginRight: 10,
    },
})