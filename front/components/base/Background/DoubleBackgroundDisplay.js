import { Text, View } from 'react-native'
import React from 'react'

import { useTheme } from '@react-navigation/native';

import {dimensions} from '../../../styles/Base'

const DoubleBackgroundDisplay = () => {

    

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }
    
    const { colors } = useTheme();

    return (
        <View style={{flex: 1, backgroundColor: colors.primary}}>
            <Text>Salut</Text>
            <View 
                style={{ 
                    backgroundColor: colors.primary,
                    width: "100%", 
                    height: calculHeight(0.85),
                    position: "absolute",
                    zIndex: 100,
                    elevation: 3,
                    borderBottomRightRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            <View 
                style={{ 
                    backgroundColor: colors.background,
                    width: "100%", 
                    height: calculHeight(0.85),
                    position: "absolute",
                    zIndex: 0,
                    elevation: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            <View 
                style={{ 
                    backgroundColor: colors.primary,
                    width: "100%", 
                    height: calculHeight(0.325),
                    position: "absolute",
                    top: calculHeight(0.85),
                    zIndex: 0,
                    elevation: 1,
                    borderBottomRightRadius: 0,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            <View 
                style={{ 
                    backgroundColor: colors.secondary,
                    width: "100%", 
                    height: calculHeight(0.85),
                    position: "absolute",
                    top: calculHeight(0.13),
                    zIndex: 0,
                    elevation: 0,
                    borderTopLeftRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />
            <View 
                style={{ 
                    backgroundColor: colors.secondary,
                    width: "100%", 
                    height: calculHeight(0.93),
                    position: "absolute",
                    top: calculHeight(0.20),
                    zIndex: 0,
                    elevation: 0,
                    borderTopLeftRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            <View 
                style={{ 
                    backgroundColor: colors.background,
                    width: "100%", 
                    height: calculHeight(0.28),
                    position: "absolute",
                    top: calculHeight(0.85),
                    zIndex: 0,
                    elevation: 3,
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            
            
            
        </View>
    )
}

export default DoubleBackgroundDisplay