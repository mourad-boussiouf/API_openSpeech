import React from 'react';
import { View, StyleSheet, useWindowDimensions, useColorScheme, Animated, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';
import SvgNextButtonRED from './SvgNextButtonRED';
import SvgNextButtonBLUE from './SvgNextButtonBLUE';

const NextButtonTuto = ({ theme , scrollTo }) => {
    const { width } = useWindowDimensions();
    const { colors } = useTheme();

    const NextButton = theme === 'dark' ? SvgNextButtonBLUE : SvgNextButtonRED;

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = StyleSheet.create({
        container: {
            flex: 4,
            top: calculHeight(0.198),
            alignSelf: "center",
            justifyContent: 'center',
        },     
    });

    return (
        <View style={styles.container}>
            <NextButton onPress={scrollTo} />                                                                                                           
        </View>
    );
};

export default NextButtonTuto;