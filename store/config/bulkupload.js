import { collection, doc, setDoc } from "firebase/firestore";
import { carouselImages } from "../restaurants";
import { db } from "./firebaseConfig";

const restaurestData = carouselImages
const uploadData = async () =>{
    try{
        for(let i = 0 ; i < restaurestData.length; i++){
          const restaurant = restaurestData[i]  
          const docRef = doc(collection(db, "carousel"), `carousel_${i+1}`);
          await setDoc(docRef, restaurant)
        }
        console.log("Data uploaded successfully")
    }
        catch (error){
            console.error("Error uploading data: ", error)

        }
    }
export default uploadData;