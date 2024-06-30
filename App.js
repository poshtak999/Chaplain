import { Button, SafeAreaView, Text, View, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";




export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-[#81613c]">
      {/* ---Header--- */}
      <View className="w-full">
        <Text className="text-gray-50 text-center text-4xl">Chaplain+</Text>
      </View>


{/* ---Main--- */}
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
      </View>


      {/* ---Menu--- */}
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
      </View>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <Header />
      <Main />
      <Menu /> */}
   
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
