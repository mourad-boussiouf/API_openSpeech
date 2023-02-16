import { View, Text } from 'react-native'
import React from 'react'

import { useTheme } from '@react-navigation/native';

import {dimensions} from '../../../styles/Base'

const DoubleBackgroundDisplay = ({TopHeight, MiddleHeight, BottomHeight, BottomPos, color}) => {
    

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
                    height: calculHeight(TopHeight),
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
                    height: calculHeight(TopHeight),
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
                    height: calculHeight(MiddleHeight),
                    position: "absolute",
                    top: calculHeight(TopHeight),
                    zIndex: 0,
                    elevation: 1,
                    borderBottomRightRadius: 0,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            {
                color === "secondary" ?
                    <View 
                        style={{
                            backgroundColor: color === "secondary" ? colors.secondary : colors.secondary,
                            width: "100%", 
                            height: calculHeight(BottomHeight),
                            position: "absolute",
                            top: calculHeight(MiddleHeight),
                            zIndex: 0,
                            elevation: 0,
                            borderTopLeftRadius: 50,
                            boxShadow: "0px 0px 0px",
                            shadowColor: "transparent"
                        }} 

                    />  

                :

                    <></>
            }
    
            <View 
                style={{ 
                    backgroundColor: colors.background,
                    width: "100%", 
                    height: calculHeight(MiddleHeight),
                    position: "absolute",
                    top: calculHeight(TopHeight),
                    zIndex: 0,
                    elevation: 9,
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />

            <View 
                style={{ 
                    backgroundColor: color === "secondary" ? colors.secondary : colors.primary,
                    width: "100%", 
                    height: calculHeight(BottomHeight),
                    position: "absolute",
                    top: calculHeight(BottomPos),
                    zIndex: 0,
                    elevation: 0,
                    borderTopLeftRadius: 50,
                    boxShadow: "0px 0px 0px",
                    shadowColor: "transparent"
                }}

            />
            
        </View>
        
    )
}




export default DoubleBackgroundDisplay