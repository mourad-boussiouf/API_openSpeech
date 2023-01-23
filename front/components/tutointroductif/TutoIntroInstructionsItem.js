import React from 'react';
import { View, Text, StyleSheet, FlatList, useColorScheme, SafeAreaView, useWindowDimensions } from 'react-native'
import { dimensions, margin } from '../../styles/Base';

const TutoIntroInstructionsItem = ({item}) => {

  const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
  }
  const calculHeight = (pourcent) => {
  return dimensions.fullHeight - dimensions.fullHeight * pourcent
  }
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent:'center',
      height: 500,
      top: calculHeight(0.99),
      marginBottom: 30,
    },
    title: {
      resizeMode: 'contain',
      fontWeight: '700',
      fontSize: 24,
      color: '#black',
      textAlign: 'center',
      height: "200%",
      elevation:50,
      fontFamily: "Froza Libre"
     },
     descr: {
      resizeMode: 'contain',
      fontWeight: '300',
      fontSize: 14,
      color: '#black',
      textAlign: 'center',
      height: "200%",
      elevation:50,
     }
  });

  return (
      <View style={[styles.container, { width }]}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.descr}>{item.description}</Text>
        </View>
      </View>
  )
}

export default TutoIntroInstructionsItem;