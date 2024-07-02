import { Button, SafeAreaView, Text, View, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";

import "tailwindcss/tailwind.css";

export default function Menu() {
  return (
    <View className="w-full h-28 absolute bottom-0 flex flex-row justify-around items-center">
      <View className="flex-1 p-3 m-3 rounded-2xl bg-[#8a7a52] ">
        <Text
          className="text-center text-gray-50 "
          onPress={() => Alert.alert("Button 1")}
        >
          Menu 1
        </Text>
      </View>
      <View className="flex-1 p-3 m-3 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-gray-50 "
          onPress={() => Alert.alert("Button 2")}
        >
          Menu 2
        </Text>
      </View>
      <View className="flex-1  p-3 m-3 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-gray-50 "
          onPress={() => Alert.alert("Button 3")}
        >
          Menu 3
        </Text>
      </View>
      <View className="flex-1 p-3 m-3 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-gray-50 "
          onPress={() => Alert.alert("Button 4")}
        >
          Menu 4
        </Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
