import { View, Text } from 'react-native'
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import ImageViewer from './ImageViewer';
import { dimensions, margin } from '../../styles/Base';

const ButtonNextOctogon = ({onPress}) => {

    const colorScheme = useColorScheme();
    const buttonNext = colorScheme === 'light' ? require('../../assets/introStepByStepRessources/redpinkOctogoneButton.svg') : require('../../assets/introStepByStepRessources/skyblueOctogoneButton.svg');
    const colorTransparent = colorScheme === 'light'? "#252525":"#FFFFFF";
    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }
    
    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }
    
    const styles = StyleSheet.create({
        nextButton: {
            width: 70,      
            height: 70,
            justifyContent: 'center',
            lignItems: 'center',
            zIndex: 100,
            elevation: 3,
        },
        container: {
            width: 70,      
            height: 70,
            backgroundColor: 'rgba(100, 100, 100, 0)',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: calculHeight(1.15)
        }
    });

  return (
    <View style={styles.container}>
        <ImageViewer PlaceholderImageSource={buttonNext} style={styles.nextButton}/>
    </View>
  )
}
export default ButtonNextOctogon;