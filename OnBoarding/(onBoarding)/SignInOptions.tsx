import { StyleSheet, Text, SafeAreaView, View,KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput, } from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";



const SignInOptions: React.FC = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const colorScheme = useColorScheme();

  const BackgroundColor = colorScheme == 'light' ? "white" : 'black'
  const BackgroundTextColor = colorScheme == 'light' ? "black" : 'white'
  const CountryPhonInputPickerColor = colorScheme== 'light' ? "#F2EEED" : '#3F3D3D'

  // dummy error function 
  const errormessage = () => {
   
  }

  

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TouchableWithoutFeedback style={{width:'100%'}} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
       style={{width:'100%', padding: 20}}
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        > 
      <View style={styles.container}>
        <Link href={'/SignInWithPhone'} asChild>
        <TouchableOpacity>
        <PhoneInput
         disabled
          ref={phoneInput}
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          placeholder="‎"
          codeTextStyle={{color:BackgroundTextColor}}
          textInputStyle={{color:BackgroundTextColor}}
          
          containerStyle={{
            backgroundColor: CountryPhonInputPickerColor,
            borderRadius: 20,
            width: "100%",
          }}
          textContainerStyle={{
            backgroundColor: CountryPhonInputPickerColor,
            borderRadius: 10,
            width: "90%",
            
          }}
          flagButtonStyle={{ backgroundColor: CountryPhonInputPickerColor, borderRadius: 10 }}
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme={colorScheme == 'dark' ? true :false}
          autoFocus
          
        />
        </TouchableOpacity>
        </Link>
        <View style={styles.line}>
          <View style={[styles.absoluteOR, {backgroundColor: BackgroundColor}]}>
            <Text style={{color:BackgroundTextColor}}> OR</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonConatiner}>
                <View style={styles.button}>
                  {/* google logo */}
                  <Image
                    source={require("../../assets/images/google.png")}
                  ></Image>
                  <ThemedText style={{ color: "gray" }} type="tiny">
                    {"  "}Sign in with Google
                  </ThemedText>
                </View>
          </TouchableOpacity>
          <View style={styles.bottomPosition}>
            <ThemedText>
            If you are creating a new account,
            {/* Change Link */}
            <Link href={'https://ajogujoseph.netlify.app/'}>
            <ThemedText style={styles.link}>
            {' '}Terms & {'\n'} Conditions{' '}
        </ThemedText>
            </Link>
              and
              {/* Change Link */}
              <Link href={'https://ajogujoseph.netlify.app/'}>
            <ThemedText style={styles.link}>
            {' '}Privacy Policy{' '}
        </ThemedText>
            </Link>
                will apply
            </ThemedText>
          </View>

      </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignInOptions;

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    // position:'absolute',
    width: '100%',
    height: 1.5,
    backgroundColor: "#ABBBC8",
    marginTop: 40,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteOR: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -7,
    right: "40%",
    width: 70,
    // backgroundColor: "white",
  },
  buttonConatiner:{
    marginTop: 30,
    borderWidth: 2,
    borderColor:'gray',
    width: "100%",
    height: 45,
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:20
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: 'green',
  },
  bottomPosition:{
    position:'absolute',
    bottom:20,
  display:'flex'

  }
});
