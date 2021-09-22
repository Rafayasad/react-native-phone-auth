import React, { useEffect , useState } from 'react';
import {Text, View , Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
// import { TextInput } from 'react-native-paper';
import { TextInput , Button } from 'react-native-paper';


export default function App(){
  const [text, setText] = useState('');

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return(
    <View>
     <Image source={require('./assets/authentication.png')} style={{alignSelf:"center"}}/>
      <TextInput
      style={{width:300,alignSelf:'center'}}
      keyboardType = 'number-pad'
      maxLength={13}
      placeholder="+92 3115948721"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Button mode="outlined" style={{marginTop:50,width:200,alignSelf:'center'}} onPress={() => console.log('Pressed')}>
      Send OPT
    </Button>
    </View>
  )
}
