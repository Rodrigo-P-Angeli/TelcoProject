import React, { useState } from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { deviceWidth } from './LoaderComponent';
import CommonStyles from '../CommonStyles';

const SearchComponent = (props) => {
    const [text, setText] = useState('')
    const {
        clampedScroll
    } = props;
    const searchBarTranslate = clampedScroll.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -(250)],
        extrapolate: 'clamp',
    });
    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [0, 10],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View style={[
            styles.container,
            {
                transform: [
                    {
                        translateY: searchBarTranslate
                    }
                ],
                opacity: searchBarOpacity,
            }
        ]}>
            <TextInput
                value={text}
                onChangeText={(text2) => {
                    setText(text2)
                    props.searchFilter(text2)
                }}
                placeholder='Search'
                style={styles.formField}
                placeholderTextColor={'#888888'}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        width: deviceWidth - 20,
        left: 10,
        zIndex: 99,
    },
    formField: {
        borderWidth: 2,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        fontSize: 18,
        height: 50,
        color: CommonStyles.Colors.white,
        fontFamily: CommonStyles.fontFamily,
        backgroundColor: 'rgba(0,0,0,.2)'
    }
})

export default SearchComponent;