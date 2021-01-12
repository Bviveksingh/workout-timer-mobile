import { StatusBar } from 'expo-status-bar';
import React, {useState, FC} from 'react';
import { Text, View, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type TimerScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TimerScreen'
>;

type TimerScreenRouteProp = RouteProp<
    RootStackParamList,
    'TimerScreen'
>;

type TimerScreenProps = {
    route: TimerScreenRouteProp;
    navigation: TimerScreenNavigationProp;
}

type WorkRestSwitch = "work" | "rest";

const TimerScreen : FC<TimerScreenProps> = ({route,navigation}) => {
    const [workTimer, setWorkTimer] = useState<number>(parseInt(route.params.workTime));
    const [restTimer,setRestTimer] = useState<number>(parseInt(route.params.restTime));
    const [counter,setCounter] = useState<any>(0);
    const [switcher,setSwitcher] = useState<WorkRestSwitch>("work");
  
    const decrement = () => {
      let workingTimer = switcher === "work" ? workTimer : restTimer;
      let changeState = switcher === "work" ? setWorkTimer : setRestTimer;

      if(workingTimer === 0){
        if(switcher === "work") setSwitcher("rest");
        else setSwitcher("work");
      }
      console.log(restTimer);
      changeState(prevState => prevState - 1);
    }

    
  
    const startTimer = () => {
      const counter = setInterval(decrement,1000);
      setCounter(counter);
    }
  
    const stopTimer = () => {
      clearInterval(counter);
    }
  
    return (
      <View>
        <Text>{switcher === "work" ? workTimer : restTimer}</Text>
        <Button
          title="Start timer"
          onPress={() => startTimer()}
        />
        <Button
          title="Stop timer"
          onPress={() => stopTimer()}
        />
  
        <StatusBar style="auto" />
      </View>
    );
};

export default TimerScreen;