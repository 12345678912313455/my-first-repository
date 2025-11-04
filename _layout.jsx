import { Stack } from "expo-router";
import { Colors } from "../constants/Colors.js";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomSplash from "./SplashScreen";
import { useState, useEffect } from "react";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {

    return <CustomSplash />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home",headerShown:false }} />
        <Stack.Screen name="(teamsdetails)" options={{ headerShown:false }} />
      </Stack>
    </>
  );
}
