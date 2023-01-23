import React, { useState, useRef } from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet, useColorScheme, Animated } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';
import { API_USERS } from '../../services/config';
import ValideWarning from '../warning/ValideWarning';
import { useNavigation } from '@react-navigation/native';
import TextContents from './TutoInstructionsTextContents';
import SvgCharactersDrawRED from './SvgCharactersDrawRED';
import SvgCharactersDrawBLUE from './SvgCharactersDrawBLUE';
import IntroItem from './IntroItem';
import slides from './slides';


const IntroComponent = () => {

    let STORAGE_KEY = [];
    let neverBeenConnected = false;

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    
    const navigation = useNavigation();
    const { colors } =  useTheme();
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const SvgCharactersDraw = colorScheme === 'light' ?  SvgCharactersDrawRED : SvgCharactersDrawBLUE;

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = StyleSheet.create({
        container: {
            flex: 3,
            justifyContent:'center',
            alignItems: 'center',
            position: "absolute", 
            top: calculHeight(0.5623),
            alignSelf: "center",
            color: colors.border,
            height: calculHeight(0.70),
            paddingTop: 20

        },
        illu : {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            position: "absolute", 
            top: calculHeight(0.889),
            alignSelf: "center",
            color: colors.border,
            height: calculHeight(0.70), 
            paddingLeft : 5,
        }
    })
    
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <FlatList 
                data = {slides} 
                renderItem = {({ item }) => <IntroItem item = {item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent :       { contentOffset: { x:scrollX  } } } ], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                />
            </View>
            <View style = {styles.illu}>
                <SvgCharactersDraw/>
            </View>
        </SafeAreaView>        
    );
};

export default IntroComponent;
