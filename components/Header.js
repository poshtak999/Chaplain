import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import "tailwindcss/tailwind.css";

export default function Header() {
  return (
    <View className="w-full">
      <Text className="text-zinc-50 font-semibold text-center text-4xl">
        Chaplain+
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
