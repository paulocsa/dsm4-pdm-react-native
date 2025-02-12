import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TURMA DSM4</Text>
      <Image
        style={styles.imageDesign}
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 30,
  },
  imageDesign: {
    width: 200,
    height: 200,
  },
});
