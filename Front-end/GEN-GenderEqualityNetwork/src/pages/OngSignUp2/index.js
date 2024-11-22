import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colours from "../../../assets/colours";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SignUp() {
  const navigation = useNavigation();
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero]  = useState ("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  function Validationsign() {
    if(cep != '' && logradouro != '' && numero != '' && bairro != '' && cidade != '' && estado != '')
      {
        home();
      }
    else{
      Alert.alert("Preencha os espaços em branco");   
    }
    function home() {
      navigation.navigate("Home")}; 
  }
 
  const fetchAddress = async () => {
    if (!cep || cep.length < 8) {
      Alert.alert("Erro", "Por favor, insira um CEP válido com 8 dígitos.");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data); // Debug: Verificar retorno da API
      if (response.data.erro) {
        Alert.alert("Erro", "CEP inválido ou não encontrado.");
      } else {
        setLogradouro(response.data.logradouro || "");
        setNumero(response.data.numero || "");
        setBairro(response.data.bairro || "");
        setCidade(response.data.localidade || "");
        setEstado(response.data.uf || "");
      }
    
      
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o endereço.");
    }
  };

  return (
      <View style={styles.container}>
            <Image
            source={require('../../../assets/images/logoGenCad.png')}
            style={styles.image}  
            resizeMode="contain"          
            />
      
      <View style={styles.formcontainer}>
        <Text style={styles.text}>Insira seu CEP para buscar o endereço:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          placeholderTextColor="#808080"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
          onBlur={fetchAddress} // Busca ao sair do campo
        />

        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          placeholderTextColor="#808080"
          value={logradouro}
          onChangeText={setLogradouro}
        />
        <TextInput
          style={styles.input}
          placeholder="Número:"
          placeholderTextColor="#808080"
          value={numero}
          onChangeText={setNumero}
        />

        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#808080"
          value={bairro}
          onChangeText={setBairro}
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#808080"
          value={cidade}
          onChangeText={setCidade}
        />

        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#808080"
          value={estado}
          onChangeText={setEstado}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={() => Validationsign()}
        >
        <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
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
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    width: '50%',
    marginVertical: -100,

  },
  formcontainer: {
    marginHorizontal: 40,
    margin: 8,
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
  },
  input:{
    backgroundColor: Colours.lightBlue,
    margin: 8,
    marginVertical: 12,
    padding: 10,
    borderRadius: 25,
    paddingLeft: 15,
  },
  button: {
    margin: 10,
    padding: 12,
    backgroundColor: Colours.headerColour,
    alignItems: "center",
    paddingHorizontal: 80,
    borderRadius: 40,
    alignSelf: "center",
    paddingVertical: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: 'bold',
    marginVertical: 2,
    alignSelf: "center"
}
});