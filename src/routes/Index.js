import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Index() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Login"} component={Login} options={{ title: 'Login Page' }} />
                <Stack.Screen name={"Home"} component={Home} options={{ title: 'Home Page' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}