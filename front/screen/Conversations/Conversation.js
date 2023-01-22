import { View, Text } from 'react-native'
import React from 'react'
import { TabRouter, useRoute } from '@react-navigation/native'
import DoubleBackgroundDisplay from '../../components/base/Background/DoubleBackgroundDisplay'

const Conversation = () => {

    const route = useRoute()

    return (
        <View>
            <DoubleBackgroundDisplay/>
            <Text>Conversation {route.params.id}</Text>
        </View>
    )
}

export default Conversation