/* eslint-disable no-unused-vars */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { themes } from './src/assets/themes/themes';
import Main from './src/pages/Index';

export default function App() {
  return (
    <View className="h-full w-full bg-zinc-700">
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  );
}
