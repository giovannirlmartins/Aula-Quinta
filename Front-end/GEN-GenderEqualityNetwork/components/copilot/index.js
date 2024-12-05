import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { AZURE_API_KEY, AZURE_API_URL } from "@env";

const AzureChatApp = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    setResponse("");

    try {
      const result = await axios.post(
        AZURE_API_URL,
        {
          messages: [{ role: "user", content: input }],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": AZURE_API_KEY, // Cabeçalho exclusivo para Azure OpenAI
          }
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error("Erro na chamada da API:", error);
      setResponse("Erro ao conectar à API.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Enviar" onPress={handleSend} />
      {isLoading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        response && <Text style={styles.response}>{response}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 10 },
  loading: { marginTop: 20, fontSize: 16, color: "blue" },
  response: { marginTop: 20, fontSize: 16 },
});

export default AzureChatApp;
