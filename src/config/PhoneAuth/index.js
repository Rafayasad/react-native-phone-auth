import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

const sendOPT = (number) =>{
    if(!number){
        Alert.alert('Error', 'Please Enter Number');
    }

    return auth().signInWithPhoneNumber(number)
}

const confirmCode = (state,code) =>{
    return state.confirm(code)
    .then(()=>{})
    .catch(err => Alert.alert(err.code , err.message))
}

export {
    sendOPT,
    confirmCode
}