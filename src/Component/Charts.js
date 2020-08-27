import React from 'react'
import { View, Dimensions, ActivityIndicator, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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
                <LineChart
                    data={data}
                    width={screenWidth*.95}
                    height={220}
                    chartConfig={chartConfig}
                    withDots={false}
                    withVerticalLines={false}
                    verticalLabelRotation={90}
                    xLabelsOffset={-20}
                    bezier
                />
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    ActInd: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})