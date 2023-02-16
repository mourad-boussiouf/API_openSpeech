import { View, Text } from 'react-native'
import React from 'react'
import ListMyConversations from '../../components/messages/ListMyConversations'
import DoubleBackgroundDisplay from '../../components/base/Background/DoubleBackgroundDisplay'
import HeaderNav from '../../components/base/HeaderNav/HeaderNav'
import BottomNav from '../../components/base/BottomNav/BottomNav'
import SearchBar from '../../components/base/SearchBar/SearchBar'

const ListMessages = () => {

    const location = "chats"
    
    return (
        <View>
            <DoubleBackgroundDisplay TopHeight={0.86} MiddleHeight={0.28} BottomHeight={0.86} BottomPos={0.14}  color={"secondary"}/>
            <HeaderNav/>
            <SearchBar/>
              
            <ListMyConversations/>
            <BottomNav location={location}/>
        </View>
    )
}

export default ListMessages