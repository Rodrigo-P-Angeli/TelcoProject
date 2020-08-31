import React from 'react'
import { View, Dimensions, ActivityIndicator, StyleSheet } from 'react-native'
import { LineChart } from "react-native-chart-kit"
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"

import { FadeInView } from './FadeInView'
import CommonStyles from '../CommonStyles'

const screenWidth = Dimensions.get("window").width

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    style: {
        paddingRight: 100,
    },
}


export const Chart = props => {
    const data = {
        labels: props.time,
        datasets: [
            {
                data: props.entrada,
                color: () => CommonStyles.Colors.entrada,
                strokeWidth: 2
            },
            {
                data: props.saida,
                color: () => CommonStyles.Colors.saida,
                strokeWidth: 2
            }
        ],
        legend: ["Entrada", "Saída"]
    }

    if (props.loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} size={'large'} style={styles.ActInd} color={CommonStyles.Colors.white} />
            </View>
        )
    } else {
        return (
            <FadeInView>
                <View style={styles.view}>
                    <FlashMessage
                        position='bottom'
                        floating={true}
                        hideStatusBar={false}
                    />
                    <LineChart
                        data={data}
                        width={screenWidth * .95}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={props.withDots}
                        withVerticalLines={false}
                        verticalLabelRotation={90}
                        xLabelsOffset={-20}
                        yLabelsOffset={20}
                        bezier
                        onDataPointClick={({ value, dataset, getColor }) =>
                            showMessage({
                                message: 'Valor',
                                description: `${value.toFixed(2).replace('.', ',')}`,
                                backgroundColor: getColor(1),
                                type: 'info'
                            })
                        }
                    />
                </View>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    ActInd: {
        alignSelf: 'center'
    },
    container: {
        marginTop: Dimensions.get('screen').height / 2 - 120,
    },
    view: {
        alignItems: 'center',
    },
})