import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, ScrollView, SectionList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { dimensions, margin, padding } from '../../styles/Base'
import { useRoute, useTheme } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { API_CONV } from '../../services/config';


import { UserContext } from '../../context/userContext';
import ItemListIndividuel from './liste/ItemListIndividuel';

const MessageIndividuel = () => {

    const [messageToSend, handleMessageToSend] = useState()
    const [error, setError] = useState({isError: false, message: ""})
    const [refresh, setRefresh] = useState(false)

    const [test, setTest] = useState([])

    const [context, setContext] = useContext(UserContext)

    const {colors} = useTheme()

    const route = useRoute()    

    const idConv = route.params.id

    const idOther = route.params.idOther

    const [data, setData] = useState([])

    const UrlApiConv = API_CONV + "/" + idConv

    const getConversation = async () => {

        try {
            await fetch(UrlApiConv, {
                method: "GET",
            })
            .then(response => {
                response.json()
                    .then(respdata => {
                        setData(respdata.data)
                    })
            })
        
        } catch (error) {
            console.log(error)
        }
       
    } 

    useEffect(() => {
        getConversation()
    }, [refresh])

    const onPress = async () => {
        if (!messageToSend)
            
            return setError({isError: true, message: "Veuillez insérer un message"})
        
        try {

            var jsonData = JSON.stringify({
                id_participant: idOther,
                message: messageToSend,
            })

            await fetch(API_CONV + "/manage", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: (jsonData)
            }).then((response) => {
                response.json()
                    .then(data => {
                        if (response.status !== 200)
                            return setError({isError: true, message: data.message})
                        handleMessageToSend()
                        setRefresh(true)
                    })
            })
        } catch (error) {
            console.log(error)
        }
    }

    function getHoursAndMinutes(newDate) {
        return padTo2Digits(newDate.getHours()) + ':' + padTo2Digits(newDate.getMinutes());
    }
    
    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

    const formatDate = (date) => {

        var messageDate = new Date(date)
        var now = new Date()

        var diff = new Date(now - messageDate);

        var isSameDay = (messageDate.getDate() === now.getDate() 
        && messageDate.getMonth() === now.getMonth()
        && messageDate.getFullYear() === now.getFullYear())

        const dayBetween = diff.getUTCDate() - 1

        if ( dayBetween === 0){
            if (isSameDay === true){
                return "Aujourd'hui"
            }
            else {
                return "hier"
            }
        } else if (dayBetween >= 1){

            var day = messageDate.getDate()
            var month =("0" + ( messageDate.getMonth() + 1)).slice(-2)
            var year = messageDate.getFullYear().toString().slice(-2);

            var format = day + "/" + month + "/" + year
            return format
            
        }
    }

    

    let groups = []
    

    if (data.length > 0){

        // this gives an object with dates as keys
        groups = data.reduce((groups, mess) => {

            const date = formatDate(mess.created_at);

            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(mess);
            return groups;
        }, {});
    }

    let arr = []

    if (data.length > 0){

        // this gives an object with dates as keys
        let testing = Object.keys(groups).map((item) => {


            arr.push({title: item, data: groups[item]})

    
        })
    }

    console.log(arr)


    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }  

    

    const styles = {

        bottomContainer: {
            position: "absolute",
            top: calculHeight(0.202),
            width: calculWidth(0),
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        inputContainer: {
            backgroundColor: colors.input,
            width: calculWidth(0.4),
            paddingHorizontal: padding.s,
            paddingVertical: 14,
            borderRadius: 12,

        },
        input: {
            marginLeft: margin.xs,
            height: 20,
            width: calculWidth(0.6),
            color: colors.background,
        },
        icon: {
            opacity: 0.9
        },
        sendButton: {
            backgroundColor: colors.secondary,
            padding: 12,
            borderRadius: margin.l
        }
    }

    return (

        <SafeAreaView>

            {
                error.isError === true ?
                    <View
                        style={{position: "absolute", top: margin.s, alignSelf: "center"}}
                    >
                        <Text style={styles.error}>{error.message}</Text>
                    </View>
                :
                    <></>
            }

            <SafeAreaView>
                <SectionList
                    inverted
                    stickySectionHeadersEnabled={false}
                    style={{
                        top: calculHeight(0.975), 
                        paddingHorizontal: padding.m, 
                        maxHeight: calculHeight(0.27), 
                        overflow: "hidden"
                    }}
                    sections={arr}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (

                        item.user_id == context.id ? 

                        <View
                            style={{
                                marginLeft: "auto",
                                width: calculWidth(0.3),
                                paddingVertical: 2
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
                                {item.content}
                            </Text>
                            <Text
                                style={{
                                    textAlign: "right",
                                    fontSize: 12,
                                    marginRight: margin.xs
                                }}
                            >
                                {getHoursAndMinutes(new Date(item.created_at))}
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
                                {item.content}
                            </Text>
                            <Text
                                style={{
                                    textAlign: "left",
                                    fontSize: 12,
                                    marginLeft: margin.xs
                                }}
                            >
                                {getHoursAndMinutes(new Date(item.created_at))}
                            </Text>
                        </View>
                    )}
                    renderSectionFooter={({section: {title}}) => (
                        <Text 
                            style={{
                                textAlign: "center",
                                paddingVertical: padding.s,
                                color: colors.border,
                                fontSize: 13
                            }}
                        >
                            {title}
                        </Text>
                    )}
                />
            </SafeAreaView>
            

            <View style={styles.bottomContainer}>
                <SimpleLineIcons name="paper-clip" size={20} color={colors.border} />
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}  
                        placeholder="Entrez un message..."          
                        placeholderTextColor={colors.border}
                        onChangeText={handleMessageToSend}
                        value={messageToSend}
                    />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={onPress}>
                    <Ionicons name="paper-plane" size={20} color={colors.background} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MessageIndividuel