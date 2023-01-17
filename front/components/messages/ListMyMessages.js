import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { API_USERS } from '../../services/config'

const ListMyMessages = () => {

    const UrlApiUsers = API_USERS + '/list'

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