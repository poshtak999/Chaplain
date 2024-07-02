import { Button, SafeAreaView, Text, View, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";
import "tailwindcss/tailwind.css";
export default function Header() {
  return (
      
      <View className="w-full">
        <Text className="text-gray-50 text-center text-4xl">Chaplain+</Text>
        <StatusBar style="light" />
      </View>
      

  );
}
