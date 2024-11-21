import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../../../assets/colours';
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            source={require('../../../assets/images/logoGen.png')}
            style={styles.image}  
            resizeMode="contain"          
            />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>CADASTRE-SE AQUI</Text>

          <Text style={styles.text}> Você é representante de qual tipo de instituição?</Text>

          <Text style={styles.textSelect}>Selecione sua categoria:</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.ONGbutton}
            onPress={() => navigation.navigate('OngSignUp')}
          >
            <Text>ONG</Text>
          </TouchableOpacity>

          <Image
            source={require('../../../assets/images/ong.png')}
            style={styles.ONGicon}  
            resizeMode="contain"
          /> 

          <TouchableOpacity
            style={styles.companyButton}
            onPress={() => navigation.navigate('CompanySignUp')}
          >
            <Text>EMPRESA</Text>
          </TouchableOpacity>

          <Image
            source={require('../../../assets/images/company.png')}
            style={styles.companyIcon}  
            resizeMode="contain"
            /> 

        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    backgroundColor: Colours.backgroundColour,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    zIndex: 0
  },

  imageContainer:{
    flex: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
    zIndex: 0
  },

  ONGbutton:{
    position: 'absolute', // Faz a imagem flutuar
    top: -300, // Ajuste conforme necessário para sobrepor a view
    left: 30,
    zIndex: 3,
    backgroundColor: Colours.lightBlue,
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  companyButton:{
    position: 'absolute', // Faz a imagem flutuar
    top: -300, // Ajuste conforme necessário para sobrepor a view
    zIndex: 3,
    right: 25,
    backgroundColor: Colours.lightBlue,
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer:{
    position: 'absolute', // Faz a imagem flutuar
    top: 250,
    justifyContent: "center",
    alignItems: "center"
  },

  image:{
    width: '100%',
    position: 'absolute', // Faz a imagem flutuar
    top: -700, // Ajuste conforme necessário para sobrepor a view
    zIndex: 2,
  },

  ONGicon:{
    width: '17%',
    position: 'absolute', // Faz a imagem flutuar
    top: -470, // Ajuste conforme necessário para sobrepor a view
    left: 43,
    zIndex: 2
  },

  companyIcon:{
    width: '13%',
    position: 'absolute', // Faz a imagem flutuar
    top: -470, // Ajuste conforme necessário para sobrepor a view
    right: 45,
    zIndex: 2
  },

  text: {
    color: Colours.offWhite,
    fontWeight: 'bold',
    margin: 20
  },

  textSelect: {
    color: Colours.offWhite,
    fontSize: 10,
  }

});
