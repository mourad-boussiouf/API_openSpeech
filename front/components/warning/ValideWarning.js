import { View, Text } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'; 

import { padding } from '../../styles/Base';
import { useTheme } from '@react-navigation/native';

const ValideWarning = ({message}) => {

    const { colors } = useTheme();

    const styles = {
        valideContainer: {
            position: "absolute", 
            top: padding.s,
            alignSelf: "center", 
            alignItems: "center", 
            flexDirection: "row",
            borderLeftWidth: 5,
            borderRadius: 5,
            borderLeftColor: colors.success,
            paddingHorizontal: padding.s,
            paddingVertical: padding.xs,
            minWidth: 220,
            backgroundColor: "#c4ffd4"
        },
        valide: {
            color: "black",
            textAlign: "center",
            paddingVertical: padding.xs,
            paddingLeft: padding.s
        },
    }

    return (
        <View
            style={styles.valideContainer}
        >
            <AntDesign name="checkcircle" size={16} color={colors.success}/>
            <Text style={styles.valide}>{message}</Text>
        </View>
    )
}

export default ValideWarning