import { StyleSheet, Text, View, TouchableOpacity, Platform, NativeModules } from 'react-native';
import axios from 'axios';

const { NativeErrorModule } = NativeModules;

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

export default function App() {
  // const onHandledErrorButton = () => {
    // try {
    //   const obj = null; 
    //   obj.someMethod(); 
    // } catch (error) {
    //   console.log('Handled null stack trace:', error.stack);
    //   sendErrorLog(error);
    //   return error;
    // }
  // }

  const onHandledErrorButton = () => {
    // NativeErrorModule.throwError((errorStackTrace) => {
    //   console.log("java stack trace: ", errorStackTrace)
    // });
    NativeErrorModule.throwError();
  }
  
  const onUnhandledErrorButton = () => {
    const error = new Error('Intentional unhandled error: promise rejection');
    Promise.reject(error);
    console.log('Unhandled error stack trace:', error.stack);
    sendErrorLog(error);
    return error;
  }

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