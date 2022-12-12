import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import getConfig from '../secrets/secret'

var firebaseConfig = getConfig();
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export {
  auth
}
