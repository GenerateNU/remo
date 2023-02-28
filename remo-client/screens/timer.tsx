import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Timer({navigation}) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const route = useRoute();

  const data = route.params?.data;
  const onStopPress = () => {
    const send_data = {
      time:formatTime(elapsedTime), 
      title: data.title
    };
    navigation.navigate('PostReadingLog', {data:send_data});
  };
  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = timeInMs % 1000;

    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
    const paddedMilliseconds = milliseconds.toString().padStart(3, '0');

    return `${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
    }, 10);
  };

  const handleStop = () => {
    Alert.alert(
      'Stop Timer',
      'Are you sure you want to stop reading?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Yes', onPress: () => {
          setIsRunning(false);
          clearInterval(intervalRef.current);
          onStopPress();
          setElapsedTime(0);
        }},
      ],
      {cancelable: false},
    );
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Book Title:</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.header_data}>{data.title}</Text>
      </View>
      {!isRunning && (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>START READING</Text>
          </TouchableOpacity>
        )}
      
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      {isRunning && (
          <TouchableOpacity style={styles.button} onPress={handleStop}>
            <Text style={styles.buttonText}>STOP READING</Text>
          </TouchableOpacity>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  timer_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  timer: {
    paddingVertical: 10,
    fontSize: 50,
    fontWeight: 'bold',
    paddingLeft: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
    paddingBottom: 75,
    borderBottomColor: '#ccc',
  },
  header_title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 100,
  },  
  header_data: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: '22%',
    marginBottom: 5,
    borderWidth: 5,
    borderColor: '#ccc',
    padding: 1,
  },
  selected: {
    borderColor: 'blue',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  isbn: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
