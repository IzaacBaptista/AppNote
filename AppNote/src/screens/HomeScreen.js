import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  const [nota, setNota] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const novaNota = async () => {
      return await AsyncStorage.setItem("nota", nota);
    };
    novaNota();
  }, [nota]);

  useEffect(() => {
    const retorno = async () => {
      return await AsyncStorage.getItem("nota", setNota);
    };
  });

  return (
    <View style={tw`flex flex-1 items-center`}>
      <Text style={tw`p-2`}>Aplicativo de Notas</Text>
      <Pressable onPress={() => navigation.navigate("AddNoteScreen")}>
        <Text>Vamos adicionar uma nota</Text>
      </Pressable>
    </View>
  );
}
