import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

// const handleUncaughtException = (error) => {
//   console.error('Uncaught exception:', error.message);
//   if (error.stack) {
//     console.error('Stack trace:', error.stack);
//     // Insert log to error reporting service or analytics platform
//   }
//   Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
// };


// // global error handler for uncaught exceptions
// if (typeof global !== 'undefined') {
//   global.onerror = (message, source, line, column, error) => {
//     handleUncaughtException(error);
//   };
// }

// console.log("hey:", Platform.OS)
// const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080';

const sendErrorLog = async (error) => {
  try {
    // const response = await axios.post('http://localhost:8080/log', {
      const response = await axios.post('http://10.0.2.2:8080/log', {
      message: error.message,
      stackTrace: error.stack,
    });
    console.log('Error logged successfully:', response.config.data);
  } catch (err) {
    console.error('Failed to log error:', err);
  }
};

// const fetchLogStatus = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/log');
//     console.log('Log status:', response.data);
//   } catch (err) {
//     console.error('Failed to fetch log status:', err);
//   }
// };

export default function App() {
  const onHandledErrorButton = () => {
    // const error = new Error('Intentional handled error');
    // console.error('Handled error stack trace:', error.stack);
    // sendErrorLog(error);
    // return error;
    try {
      const obj = null; 
      obj.someMethod(); 
    } catch (error) {
      // console.error('Handled null stack trace:', error.stack);
      console.log('Handled null stack trace:', error.stack);
      sendErrorLog(error);
      return error;
    }
  }
  
  const onUnhandledErrorButton = () => {
    const error = new Error('Intentional unhandled error: promise rejection');
    Promise.reject(error);
    // console.error('Unhandled error stack trace:', error.stack);
    console.log('Unhandled error stack trace:', error.stack);
    sendErrorLog(error);
    return error;
  }

  // useEffect(() => {
  //   fetchLogStatus();
  // }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandledErrorButton}>
        <View style={styles.button}>
          <Text>
            handled error
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onUnhandledErrorButton}>
        <View style={styles.button}>
          <Text>
            unhandled error
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 60,
    backgroundColor: 'pink',
    borderWidth: 1,
    marginBottom: 10, 
    alignItems: "center",
    justifyContent: 'center'
  }
});

// console.log(x)