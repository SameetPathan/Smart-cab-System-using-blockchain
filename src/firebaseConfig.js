import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVnv4A_Fr86p4Ggv4zpg8B4JSjJjlLSU8",
  authDomain: "blockchain-based-cab-system.firebaseapp.com",
  databaseURL: "https://blockchain-based-cab-system-default-rtdb.firebaseio.com",
  projectId: "blockchain-based-cab-system",
  storageBucket: "blockchain-based-cab-system.appspot.com",
  messagingSenderId: "375198484610",
  appId: "1:375198484610:web:0854a191336d181c5c8c9b"
};

export const app = initializeApp(firebaseConfig);

export function register(bookingData){
    const dbb = getDatabase();
    
    set(ref(dbb, 'rides/' + bookingData.phoneNumber), {
      ...bookingData
    });
  
}






