import React from "react";
import { View, Text, StyleSheet, Image,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';

const IntroItem = ( {item} ) => {

    const { colors } = useTheme();
    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        container2: {
            flex : 1,
            justifyContent:'center',
            height: "300%",
          },
        title: {
            position: "absolute",
            top: calculHeight(0.51),
            alignSelf: "center",
            color: colors.primary,
            fontWeight:'800',
            fontSize: 28,
            marginBottom : 10,
            textAlign: 'center'
        },
        description:{
            position: "absolute",
            top: calculHeight(0.41),
            alignSelf: "center",
            color: colors.border,
            fontWeight:'800',
            color: '#62656b',
            textAlign:'center',
            paddingHorizontal: 64,
        },
        text: {
            justifyContent: "center",
            alignSelf: "center",
            fontWeight: '800',
            fontSize: 24,
            color: '#493d8a',
            textAlign: 'center',
            height: "200%",
        }
    });
    
    return (

        <View style={styles.container2}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.description}>SCREEEN</Text>
        </View>

    )
}

export default IntroItem;
