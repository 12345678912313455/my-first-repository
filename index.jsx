import { StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import RealMadrid from "../assets/realmadrid.png";
import Barcalona from "../assets/barca.png";

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

const Home = () => {
  const opacityy = useSharedValue(1);
  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityy.value,
    };
  });
  function toggleAnimation() {
    opacityy.value = withTiming(0, { duration: 2000 });
  }
  useEffect(() => {
    opacityy.value = withTiming(0, { duration: 2000 });
  }, []);

  const scalee = useSharedValue(1);
  const AnimatedStyleScale = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalee.value }],
    };
  });
  useEffect(() => {
    scalee.value = withTiming(1.1, { duration: 2000 });
  }, []);
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedView style={styles.result}>
        <ThemedView>
          <Animated.Image
            source={RealMadrid}
            style={[styles.logo2, styles.mar, AnimatedStyleScale]}
          />
          <Link href={"/real"}>
            <ThemedText style={styles.infoForTeams}>More info</ThemedText>
          </Link>
        </ThemedView>

        <ThemedText style={styles.mar}>3</ThemedText>
        <ThemedText style={styles.mar}>-</ThemedText>
        <ThemedText style={styles.mar}>1</ThemedText>
        <ThemedView>
          <Image source={Barcalona} style={[styles.logo, styles.mar]} />
          <Link href={"/barca"}>
            <ThemedText style={styles.infoForTeams}>More info</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
      {/* <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: "#f00"  },
          AnimatedStyle,
        ]}
      /> */}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "#000" },
          AnimatedStyle,
        ]}
        onTouchMove={toggleAnimation}
      />
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mar: {
    margin: 10,
    fontSize: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo2: {
    width: 74,
    height: 104,
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  result: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  result: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    // borderColor:"#000000",
    // borderWidth:2,
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  infoText: {
    width: 100,
    margin: 20,
  },
  infoForTeams: {
    textAlign: "center",
    width: 100,
    height: 50,
  },
});
