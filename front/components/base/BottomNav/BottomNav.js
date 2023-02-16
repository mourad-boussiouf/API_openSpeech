import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'; 

import { dimensions, padding } from '../../../styles/Base';
import { useTheme } from '@react-navigation/native';

const BottomNav = ({location}) => {

    const {colors} = useTheme()

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }  

    const styles = {
        container: {
            position: 'absolute',
            justifyContent: "space-between",
            left: 0, 
            top: calculHeight(0.11),
            width: "100%",
            flexDirection: "row",
            paddingHorizontal: padding.l,
            alignItems: "center",
        }
    }

    console.log(location === "chats")

    console.log(colors.background)
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <Ionicons name="list-outline" size={30} color="black" />            
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="chatbubbles-outline" size={26} style={{color: location === "chats" ? colors.background : colors.text}} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="ios-person-add-sharp" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="people-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person-circle-sharp" size={30} color="black" />        
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav