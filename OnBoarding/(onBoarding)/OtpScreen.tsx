import { StyleSheet, Text, SafeAreaView, View,KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    TouchableOpacity,
    FlatList } from "react-native";
  import React, { useState, useRef } from "react";
  import PhoneInput from "react-native-phone-number-input";
  import { ThemedText } from "@/components/ThemedText";
  import { useColorScheme } from "@/hooks/useColorScheme";
  import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';   
import { router } from "expo-router";
  
  const SignInOptions: React.FC = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const colorScheme = useColorScheme();
    const [selectedId, setSelectedId] = useState<string>();
  
    const BackgroundColor = colorScheme == 'light' ? "white" : 'black'
    const BackgroundTextColor = colorScheme == 'light' ? "black" : 'white'
    const CountryPhonInputPickerColor = colorScheme== 'light' ? "#F2EEED" : '#3F3D3D'

    // Validating Phone Number
    const validatePhoneNumber = () => {
        if (phoneInput.current) {
          const valid = phoneInput.current.isValidNumber(phoneNumber);
          setIsValid(valid);
        }
        if (selectedId != '' && isValid){
            router.push('/')
        }
      };

    type ItemData = {
        id: string;
        title: string;
        icon: string;
    };
// Radio Button Data
    const DATA: ItemData[] = [
        { id: '1', title: 'Send to SMS', icon:'message-text-outline' },
      { id: '2', title: 'Send to WhatsApp', icon: 'whatsapp' },
    ];
//    Radio Buttons
    type ItemProps = {
        item: ItemData;
        onPress: () => void;
        backgroundColor: string;
        textColor: string;
        icon: any
    };

    const Item = ({item, onPress, backgroundColor, textColor,icon}: ItemProps) => (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.item, {backgroundColor: 'transparent'}]}>
            <View style={{display:"flex", alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <MaterialCommunityIcons name={icon} size={24} color={icon === 'whatsapp' ? 'green' : BackgroundTextColor} />
            <ThemedText style={[styles.title, {color: BackgroundTextColor}]}>{item.title}</ThemedText>
            </View>
          
          <View style={[styles.radioButton,{backgroundColor:backgroundColor}]}></View>
        </TouchableOpacity>
      );

// Render the radio button
    const renderItem = ({item}: {item: ItemData}) => {
        const backgroundColor = item.id === selectedId ? '#04BF22' : 'transparent';
        const color = item.id === selectedId ? 'white' : 'black';
        
        const icon =  item.id != '1'? 'whatsapp' : 'message-text-outline'
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
            icon={icon}
            textColor={color}
            
          />
        );
    };
    
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
            <View style={{width:'100%', alignItems:'flex-start'}}>
            <ThemedText style={{marginBottom:20,}}>A code will be sent to you for verification</ThemedText>
            </View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            placeholder="‎"
            codeTextStyle={{color:BackgroundTextColor}}
            textInputStyle={{color:BackgroundTextColor}}
            onChangeText={(text) => setPhoneNumber(text)}
            containerStyle={{
              backgroundColor: 'transparent',
              borderRadius: 20,
              width: "100%",
              borderWidth: 1,
              borderColor: '#04BF22'
            }}
            textContainerStyle={{
              backgroundColor: 'transparent',
              borderRadius: 10,
              width: "90%",
              
            }}
            flagButtonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme={colorScheme == 'dark' ? true :false}
            autoFocus
          />
          {isValid ? (
        ""
      ) : (
        <Text style={styles.invalidText}>Invalid phone number</Text>
      )}
          <View style={styles.flatList}>
          <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
          </View>
          
          <TouchableOpacity onPress={validatePhoneNumber} style={styles.buttonConatiner}>
                  <View style={styles.button}>                    
                    <ThemedText style={{ color: "white" }} type="label">
                      Continue
                    </ThemedText>
                  </View>
            </TouchableOpacity>
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
        position:'absolute',
        bottom: 20,
      marginTop: 30,
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
    link: {
      color: 'green',
    },
    item: {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 0,
      },
    title: {
        marginLeft: 10
        // fontSize: ,
    },
    radioButton:{
        width:20,
        height:20,
        borderWidth: 1,
        borderColor: '#ABBBC8',
        borderRadius: 100
    },
    flatList:{
     height: 100
    },
    invalidText: {
        color: 'red',
        marginTop: 10,
      },
  });
  