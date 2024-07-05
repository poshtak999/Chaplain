import {  SafeAreaView,  } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import "tailwindcss/tailwind.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-[#81613c]">
      <Header />
      <Main />
      <Menu />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
