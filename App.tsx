import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InputScreen from './screens/inputScreen';
import TimerScreen from './screens/timerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  InputScreen: undefined;
  TimerScreen: {workTime: string, restTime:string};
}
const Stack = createStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{title : "Input Screen"}}
        />
        <Stack.Screen
          name="TimerScreen"
          component={TimerScreen}
          options={{title: "Timer Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
