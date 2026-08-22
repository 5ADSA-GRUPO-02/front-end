import axios from 'axios';
import { Platform } from 'react-native';

// No Android Emulator usa 10.0.2.2. Na web/iOS usa localhost. Para celular físico, coloque seu IP local (ex: http://192.168.1.X:8000)
const getBaseURL = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8000';
  }
  return 'http://localhost:8000';
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
