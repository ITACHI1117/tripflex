import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

const OnBoardingScreenOne = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.safeAreaConmtainer}>
      <View
        style={[
          styles.container,
          styles.shadowProp,
          { backgroundColor: colorScheme == "dark" ? "black" : "white" },
        ]}
      >
        <Image
          style={styles.containImage}
          source={require("../../assets/images/OnboardingoneImg.png")}
        ></Image>
        <ThemedText
          style={{ textAlign: "center", color: "#D04700" }}
          type="title"
        >
          Are you a passenger or a driver ?
        </ThemedText>
        <Link
          href={"/OnBoardScreen"}
          asChild
          style={[styles.button, { backgroundColor: "#6C727F" }]}
        >
          <TouchableOpacity>
            <ThemedText style={{ fontSize: 20 }}>Passenger</ThemedText>
          </TouchableOpacity>
        </Link>

        <Link
          href={"#"}
          asChild
          style={[styles.button, { backgroundColor: "#FE7833" }]}
        >
          <TouchableOpacity>
            <ThemedText style={{ fontSize: 20 }}>Driver</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaConmtainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "85%",
    height: "80%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containImage: {
    height: 178,
    width: 290,
    transform: [{ scaleX: -1 }],
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 45,
    borderRadius: 10,
  },
});

export default OnBoardingScreenOne;
