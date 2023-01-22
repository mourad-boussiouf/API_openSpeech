import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { margin, padding } from '../../../styles/Base'

import ImageViewer from '../../base/ImageViewer'
import { SafeAreaView } from 'react-native-safe-area-context'

const ItemList = ({message, pseudo, notifications, created_at, avatar, idChat}) => {

    const navigation = useNavigation();

    const {colors} = useTheme()

    const [image, setImage] = useState('http://192.168.1.34:3000/images/' + avatar);

    const formatDate = (date) => {

        var messageDate = new Date(date)
        var now = new Date()

        var diff = new Date(now - messageDate);

        var isSameDay = (messageDate.getDate() === now.getDate() 
        && messageDate.getMonth() === now.getMonth()
        && messageDate.getFullYear() === now.getFullYear())

        console.log(isSameDay)

        const dayBetween = diff.getUTCDate() - 1

        if ( dayBetween === 0){
            if (isSameDay === true){
                return messageDate.getHours() + ":" + messageDate.getMinutes()
            }
            else {
                return "hier"
            }
        } else if (dayBetween === 1){

            return "hier"

        } else if (dayBetween > 1){

            var day = messageDate.getDate()
            var month =("0" + ( messageDate.getMonth() + 1)).slice(-2)
            var year = messageDate.getFullYear().toString().slice(-2);

            var format = day + "/" + month + "/" + year
            return format
            
        }
    }

    const onPress = () => {
        navigation.navigate('conversation', {id: idChat})
    }

    const styles = {
        item: {
            marginVertical: margin.s,
            paddingHorizontal: padding.m,
            flexDirection: "row",
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            
        },

        container: {
            alignItems: "center",
            flexDirection: "row"
        },

        imageContainer: {
            width: 51,
            height: 51,
        },

        image: {
            width: "100%",
            height: "100%",
            borderRadius: 27,
        },

        subItem: {
            textAlign: "left",
            marginLeft: margin.m
        } ,

        pseudo: {
            color: colors.text,
            fontWeight: "bold",
            fontSize: 14
        },
        message: {
            color: colors.card,
            opacity: 0.7,
            fontSize: 13,
        },


        subItemDateNotif: {
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            backgroundColor: colors.secondary,
            width: 20,
            height: 20,
            textAlign: "right",
            borderRadius: 30/2,
        }, 
  
        subItemDate: {
            textAlign: "right",
            fontSize: 12,
            color: colors.card,
            opacity: 0.7,
            paddingRight: 2,
            paddingTop: 1.5,
        },
        
    }
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.container}>
                <SafeAreaView style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: image}} />
                </SafeAreaView>

                <View style={styles.subItem}>
                    <Text style={styles.pseudo}>{pseudo}</Text>
                    <Text style={styles.message}>{message.length > 30 ? message.substring(0, 30) + "..." : message}</Text>
                </View>
            </View>
            
            <View>
                {
                    notifications !== 0 ?

                        <View style={styles.subItemDateNotif}>
                            <Text style={{color: colors.background, fontSize: 10, fontWeight: "bold"}}>
                                {notifications}
                            </Text>
                        </View>
                    :
                        <View><Text></Text></View>
                }
                
                <Text style={[styles.subItemDate]}>{formatDate(created_at)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemList