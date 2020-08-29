import React, { useState } from 'react'
import { View, Dimensions, ActivityIndicator, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

import {
    LineChart,
} from "react-native-chart-kit";
import { FadeInView } from './FadeInView';

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    style: {
        paddingRight: 100,
    },
};


export const Chart = props => {
    const [showDots, setShowDots] = useState(false)
    const data = {
        labels: props.time,
        datasets: [
            {
                data: props.entrada,
                color: () => 'blue', // optional
                strokeWidth: 2 // optional
            },
            {
                data: props.saida,
                color: () => 'green', // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Entrada", "Saída"] // optional
    };
    if (props.loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} size={'large'} style={styles.ActInd} color={'white'} />
            </View>
        )
    } else {
        return (
            <FadeInView>
                <View style={styles.view}>
                    <FlashMessage
                        position='bottom'
                        style={[styles.message]}
                        floating={true}
                        hideStatusBar={false}
                    />
                    <LineChart
                        data={data}
                        width={screenWidth * .95}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={showDots}
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
                                type: 'success'
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
    message: {

    },
})