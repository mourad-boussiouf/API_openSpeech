import { View, Text } from 'react-native'
import React from 'react'

import { fonts, margin } from '../../styles/Base'
import { useTheme } from '@react-navigation/native';

const TitreViewer = ({titre, sousTitre}) => {

    const { colors } = useTheme();

    return (
        <View
            style={{
                marginTop: margin.topTitre,
                alignItems: "center"
            }}
        >

            <Text 
                style={{
                    color: colors.primary,
                    fontSize: 30, 
                    fontWeight: "bold",
                    lineHeight: 30,
                    letterSpacing: 0.8
                }}
            >
                {titre}
            </Text>


            {
                sousTitre ? 
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.card,
                        opacity: 0.5,
                        lineHeight: 14
                    }}
                >
                    {sousTitre}
                </Text>
                :
                <></>
            }

        </View>
    )
}

export default TitreViewer