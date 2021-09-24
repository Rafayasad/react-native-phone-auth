import React, { useEffect , useState } from 'react';
import {Text, View , Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
// import { TextInput } from 'react-native-paper';
import { TextInput , Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


export default function OptScreen(props){
  const [number, setNumber] = useState('');

  const signInWithPhoneNumber = async () => {

    const confirmation = await auth().signInWithPhoneNumber(number);
    console.log('conformation==>',confirmation)
    if(confirmation._auth._authResult){
        props.navigation.navigate("Code Screen",{
            "confirmationCode" : confirmation,
            "number" : number
        })
    }
    else{
        console.log('error')
    }
    // setConfirm(confirmation);
  }

  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }

  // if (!confirm) {
  //   return (
  //     <Button
  //       title="Phone Number Sign In"
  //       onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
  //     />
  //   );
  // }

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return(
    <View>
     <Image source={require('../../../assets/authentication.png')} style={{alignSelf:"center"}}/>
      <TextInput
      style={{width:300,alignSelf:'center'}}
      keyboardType = 'number-pad'
      maxLength={13}
      placeholder="+92 3115948721"
      value={number}
      onChangeText={number => setNumber(number)}
    />
    <Button mode="outlined" style={{marginTop:50,width:200,alignSelf:'center'}} onPress={()=>signInWithPhoneNumber()}>
      Send OPT
    </Button>
    </View>
  )
}
