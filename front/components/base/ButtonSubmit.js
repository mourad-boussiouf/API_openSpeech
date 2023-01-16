import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { dimensions, margin } from '../../styles/Base';

const ButtonSubmit = ({titre , onPress}) => {

    const { colors } = useTheme();

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = {
        button: {
            width: calculWidth(.42),
            height: 56,
            backgroundColor: colors.secondary,
            borderRadius: 10,
            alignSelf: "center",
            position: "absolute",
            top: calculHeight(0.22)
        },

        buttonLabel: {
            color: colors.background,
            lineHeight: 56,
            fontSize: 16,
            fontWeight: "bold",
            alignSelf: "center"
        }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{titre}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSubmit