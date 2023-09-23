import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJVZAWT3rpKK5OLGLGmuQ0mvbgs02KMkU',
  authDomain: 'mern-whatsapp-ab288.firebaseapp.com',
  projectId: 'mern-whatsapp-ab288',
  storageBucket: 'mern-whatsapp-ab288.appspot.com',
  messagingSenderId: '76898921259',
  appId: '1:76898921259:web:d94a4e7f87f23d66e3b36e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
