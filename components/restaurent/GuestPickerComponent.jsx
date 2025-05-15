import { Text, TouchableOpacity, View } from "react-native";

const GuestPickerComponent = ({ selectedNumber, setSelectedNumber }) => {
  const decrement = () => {
    if (selectedNumber > 1) setSelectedNumber(selectedNumber - 1);
  };
  const increment = () => {
    if (selectedNumber < 12) setSelectedNumber(selectedNumber + 1);
  };
  return (
    <View className="flex flex-row items-center rounded-lg text-white text-base">
      <TouchableOpacity onPress={decrement} className="rounded">
        <Text className="text-white text-xl border border-[#f49b33] rounded-lg p-2">
          -
        </Text>
      </TouchableOpacity>
      <Text className="p-2 text-white bg-[#474747] border border-[#474747] text-xl mr-5 ml-3">
        {selectedNumber}
      </Text>
      <TouchableOpacity onPress={increment} className="rounded">
        <Text className="text-white text-xl border border-[#f49b33] rounded-lg p-2">
          +
        </Text> 
      </TouchableOpacity>
    </View>
  );
};

export default GuestPickerComponent;