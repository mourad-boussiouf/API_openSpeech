import React from 'react';
import { View, StyleSheet, useWindowDimensions, useColorScheme, Animated, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';
import SvgNextButtonRED from './SvgNextButtonRED';
import SvgNextButtonBLUE from './SvgNextButtonBLUE';

const SkipButton = ({ theme, scrollToLast }) => {
    const { width } = useWindowDimensions();
    const { colors } = useTheme();

    const skipColor = theme === 'dark' ? '#252525' : '#FFFFFF';

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = StyleSheet.create({
        container: {
            flex: 3,
            justifyContent:'center',
            position: "absolute", 
            top: calculHeight(0.071420420),
            alignItems: "center",
            alignSelf: "center",
            color: colors.border,
 
        },  
        text: {
            flex:1,
            justifyContent:'center',
            textAlign: 'center',
            color: skipColor,
            height: 100,
            width: 100,
            alignItems: "center",
            alignSelf: "center",
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={scrollToLast} activeOpacity={0.6}>
                <Text style={styles.text} >Skip</Text>  
            </TouchableOpacity>                                                                                                     
        </View>
    );
};

export default SkipButton;