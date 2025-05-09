import { BlurView } from 'expo-blur';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import "../../global.css";
import uploadData from '../../store/config/bulkupload';
import { restaurants } from '../../store/restaurants';



const Home = () => {
  useEffect(() => {
    uploadData()
  },[])

    const renderItem = ({ item }) => (
        <TouchableOpacity
      className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md"
      style={{  backgroundColor: '#5f5f5f',
        maxHeight: 256,     // max-h-64 (64 * 4 = 256px)
        maxWidth: 320,      // max-w-xs (xs ~ 20rem = 320px)
        justifyContent: 'center',
        borderRadius: 12,   // rounded-lg
        padding: 16,        // p-4
        marginHorizontal: 16, // mx-4
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,  }}
    >
<Image
  resizeMode="cover"
  source={{ uri: item.image }}
  style={{ width: 160, height: 112, borderRadius: 10, marginTop: 8, marginBottom: 4, justifyContent: 'center', alignItems: 'center' }}
  className="rounded-lg mb-2"
/>


      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white text-base mb-2">{item.address}</Text>
      <Text className="text-white text-base mb-2">
        Open: {item.opening} - Close: {item.closing}
      </Text>
    </TouchableOpacity>


    )
    return (
        <SafeAreaView
        style={[
          { backgroundColor: "#2b2b2b", marginleft: 40},
          Platform.OS == "android" && { paddingBottom:30 },
          Platform.OS == "ios" && { paddingBottom: 20 },
        ]}
      >
        <View className="flex items-center">
          <View className="bg-[#2f2f2f] w-11/12 rounded-lg shadow-lg 
          justify-between items-center flex flex-row p-2">
            <View className="flex flex-row">
              <Text
                className={`text-base h-10
                  ${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}
                 align-middle text-white`}
              >
                {" "}
                Welcome to{" "}
              </Text>
              <Image resizeMode="cover" style={{ width: 120, height: 20 }}  source={logo} />
            </View>
          </View>
        </View>
<ScrollView stickyHeaderIndices={[0]}>
<ImageBackground
          resizeMode="cover"
          className="mb-4 w-full bg-[#2b2b2b] h-52 items-center justify-center"
          source={banner}
          style={{ width: 450, height: 200 }}
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text
            style={{fontSize:28, textAlign:"center", padding:10}} className=" font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className=" text-white mr-2 font-semibold" style={{fontSize:24, marginLeft:25}}>
            Special Discount %
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={"#fb9b33"} />
        )}
        <View className="p-4 bg-[#2b2b2b] flex-row items-center mr-5">
        <Text
  style={{
    color: '#fb9b33',
    fontWeight: '600',
    fontSize: 24,
    marginLeft:25
  }}
>
  Our Restaurants
</Text>

        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={"#fb9b33"} />
        )}
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
