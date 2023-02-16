import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../../context/userContext';
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../../styles/Base';

const ItemListIndividuel = ({message, userId, date}) => {

    const {colors} = useTheme()

    const [context, setContext] = useContext(UserContext); 

    const newDate = new Date(date)

    function getHoursAndMinutes() {
        return padTo2Digits(newDate.getHours()) + ':' + padTo2Digits(newDate.getMinutes());
    }
    
    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

    const dateFormat = getHoursAndMinutes()

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }


    return (

            userId === context.id ?

                <View
                    style={{
                        marginLeft: "auto",
                        width: calculWidth(0.3)
                    }}
                >
                    <Text
                        style={{
                            backgroundColor: colors.secondary,
                            color: colors.background,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            borderRadius: 11,
                            borderBottomRightRadius: 3
                        }}
                    >
                        {message}
                    </Text>
                    <Text
                        style={{
                            textAlign: "right",
                            fontSize: 12,
                            marginRight: margin.xs
                        }}
                    >
                        {dateFormat}
                    </Text>
                </View>
            :
                <View
                    style={{marginRight: "auto"}}
                >
                    <Text
                        style={{
                            backgroundColor: colors.message,
                            color: colors.primary,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            borderRadius: 11,
                            borderBottomLeftRadius: 3
                        }}
                    >
                        {message}
                    </Text>
                    <Text
                        style={{
                            textAlign: "left",
                            fontSize: 12,
                            marginLeft: margin.xs
                        }}
                    >
                        {dateFormat}
                    </Text>
                </View>
        
    )
}

export default ItemListIndividuel