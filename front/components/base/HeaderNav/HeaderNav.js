import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { margin, padding } from '../../../styles/Base'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  
import { useTheme } from '@react-navigation/native';



const HeaderNav = () => {

    const {colors} = useTheme()

    const styles = {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: padding.m,
            alignItems: "center",
            paddingTop: padding.s
        },
        title: {
            fontSize: 16,
            color: colors.background,
            opacity: 0.9
        },
        icons: {
            opacity: 0.9
        }
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Ionicons name="ios-arrow-back" size={20} color={colors.background} style={styles.icons}/>
        </TouchableOpacity>
        <View>
            <Text style={styles.title}>Chats</Text>
        </View>
        <TouchableOpacity>
            <AntDesign name="setting" size={20} color={colors.background} style={styles.icons}/>
        </TouchableOpacity>
    </View>
  )
}

export default HeaderNav