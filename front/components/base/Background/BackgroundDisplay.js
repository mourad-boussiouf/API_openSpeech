import { View } from 'react-native'
import React from 'react'

import { useTheme } from '@react-navigation/native';

import {dimensions} from '../../../styles/Base'

const BackgroundDisplay = () => {

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }
    
    const { colors } = useTheme();

    return (
        <View style={{flex: 1, backgroundColor: colors.background}}>
            <View 
                style={{ 
                    backgroundColor: colors.background,
                    width: "100%", 
                    height: calculHeight(0.30),
                    position: "absolute",
                    zIndex: 100,
                    elevation: 1,
                    borderBottomRightRadius: 70,
                    boxShadow: "0px 0px 0px",
                    shadowColor: colors.background
                }}

            />
            <View 
                style={{ 
                    backgroundColor: colors.card,
                    width: "100%", 
                    height: calculHeight(0.30),
                    position: "absolute",
                    zIndex: 0,
                    elevation: 0,
                }}
            />
            <View 
                style={{ 
                    backgroundColor: colors.background,
                    width: "100%", 
                    height: calculHeight(0.70),
                    position: "absolute",
                    zIndex: 0,
                    elevation: 0,
                    top: calculHeight(0.30),
                }}
            />
            <View 
                style={{ 
                    backgroundColor: colors.card,
                    width: "100%", 
                    height: calculHeight(0.70),
                    position: "absolute",
                    zIndex: 0,
                    elevation: 2,
                    top: calculHeight(0.30),
                    borderTopLeftRadius: 70
                }}
            />
            
        </View>
    )
}

export default BackgroundDisplay