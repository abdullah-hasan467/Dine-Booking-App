import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../assets/images/dinetimelogo.png";
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';


const Home = () => {
    return (
        <SafeAreaView
        style={[
          { backgroundColor: "#2b2b2b" },
          Platform.OS == "android" && { paddingBottom:-30 },
          Platform.OS == "ios" && { paddingBottom: 20 },
        ]}
      >
        <View className="flex items-center">
          <View className="bg-red-200 w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
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
<ScrollView>
    
</ScrollView>



  
        </SafeAreaView>
        
    );
}


export default Home;
