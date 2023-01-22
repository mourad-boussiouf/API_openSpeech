import { View, Text } from 'react-native'
import React from 'react'
import ListMyMessages from '../../components/messages/ListMyMessages'
import DoubleBackgroundDisplay from '../../components/base/Background/DoubleBackgroundDisplay'
import HeaderNav from '../../components/base/HeaderNav/HeaderNav'
import BottomNav from '../../components/base/BottomNav/BottomNav'
import SearchBar from '../../components/base/SearchBar/SearchBar'

const ListMessages = () => {

    const location = "chats"
    return (
        <View>
              <DoubleBackgroundDisplay />
              <HeaderNav/>
              <SearchBar/>
              
              <ListMyMessages/>
              <BottomNav location={location}/>
        </View>
    )
}

export default ListMessages