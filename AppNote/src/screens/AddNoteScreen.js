import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../config/Style";

export default function AddNoteScreen() {
  const navigate = useNavigation();
  const [notas, setNotas] = useState("");

  const salvaNota = async () => {
    const pegarNota = async () => {
      return AsyncStorage.getItem("notasSalvas");
    };

    const notasRecebidas = pegarNota();

    const execSalvarNota = async () => {
      return await AsyncStorage.setItem("notasSalvas", notas);
    };

    execSalvarNota();
  };

  return (
    <View style={styles.container}>
      <Text>Vamos Adicionar uma nota</Text>
      <TextInput value="" style={styles.input} />
      <Pressable style={styles.button} onPress={salvaNota}>
        <Text>Adicionar está Nota</Text>
      </Pressable>
    </View>
  );
}
