import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";

// redirecting to the signInOptions Page for now
import { router } from "expo-router";

const OnBoardScreen = () => {
  setTimeout(() => {
    router.push("/SignInOptions");
  }, 3000);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Image
        style={styles.containImage}
        source={require("../../assets/images/OnboardingoneImg.png")}
      ></Image>
      <Image
        // style={{ width: 100 }}
        source={require("../../assets/images/Logo.png")}
      ></Image>
      <ThemedText
        style={{
          fontSize: 22,
          padding: 25,
          color: "#D04700",
          textAlign: "center",
        }}
      >
        Share the Ride, Share the Fun! {"\n"} Make your trips more enjoyable
        {"\n"} and affordable{" "}
      </ThemedText>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  containImage: {
    height: 258,
    width: 350,
    transform: [{ scaleX: -1 }],
    marginBottom: 20,
    marginTop: -35,
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
});
