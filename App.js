import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,   } from 'react-native';

export default function App() {
  return (

   

    <View style={styles.container}>
      <Text style={styles.hello} >hello   </Text>
      <Text>xin chào tôi là khắc thắng</Text>

      <Text style={styles.instructions}> 
       Double tap R on your keyboard to reload,{'\n'}
       Shake or press menu button for dev menu
       </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  hello: {
      textAlign: 'center',
      fontSize: 30,
      margin: 12,
      color: 'red',
      
      
  },

  instructions:{
    textAlign: 'center',
      
      margin: 12,

  }
});
