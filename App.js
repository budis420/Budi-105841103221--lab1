import React from "react";
import { SafeAreaView, View, Image } from 'react-native';
import CustomButton from './button';
import Teks from './text';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Teks />
        <Image source={require('./assets/mcr.png')} style={{ width: 200, height: 200, marginVertical: 90 }} />
        <CustomButton />
      </View>
    </SafeAreaView>
  );
}