import {  Text, View, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import "tailwindcss/tailwind.css";

export default function Menu() {
  return (
    <View className="w-full h-24 absolute bottom-0 flex flex-row justify-around items-center">
      <View className="flex-1 p-3 m-3 rounded-2xl bg-[#8a7a52] ">
       <Text
          className="text-center text-sm italic font-medium text-zinc-50 "
          onPress={() => Alert.alert("Button 1")}
        >
          Місця для підтримки воїна
        </Text>
      </View>
      <View className="flex-1 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-sm italic font-medium text-zinc-50 "
          onPress={() => Alert.alert("Button 2")}
        >
          поради для праці з бійцями
        </Text>
      </View>
      <View className="flex-1  p-3 m-3 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-sm italic font-medium text-zinc-50 "
          onPress={() => Alert.alert("Button 3")}
        >
          Таймер
        </Text>
      </View>
      <View className="flex-1 p-3 m-3 rounded-2xl bg-[#8a7a52]">
        <Text
          className="text-center text-sm italic font-medium text-zinc-50 "
          onPress={() => Alert.alert("Button 4")}
        >
          капеланський чат
        </Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
