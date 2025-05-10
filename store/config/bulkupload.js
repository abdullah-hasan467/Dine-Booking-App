import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../restaurants";
import { db } from "./firebaseConfig";

const restaurestData = slots
const uploadData = async () =>{
    try{
        for(let i = 0 ; i < restaurestData.length; i++){
          const restaurant = restaurestData[i]  
          const docRef = doc(collection(db, "slots"), `slots_${i+1}`);
          await setDoc(docRef, restaurant)
        }
        console.log("Data uploaded successfully")
    }
        catch (error){
            console.error("Error uploading data: ", error)

        }
    }
export default uploadData;