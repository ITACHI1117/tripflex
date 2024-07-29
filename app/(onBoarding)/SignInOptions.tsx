import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

const SignInOptions: React.FC = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          placeholder="‎"
          containerStyle={{
            backgroundColor: "#F2EEED",
            borderRadius: 10,
            width: "90%",
          }}
          textContainerStyle={{
            backgroundColor: "#F2EEED",
            borderRadius: 10,
            width: "90%",
          }}
          flagButtonStyle={{ backgroundColor: "#F2EEED", borderRadius: 10 }}
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          autoFocus
        />
        <View style={styles.line}>
          <View style={styles.absoluteOR}>
            <Text> OR</Text>
          </View>
        </View>
      </View>
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
    backgroundColor: "white",
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "#ABBBC8",
    marginTop: 40,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
  },
  absoluteOR: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -7,
    right: "40%",
    width: 70,
    backgroundColor: "white",
  },
});
