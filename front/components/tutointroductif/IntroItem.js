import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';

const IntroItem = ( {item} ) => {

    const { width } = useWindowDimensions();

    const { colors } = useTheme();

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }
    
    const calculScale = (size) => {
        let scale = dimensions.fullWidth / 320
        return size * scale
    }

    const darklight = colors === 'light' ? 0 : 1;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20
        },
        title: {
            marginTop: item.title.length > 26 ? 2.5 : 0,
            justifyContent: "center",
            alignSelf: "center",
            color: colors.primary,
            fontWeight:'800',
            fontSize: item.title.length > 26 ? 21 : 24,
            textAlign: 'center',
            flexWrap: "wrap",
        },
        description:{
            top: calculHeight(0.98),
            alignSelf: "center",
            color: colors.card,
            fontWeight:'300',
            fontSize: 16,
            textAlign: "center",
            paddingHorizontal: 64,
            flexWrap: "wrap",
            marginBottom: 85,
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
        <View style={[styles.container, { width }]}>
            {
                item.id === 1 ?
                <>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>
                    {item.description[0]}
                    <Text style = {{fontWeight: "600"}}>{item.description[1]}</Text>
                    {item.description[2]}
                    </Text> 
                </>
                :
                <>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text> 
                </>
            }
        </View>
    )
}

export default IntroItem;
