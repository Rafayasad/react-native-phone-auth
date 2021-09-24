import React, { useState } from "react";
import { Button , TextInput } from "react-native-paper";
import { Text , Image , View } from "react-native";

export default function CodeScreen({route,navigation}){

    const [verificationCode,setVerificationCode] = useState('')
    const {confirmationCode , number} = route.params;

    console.log(confirmationCode)
    console.log(number)

    const confirmCode= async () => {
    try {
      const result = await confirmationCode.confirm(verificationCode);
      console.log(result)
      navigation.navigate('Dashboard')

    } 
    catch (error) {
      console.log('Invalid code.');
    }
    }
    
    return(
        // <Text>codeScreen</Text>
        <View>
        <Image source={require('../../../assets/authentication.png')} style={{alignSelf:"center"}}/>
         <TextInput
         style={{width:300,alignSelf:'center'}}
         keyboardType = 'number-pad'
         maxLength={13}
         placeholder="Enter Your Verification Code"
         value={verificationCode}
         onChangeText={verificationCode => setVerificationCode(verificationCode)}
       />
       <Button mode="outlined" style={{marginTop:50,width:200,alignSelf:'center'}} onPress={()=>confirmCode()}>
         CONFIRM CODE
       </Button>
       </View>
    )
}
