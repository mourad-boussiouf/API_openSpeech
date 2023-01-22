import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../../styles/Base';

const SearchBar = () => {

    const {colors} = useTheme()

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }  


    const styles = {
        searchbar: {
            position: "absolute",
            top: calculHeight(0.93),
            flexDirection: "row",
            alignSelf: "center",
            borderRadius: 25,
            padding: padding.s,
            borderColor: colors.border,
            borderWidth: 1,
            alignItems: "center",
            // width: calculWidth(0.3)
        },
        icon: {
            marginLeft: margin.s,
            opacity: 0.9,
        },
        input: {
            marginLeft: margin.xs,
            height: 20,
            width: calculWidth(0.35),
            color: colors.background
        }
    }

    return (
        <View style={styles.searchbar}>
            <Ionicons name="search-outline" size={18} color={colors.background} style={styles.icon} />
            <TextInput 
                style={styles.input}  
                placeholder="Recherche"          
                placeholderTextColor={colors.border}
            />
        </View>
    )
}

export default SearchBar