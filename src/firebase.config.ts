import { initializeApp } from "@firebase/app";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6iu0BYLyNI6vqUuRq106pKbgYZlAuGgk",
  authDomain: "maria-torrecillas.firebaseapp.com",
  projectId: "maria-torrecillas",
  storageBucket: "maria-torrecillas.appspot.com",
  messagingSenderId: "925394679318",
  appId: "1:925394679318:web:16497242e3210e777f6737",
  measurementId: "G-N5MHCP0E0G",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
