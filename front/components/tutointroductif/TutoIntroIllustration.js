import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import ImageViewer from '../base/ImageViewer';
const colorScheme = useColorScheme();
const svgIntro = require('../../assets/introStepByStepRessources/svgIntro.svg');
const button = colorScheme === 'light' ? require('../../assets/introStepByStepRessources/redpinkOctogoneButton.svg') : require('../../assets/introStepByStepRessources/skyblueOctogoneButton.svg');


import { dimensions, margin } from '../../styles/Base';
const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
}

const tutoIntroIllustration = () => {
  return (
    <View style={styles.container}>
        <Text>      </Text>
        <ImageViewer PlaceholderImageSource={svgIntro} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
      width: "71%",      
      height: "2150%",
      top: 180,
      left:10,
      justifyContent: 'center',
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      width: dimensions.fullWidth -10,      
      height: dimensions.fullHeight -5,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default tutoIntroIllustration