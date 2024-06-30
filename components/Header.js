import { Button, SafeAreaView, Text, View, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-[#81613c]">
      
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
