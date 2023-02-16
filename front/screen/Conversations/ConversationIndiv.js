import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabRouter, useRoute } from '@react-navigation/native'
import DoubleBackgroundDisplay from '../../components/base/Background/DoubleBackgroundDisplay'
import { API_CONV } from '../../services/config'
import MessageIndividuel from '../../components/messages/MessageIndividuel'
import HeaderNavConversation from '../../components/base/HeaderNav/HeaderNavConversation'

const Conversation = () => {

    const route = useRoute()    

    return (
        <View>

            <DoubleBackgroundDisplay TopHeight={0.9} MiddleHeight={0.25} BottomHeight={0.8} BottomPos={0.15} color="primary"/>
            <HeaderNavConversation username={route.params.username}/>    
            
            
            <MessageIndividuel/>
        </View>
    )
}

export default Conversation