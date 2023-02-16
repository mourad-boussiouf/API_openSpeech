import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { padding } from '../../../styles/Base'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  

const HeaderNavConversation = ({username}) => {

    const navigation = useNavigation();

    const [notifOff, setNotifOff] = useState(false)

    const onPressNotif = () => {
        setNotifOff(current => !current)
    }

    function onPressGoBack() {
        navigation.goBack()
    }
    const {colors} = useTheme()

    const styles = {
        container: {
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            paddingHorizontal: padding.m,
            alignItems: "center",
            paddingTop: 13
        },
        title: {
            textAlign: "center",
            fontSize: 16,
            color: colors.background,
        },
        icons: {
            opacity: 0.9
        },

        infoSubContainer: {
            flexDirection: "row",
            width: "33%",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: padding.xs,
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{width: "33%"}} onPress={onPressGoBack}>
                <Ionicons name="ios-arrow-back" size={18} color={colors.background} style={styles.icons}/>
            </TouchableOpacity>
            <View style={{width: "33%", alignItems: "center"}}>
                <Text style={styles.title}>{username}</Text>
                <View style={{alignItems: "center", flexDirection: "row"}}>
                    <View 
                        style={
                            {height: 8, 
                            width: 8, 
                            backgroundColor: colors.secondary, 
                            borderRadius: 5, 
                        }} 
                    />
                    <Text style={{fontSize: 13, color: colors.border, paddingLeft: 2}}>En ligne</Text>
                </View>
            </View>
            <View style={styles.infoSubContainer}>
                {
                    notifOff === true ? 
                        <TouchableOpacity onPress={onPressNotif} style={{paddingRight: 4}}>
                            <Ionicons name="notifications-off-circle-outline" size={22} color={colors.secondary} style={styles.icons} />
                        </TouchableOpacity>
                    : 
                        <TouchableOpacity onPress={onPressNotif} style={{paddingRight: 4}}>
                            <Ionicons name="md-notifications-circle-outline" size={22} color={colors.background} style={styles.icons} />
                        </TouchableOpacity>

                }
                <TouchableOpacity>
                    <Ionicons name="information-circle-outline" size={22} color={colors.background} style={styles.icons}/>            
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderNavConversation