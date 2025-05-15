import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { TouchableOpacity, View, Text, Platform } from 'react-native';

const DatePickerComponent = ({date, setDate}) => {
  const [show, setShow] = useState(false);


  const handlePress = () => setShow(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date ;
    setShow(false)
    setDate(currentDate)
    if (Platform.OS === 'android') setShow(false);
  };

  return (
    <View className="flex flex-row">
      <TouchableOpacity onPress={handlePress}
       className={` rounded-lg text-white text-base ${
          Platform.OS === "android" && "px-2 py-1 justify-center bg-[#474747]"
        } `}
      >
        <Text className="px-3 py-3 bg-[#474747] text-white text-xl"
>
  {date.toLocaleDateString()}
</Text>

      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          minimumDate={new Date()}
          maximumDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
          onChange={onChange}
          {...(Platform.OS === 'ios' ? { textColor: '#f49b33' } : {})}
        />
      )}
    </View>
  );
};

export default DatePickerComponent;
