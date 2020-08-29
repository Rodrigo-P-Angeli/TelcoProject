import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Text, TextInput, Modal, Alert, TouchableWithoutFeedback, Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-date-picker'
import * as dateFns from 'date-fns'


import CommonStyles from '../CommonStyles'
import Prioridade from '../Prioridade'
import { HeaderConfirm } from '../Component/HeaderConfirm'


export default class AddAlarm extends Component {
    state = {
        start: new Date(),
        end: new Date(),
        objectName: '',
        alarmName: '',
        type: 'Dispositivo',
        priority: 0,
        openStart: false,
        openEnd: false,
        endWasSet: false,
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <HeaderConfirm {...this.props} addAlarm={() => this.props.route.params.addalarm(this.state.start, this.state.end, this.state.priority, this.state.alarmName, this.state.objectName, this.state.type, this.state.endWasSet)} />
            ),
        });
    }
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#000066','#47479F']} style={styles.linearGradient}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Nome do Objeto'}
                    value={this.state.objectName}
                    onChangeText={objectName => this.setState({ objectName })}
                    autoFocus={true}
                    onSubmitEditing={() => { this.segundoTextInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Nome do Alarme'}
                    value={this.state.alarmName}
                    onChangeText={alarmName => this.setState({ alarmName })}
                    ref={(input) => { this.segundoTextInput = input; }}
                />
                <TouchableOpacity onPress={() => this.setState({ openStart: true })}>
                    <Text style={styles.startEnd}>Start: {dateFns.format(this.state.start, 'dd-MM-yyyy HH:mm')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ openEnd: true })}>
                    <Text style={styles.startEnd}>End: {this.state.endWasSet ? dateFns.format(this.state.end, 'dd-MM-yyyy HH:mm') : '      - - -'}</Text>
                </TouchableOpacity>
                <View style={styles.viewType}>
                    <TouchableOpacity onPress={() => this.setState({ type: 'Dispositivo' })} style={[styles.type, this.state.type == 'Dispositivo' ? { backgroundColor: 'white' } : null]}>
                        <Text style={[styles.typeText, this.state.type == 'Dispositivo' ? { color: 'blue' } : null]}>Dispositivo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ type: 'Interface' })} style={[styles.type, this.state.type == 'Interface' ? { backgroundColor: 'white' } : null]}>
                        <Text style={[styles.typeText, this.state.type == 'Interface' ? { color: 'blue' } : null]}>Interface</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewPrioridade}>
                    <TouchableOpacity onPress={() => this.setState({ priority: 0 })} style={[styles.priority, this.state.priority == 0 ? { backgroundColor: Prioridade[0].background_color } : null]}>
                        <Text style={[styles.priorityText, this.state.priority == 0 ? { color: Prioridade[0].text_color } : null]}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ priority: 1 })} style={[styles.priority, this.state.priority == 1 ? { backgroundColor: Prioridade[1].background_color } : null]}>
                        <Text style={[styles.priorityText, this.state.priority == 1 ? { color: Prioridade[1].text_color } : null]}>Level 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ priority: 2 })} style={[styles.priority, this.state.priority == 2 ? { backgroundColor: Prioridade[2].background_color } : null]}>
                        <Text style={[styles.priorityText, this.state.priority == 2 ? { color: Prioridade[2].text_color } : null]}>Level 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ priority: 3 })} style={[styles.priority, this.state.priority == 3 ? { backgroundColor: Prioridade[3].background_color } : null]}>
                        <Text style={[styles.priorityText, this.state.priority == 3 ? { color: Prioridade[3].text_color } : null]}>Level 3</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.openStart}
                    onRequestClose={() => this.setState({ openStart: false })}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => this.setState({ openStart: false })} style={styles.touchableModal}>
                            <View style={styles.touchableModal}>

                            </View>
                        </TouchableWithoutFeedback>
                        <DatePicker
                            date={this.state.start}
                            onDateChange={(start) => this.setState({ start })}
                            mode={'datetime'}
                            locale={'pt-br'}
                            textColor={'white'}
                            style={styles.datePicker}
                        />
                        <TouchableWithoutFeedback onPress={() => this.setState({ openStart: false })} style={styles.touchableModal}>
                            <View style={styles.touchableModal}>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.openEnd}
                    onRequestClose={() => this.setState({ openEnd: false })}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => this.setState({ openEnd: false })} style={styles.touchableModal}>
                            <View style={styles.touchableModal}>
                            </View>
                        </TouchableWithoutFeedback>
                        <DatePicker
                            date={this.state.start}
                            onDateChange={(end) => this.setState({ end, endWasSet: true })}
                            mode={'datetime'}
                            locale={'pt-br'}
                            textColor={'white'}
                            style={styles.datePicker}
                        />
                        <TouchableWithoutFeedback onPress={() => this.setState({ openEnd: false })} style={styles.touchableModal}>
                            <View style={styles.touchableModal}>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>
            </LinearGradient >
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 90,
    },
    textInput: {
        color: CommonStyles.Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: CommonStyles.Colors.white,
        alignItems: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
        margin: 20,
        marginTop: 0,
        padding: 5,
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
    },
    startEnd: {
        color: CommonStyles.Colors.white,
        marginBottom: 10,
        margin: 20,
        marginTop: 0,
        padding: 5,
        fontFamily: CommonStyles.fontFamily,
        borderBottomWidth: 1,
        borderBottomColor: CommonStyles.Colors.white,
        alignItems: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    datePicker: {
        alignSelf: 'center',
    },
    touchableModal: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    viewType: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    viewPrioridade: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //alignItems: 'center',
        flex: 1,
    },
    typeText: {
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
        textAlignVertical: 'center',
        textAlign: 'center',
        flex: 1,
    },
    type: {
        borderRadius: 20,
        height: 40,
        width: 80,
    },
    priorityText: {
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamily,
        fontSize: 15,
        textAlignVertical: 'center',
        textAlign: 'center',
        flex: 1,
    },
    priority: {
        borderRadius: 20,
        height: 40,
        width: 80,
    },
})