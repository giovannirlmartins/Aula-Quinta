import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import Colours from "../../../assets/colours";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function OngSignUp2() {
  const navigation = useNavigation();
  const [cep, setCep] = useState(null);
  const [logradouro, setLogradouro] = useState(null);
  const [numero, setNumero]  = useState (null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);

  function Validationsign() {
    if(cep != null && logradouro != null && numero != null && bairro != null && cidade != null && estado != null)
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={require("../../../assets/images/logoGen.png")}
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
        </ScrollView>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: Colours.backgroundColour
  },

  imageContainer:{
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 900,
    width: "80%",
    alignSelf: 'center',
    marginTop: -140,
    marginBottom: -500 
  },

  formcontainer: {
    marginHorizontal: 40,
    margin: 8,  },
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