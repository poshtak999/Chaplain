import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import "tailwindcss/tailwind.css";

export default function Main() {
  return (
    <View className="flex-1 pt-5">
      <View className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-3">
        <View className="px-6 py-4">
          <Text className="font-bold text-xl mb-2">
            тут буде допомога капеланам
          </Text>
          <Text className="text-gray-700 text-base">
            Це приклад картки, створеної за допомогою Tailwind CSS.
          </Text>
        </View>
      </View>

      <View className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-3">
        <View className="px-6 py-4">
          <Text className="font-bold text-xl mb-2">
            тут буде допомога капеланам
          </Text>
          <Text className="text-gray-700 text-base">
            Це приклад картки, створеної за допомогою Tailwind CSS.
          </Text>
        </View>
      </View>

      <View className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-3">
        <View className="px-6 py-4">
          <Text className="font-bold text-xl mb-2">
            тут буде допомога капеланам
          </Text>
          <Text className="text-gray-700 text-base">
            Це приклад картки, створеної за допомогою Tailwind CSS.
          </Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
