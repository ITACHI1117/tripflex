import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import { Link, router } from "expo-router";
  import React, { useState } from "react";
  import { ThemedText } from "@/components/ThemedText";
  import { ThemedView } from "@/components/ThemedView";
  import { useColorScheme } from "@/hooks/useColorScheme";
import { Doodles } from "@/components/Doodles";
  
  const PassangerScreens = () => {
    const colorScheme = useColorScheme();
    const [text,setText] = useState<string>()

     const BackgroundTextColor = colorScheme == 'light' ? "black" : 'white'
    const BackgroundColorInput = colorScheme== 'light' ? "transparent" : '#3F3D3D'
  
    return (
      <SafeAreaView style={styles.safeAreaConmtainer}>
        {/* BackGroung image Componet */}
        <Doodles />
        {/* SignUp Ui */}
        <TouchableWithoutFeedback style={{width:'100%'}} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
       style={{width:'100%', padding: 0}}
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        > 
        <View style={styles.container}>
        <ThemedText type="title">Welcome Back</ThemedText>
        <View style={styles.formContainer}>
          {/* Email */}
        <ThemedText style={{fontSize:19}} type="defaultSemiBold">Email or Phone </ThemedText>
        <TextInput
        value={text}
        onChange={() => setText}
        style={[styles.textInput,{color:BackgroundTextColor, backgroundColor:BackgroundColorInput}]}
        placeholderTextColor={"black"}
        placeholder=""
        >
        </TextInput>
        
         {/* Password */}
        <ThemedText style={{fontSize:19, marginTop: 20}} type="defaultSemiBold">Password</ThemedText>
        <TextInput
        style={[styles.textInput,{color:BackgroundTextColor, backgroundColor:BackgroundColorInput}]}
        placeholderTextColor={"gray"}
        placeholder=""
        // color="white"
        ></TextInput>
        </View>
        <Link href={'/HomeScreen'} asChild>
        <TouchableOpacity onPress={() => router.push('/HomeScreen')} style={styles.buttonConatiner}>
                  <View style={styles.button}>                    
                    <ThemedText style={{ color: "white" }} type="label">
                      Continue
                    </ThemedText>
                  </View>
            </TouchableOpacity>
            </Link>
            <ThemedText style={{ marginTop: 10, color: BackgroundTextColor }} type="label">
                      Don't have an account? 
                      <TouchableOpacity onPress={() => router.back()}>
                      <ThemedText style={{color:'#FE7833'}}>
                      {' '}Sign up{' '}
                      </ThemedText>
                     </TouchableOpacity>
                    </ThemedText>
        
        </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  };

  export default PassangerScreens;
  
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
    formContainer:{
      marginTop:50,
      width:'100%'

    },
    container: {
      width: "100%",
      height: "80%",
      // backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      borderRadius: 20,
      padding: 30,
      paddingTop: 0
    },
    textInput:{
      marginTop: 15,
     borderWidth:1,
     height: 40,
     borderRadius: 20,
     borderColor:'#0000006B',
     paddingLeft: 20

    },
    buttonConatiner:{
    marginTop: 20,
    width: "100%",
    height: 45,
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#FE7833',
  },
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
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
    
  });
  
  