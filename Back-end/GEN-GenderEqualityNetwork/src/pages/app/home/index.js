import React from "react";
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../../../../assets/colours';
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <StatusBar hidden={true} />

      <View style={styles.header}>
        <View>
           <Image
           //PRECISO RETORNAR A FOTO DE PERFIL
            source={require('../../../../assets/images/profile.png')}
            style={styles.pictureProfile}
            resizeMode="contain"
            /> 
            
            {/* PRECISO RETORNAR O NOME DO PERFIL, SERÁ ASSIM? -> <Text>{ProjectName}</Text> */}
            <Text style={styles.projectName}>PROJETO VIVER BEM</Text>
        </View>

        <View>
          {/* PRECISO RETORNAR A DESCRIÇÃO */}
          <Text style={styles.descriptionProject}>O projeto viver bem fica localizado na rua salgadinho, 75 em Arthur Lundgren 2, Paulista e atua para amenizar os efeitos da desigualdade de gênero.</Text>
        </View>

        <View>
          <Image 
          source={require('../../../../assets/images/bell.png')}
          style={styles.bell}
          resizeMode="contain"
          />
          <Image 
          source={require('../../../../assets/images/calendar.png')}
          style={styles.calendar}
          resizeMode="contain"
          />
        </View>
      {/* FIM DO HEADER */}
      </View>

      <View style={styles.newsContainer}>
        <Text>Novidades</Text>
        <View style={styles.news}>

        </View>
        <View style={styles.news}>

        </View>
        <TouchableOpacity><Text>Ver mais</Text></TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text>Localização</Text>
        <MapView style={styles.map} />
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    backgroundColor: Colours.backgroundColour
  },

  header:{
    backgroundColor: Colours.headerColour,
    borderRadius: 20,
    width: '100%',
    padding: '30%',
    zIndex: 1
  },

  pictureProfile: {
    position: 'absolute',
    width: '60%',
    top: -330,
    left: -90,
    padding: 0,
    margin: 0,
    border: 0,
    zIndex: 2 // Garante que a imagem fique na frente da view board
  },

  projectName: {
    width: '90%',
    fontSize: 25,
    fontWeight: 'bold',
    top: -55,
    left: 20,
    color: Colours.offWhite,
    position: 'absolute', // Faz a imagem flutuar
    zIndex: 1 // Certifica que a imagem está acima de todas as views
  },

  descriptionProject:{
    width: '150%',
    fontSize: 10,
    top: 40,
    left: -80,
    color: Colours.offWhite,
    position: 'absolute',
    zIndex: 1
  },

  bell:{
    position: 'absolute',
    width: '17%',
    top: -355,
    right: -90,
    zIndex: 3
  },
  calendar: {
    position: 'absolute',
    top: -230,
    right: -95,
    width: '25%',
    zIndex: 3
  },

  news:{
    width: '45%',
    margin: 20,
    padding: 50,
    backgroundColor: Colours.offWhite,
  },

  mapContainer:{
    
  },
  map: {
    marginHorizontal: 20,
    width: '90%',
    height: '30%',
    marginTop: 10,
  },
});
