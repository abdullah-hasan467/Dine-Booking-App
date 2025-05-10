import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Restaurent = () => {
    const {restaurent} = useLocalSearchParams();
    return (
        <SafeAreaView>
            <View>
                <Text>
                    {restaurent}
                </Text>
            </View>
        </SafeAreaView>
    )
}



export default Restaurent;
