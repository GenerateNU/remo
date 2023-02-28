import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ReadingLog() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

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
      'Are you sure you want to stop the timer?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Yes', onPress: () => {
          setIsRunning(false);
          clearInterval(intervalRef.current);
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
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonContainer}>
        {!isRunning && (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text>Start</Text>
          </TouchableOpacity>
        )}
        {isRunning && (
          <TouchableOpacity style={styles.button} onPress={handlePause}>
            <Text>Pause</Text>
          </TouchableOpacity>
        )}
        {isRunning && (
          <TouchableOpacity style={styles.button} onPress={handleStop}>
            <Text>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
