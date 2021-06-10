import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Image, StatusBar } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { Asset } from "expo-asset";
import {Ionicons} from "@expo/vector-icons";
import Stack from "./navigation/Stack";

const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

  const cacheFonts = fonts => fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

  export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
    const images = cacheImages([
      "https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
    const onFinish = () => setIsReady(true);
    return isReady ? (
      <>
        <NavigationContainer>
          <Stack/>
        </NavigationContainer>
        <StatusBar barStyle="light-content"/>
      </>
    ) : (
      <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}