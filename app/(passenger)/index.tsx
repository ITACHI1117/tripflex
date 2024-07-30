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
import { Doodles } from "@/components/Doodles";
  
  const SignIn = () => {
    const colorScheme = useColorScheme();
  
    return (
      <SafeAreaView style={styles.safeAreaConmtainer}>
        {/* BackGroung image Componet */}
        <Doodles />
        {/* SignUp Ui */}
        <View style={styles.container}>
        <ThemedText type="title">Sign Up with us</ThemedText>
        </View>
       
      </SafeAreaView>
    );
  };

  export default SignIn;
  
  const styles = StyleSheet.create({
    safeAreaConmtainer: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    doodle:{
      position:'absolute',
      width:200,
      height:200,
      objectFit:'contain',
      
    },
    container: {
      width: "85%",
      height: "80%",
      // backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      borderRadius: 20,
      padding: 30,
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
  
  