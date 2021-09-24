import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptScreen from '../../Components/OptScreen/index.';
import CodeScreen from '../../Components/CodeScreen';
import Dashboard from '../../Components/Dashboard';

const Stack = createNativeStackNavigator();

export default function MainNavigator(){
    
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="OPT Screen" component={OptScreen} />
            <Stack.Screen name="Code Screen" component={CodeScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )   
}