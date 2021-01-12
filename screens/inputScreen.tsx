import { StatusBar } from 'expo-status-bar';
import React, {useState, FC} from 'react';
import { TextInput, View, Button, NativeSyntheticEvent, TextInputChangeEventData, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type InputScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'InputScreen'
>;

type InputScreenProps = {
  navigation: InputScreenNavigationProp;
}

const InputScreen : FC<InputScreenProps> = ({navigation}) => {
    const [workTime,setWorkTime] = useState<string>("");
    const [restTime,setRestTime] = useState<string>("");
    const onChangeFuncWork = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
      const value : string = e.nativeEvent.text;
      if(/^\d+$/.test(value) || value.length === 0){
        setWorkTime(value);
      }
    }

    const onChangeFuncRest = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
      const value : string = e.nativeEvent.text;
      if(/^\d+$/.test(value) || value.length === 0){
        setRestTime(value);
      }
    }

    return (
      <View>
        <Text>Enter Work Time</Text>
        <TextInput
          nativeID="work"
          placeholder="Seconds"
          keyboardType="numeric"
          value={workTime}
          onChange={onChangeFuncWork}

        />
        <Text>Enter Rest Time</Text>
        <TextInput
          nativeID="rest"
          placeholder="Seconds"
          keyboardType="numeric"
          value={restTime}
          onChange={onChangeFuncRest}
        />
        <Button
          title="Start workout"
          onPress={() => navigation.navigate('TimerScreen',{workTime,restTime})}
        />
      </View>
    );
};

export default InputScreen;