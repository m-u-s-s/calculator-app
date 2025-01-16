import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { evaluate } from "mathjs";

export default function App() {
  const [input , setInput] = useState('')
  const [result , setResult] = useState('')

  const onButtonPress = (value) => {
    if (value === '=') {
      try{
        setResult(evaluate(input))
      }
      catch(error){
        setResult('error')
      }
    }
    else if (value === 'C') {
      setInput('');
      setResult('')
    }
    else {
      setInput(input + value)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}> {result} </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputText}
        value={input}
        editable={false}
        onChangeText={(text) => setInput(text)}
        keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map(
          (item, index) => (
            <TouchableOpacity 
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(item)}
            >
                <Text style={styles.buttonText}> {item} </Text>
            </TouchableOpacity>
          )
        )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020c17'
  },
  resultContainer: {
    flex: 2 ,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 40,
  },
  resultText: {
    fontSize: 45,
    color: '#fff'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 30,
    color: "#fff"
  },
  buttonContainer: {
    flex: 7,
    height: 90,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#06061f',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  button:{
    fontSize: 24,
    width: '20%',
    height: 40,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: "#12192b",
    backgroundColor: '#12192b',
    margin: 5,
    elevation: 3, // Ombre sur Android
    shadowColor: '#000', // Ombre sur iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff'
  }
});
