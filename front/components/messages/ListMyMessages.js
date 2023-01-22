import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_CONV } from '../../services/config'
import { useRoute } from '@react-navigation/native'

import ItemList from './liste/ItemList'
import { dimensions } from '../../styles/Base'



const ListMyMessages = () => {

    const [data, setData] = useState([])


    const UrlApiUsers = API_CONV + '/mine'

    const getList = async () => {

        await fetch(UrlApiUsers, {
            method: "GET",
        })
            .then(response => {
                response.json()
                    .then(respdata => {
                        setData(respdata.data)
                    })
            })

    } 
  
    useEffect(() => {
        getList()
    }, [])

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }  

    console.log(data)
    return (

        <SafeAreaView>

            <View style={{top: calculHeight(0.88)}}>
                <FlatList 
                    data={data}
                    renderItem={(
                        {item}) => 
                            <ItemList 
                                message={item.content} 
                                pseudo={item.pseudo}
                                notifications={item.notifications}
                                created_at={item.last_send_date}
                                avatar={item.urlAvatar}
                                idChat={item.conversation_id}
                            />
                    }
                    keyExtractor={item => item.id}
                />   
            </View>
        </SafeAreaView>
        
    )
   
    
}

export default ListMyMessages