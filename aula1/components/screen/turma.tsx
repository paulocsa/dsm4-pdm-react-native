import Title from '@/components/ui/text/title'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,View, Text,ScrollView,TextInput, Image } from 'react-native';


export default function TurmaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turma: DSM4</Text>
      <Title/>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/7092/7092289.png',
        }}
        style={{width: 200, height: 200}}
      />
              <TextInput
          style={styles.input}
          value={"Insira o texto"}
        />
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the Turma */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});