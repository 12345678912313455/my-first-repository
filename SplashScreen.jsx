import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import ThemedView from "../components/ThemedView";
// import ThemedText from "../components/ThemedText"
import { Colors } from "../constants/Colors.js";
import { useColorScheme } from "react-native";
import { Text } from "react-native";



SplashScreen.preventAutoHideAsync();

export default function CustomSplash() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  useEffect(() => {
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);  

  return (
    <View style={[{ backgroundColor: "#000" }, styles.container]}>
      <Image
        source={require("../assets/realmadrid.png")}
        style={styles.image}
      />
      <ThemedView>
        <Text style={{ color: "#fff", backgroundColor: "#000" }}>
          The King of Classicooo
        </Text>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    marginTop: 20,
    fontSize: 18,
  },
});
