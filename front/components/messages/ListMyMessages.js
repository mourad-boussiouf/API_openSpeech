import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { API_CONV } from '../../services/config'
import { useRoute } from '@react-navigation/native'

const ListMyMessages = () => {

    const route = useRoute()

    console.log(route.params.id)

    const UrlApiUsers = API_CONV + '/mine'

    const getList = async () => {

        await fetch(UrlApiUsers, {
            method: "GET",
        })
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(response.status)
                        console.log(data.message)
                    })
            })

    } 

    useEffect(() => {
        getList()
    }, [])

    return (
        <View>
        <Text>Hello</Text>
        </View>
    )
}

export default ListMyMessages