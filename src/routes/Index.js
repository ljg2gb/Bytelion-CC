import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

// const Stack = createStackNavigator();

export default function Index() {
    return(
        <Home/>
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name={"Home"} component={Home} options={{ title: 'Home Page' }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}