import { useLocalSearchParams } from 'expo-router';
import { getDocs, query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../store/config/firebaseConfig';

const Restaurent = () => {
    const {restaurent} = useLocalSearchParams();
    const [restaurentData, setRestaurentData] = useState({});
    const [carouselData, setCarouselData] = useState({});
    const [soltsData, setSlotsData] = useState({});

    const getRestaurentsData = async () => {
        try{
            const restaurentQyuery = query(collection(db, "restaurants"), where("name", "==", restaurent));
            const restaurentSnapshot = await getDocs(restaurentQyuery);
            
            if (restaurentSnapshot.empty) {
                console.log("No matching Restaurents Faound")
                return;
            }
            for (const doc of restaurentSnapshot.docs) {
                const restaurentData = doc.data();
                setRestaurentData(restaurentData);
                console.log("Restaurent Data: ", data);

                const carouselQuery = query(collection(db, "carousel"), where("res_id", "==",doc.ref));
                const carouselSnapshot = await getDocs(carouselQuery);


                const carouselimages = [];
                if (carouselSnapshot.empty) {
                    console.log("No matching Carousel Faound")
                    return;
                }
                carouselSnapshot.forEach((carouselDoc) => {
                    carouselimages.push(carouselDoc.data());
                })
                setCarouselData(carouselimages);




                const slotsQuery = query(collection(db, "slots"), where("ref_id", "==",doc.ref));
                const soltsSnapshot = await getDocs(slotsQuery);


                const slots = [];
                if (soltsSnapshot.empty) {
                    console.log("No matching Slots Faound")
                    return;
                }
                soltsSnapshot.forEach((slotlDoc) => {
                    slots.push(slotlDoc.data());
                })
                setslotsData(slots);

            }

        } catch (error) {
            console.error("Error fetching restaurant data: ", error);
        }

    }

    useEffect(() => {
        getRestaurentsData();
    }, []);
    console.log(restaurentData,carouselData,soltsData);
    return (
        <SafeAreaView 
        style={[
                  { backgroundColor: "#2b2b2b", marginleft: 40},
                  Platform.OS == "android" && { paddingBottom:30 },
                  Platform.OS == "ios" && { paddingBottom: 20 },
                ]}
        >
            <ScrollView className="h-full">
                <View className="flex-1 my-2 p-2">
                <Text className="text-xl text-[#f49b33] ml-3 mr-2 font-semibold">
                    {restaurent}
                </Text>

                <View className="border-b border-[#f49b33]"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Restaurent;
