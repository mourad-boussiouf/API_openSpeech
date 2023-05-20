import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FrFlag from '../../assets/countriesFlags/FrFlag';
import GbFlag from '../../assets/countriesFlags/GbFlag';
import { dimensions, margin, padding } from '../../styles/Base';
import TitreViewer from '../base/TitreViewer';
import ButtonSubmit from '../base/ButtonSubmit';
import updateLanguage from '../../queries/queries';

const LangueFormulaire = () => {

  const { colors } = useTheme();

  const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
  }

  const calculHeight = (pourcent) => {
    return dimensions.fullHeight - dimensions.fullHeight * pourcent
  }
 
  const [selected, setSelected] = useState('fr');
  const [value, setValue] = useState('fr');
  let buttonString = 'fr';
  
  const handleButtonPress = (buttonValue) => {
    buttonString = buttonValue;
    setSelected(buttonValue);
    setValue(buttonValue);
    console.log(buttonValue);
  };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent:'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    top : calculHeight(0.90314159265359),
    left : calculWidth(0.71314159265359),    
    marginTop: -50, 
  },
  button: {
    borderRadius: 7,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    padding: 10,
    verticalAlign: 'center',
    opacity: 0.55,
    top: calculHeight(0.91314159265359),
    height: calculHeight(0.84),
    width: calculWidth(0.57),
    marginTop: 17,
  },
  selectedButton: {
    borderRadius: 7,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    padding: 10,
    top: calculHeight(0.91314159265359),
    height: calculHeight(0.84),
    width:calculWidth(0.57),
    marginTop: 17,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
  return (
    <View style={styles.container}>
      <TitreViewer titre="Profile"  sousTitre={""}  />
      <TouchableOpacity
        style={selected === 'fr' ? styles.selectedButton : styles.button}
        onPress={() => handleButtonPress('fr')}
      >
        <FrFlag style={styles.buttonText}></FrFlag>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected === 'en' ? styles.selectedButton : styles.button}
        onPress={() => handleButtonPress('en')}
      >
        <GbFlag style={styles.buttonText}></GbFlag>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      </TouchableOpacity>
      <ButtonSubmit style={{position:"absolute", }} titre="GO !" />
    </View>
  );
};
export default LangueFormulaire;