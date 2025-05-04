import React from 'react';
import { ScrollView , StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Profile = () => {
    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={{height:'100%'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30}}>Profile</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
   
}

const styles = StyleSheet.create({})

export default Profile;
