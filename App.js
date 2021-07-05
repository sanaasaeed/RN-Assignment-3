import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, SafeAreaView, Alert , Pressable} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
	const [values, setValues] = useState([]);
	const [id, setId] = useState(0);
	var val;
  const confirmDeletion = () => {
		Alert.alert(
			"Are You Sure?",
			"This would delete all elements.",
			[
				{
				text: "Cancel",
				onPress: () => {},
				style: "cancel"
				},
				{ text: "OK", onPress: () => { setValues([]); setId(0); } }
			]
		)
	}
	return (
		<SafeAreaView style={styles.container}>
    <View style={styles.container}>

			<Text>Enter text here: </Text>
			<TextInput
				style = {styles.input}
				onChangeText={(newValue) => { val = newValue }}
				clearButtonMode={'always'}
				clearTextOnFocus={true}
			/>
      <Pressable style={styles.button} onPress={() => {
					setValues([...values, { id, val }]);
					setId(id + 1);
					console.log(id);
				}}>
        <Text style={styles.text}>Add</Text>
      </Pressable> 
      
      <Pressable style={styles.button} onPress={confirmDeletion}>
        <Text style={styles.text}>Clear</Text>
      </Pressable> 
      
			
			<FlatList
				keyExtractor={(item) => { item.id }}
				data={values}
				renderItem={({ item }) => {
					return(
						<View>
							<TextInput
								style = {styles.input}
								defaultValue={item.val}
							/>
						</View>
					)
				}}
			/>
      </View>
		</SafeAreaView>
	)
}



const styles = StyleSheet.create({
   container: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    padding: 8,
  },
	input: {
    width: 300,
    outline: "none",
    padding: 10,
    margin: 5,
    borderColor: "lightgray",
    borderRadius: "3px",
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 10,
    marginTop:10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default App;