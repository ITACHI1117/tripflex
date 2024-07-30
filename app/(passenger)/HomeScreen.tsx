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
    FlatList,
  } from "react-native";
  import { Link, router } from "expo-router";
  import React, { useState } from "react";
  import { ThemedText } from "@/components/ThemedText";
  import { ThemedView } from "@/components/ThemedView";
  import { useColorScheme } from "@/hooks/useColorScheme";
  import MapView from 'react-native-maps';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import MaterialIcons from '@expo/vector-icons/MaterialIcons';
  import Entypo from '@expo/vector-icons/Entypo';

  
  const PassangerScreens = () => {
    const colorScheme = useColorScheme();
    const [text,setText] = useState<string>()
    const [selectedId, setSelectedId] = useState<string>();


    const BackgroundTextColor = colorScheme == 'light' ? "black" : 'white'
    const BackgroundColor = colorScheme == 'light' ? "white" : 'black'
    const BackgroundColorInput = colorScheme== 'light' ? "#B3B3B3" : '#3F3D3D'
    type ItemData = {
        id: string;
        title: string;
        icon: string;
    };
// Radio Button Data
    const DATA: ItemData[] = [
        { id: '1', title: 'Solo Ride', icon:'message-text-outline' },
      { id: '2', title: 'Shared Ride', icon: 'whatsapp' },
    ];
//    Radio Buttons
    type ItemProps = {
        item: ItemData;
        onPress: () => void;
        borderColor: string;
        textColor: string;
        icon: any
    };

    const Item = ({item, onPress, borderColor, textColor,icon}: ItemProps) => (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.item, {backgroundColor: BackgroundColorInput,
        borderColor:borderColor, borderWidth: 1, borderRadius:10}]}>
            <View style={{ width:'100%',display:"flex", alignItems:'center', justifyContent:'flex-start', flexDirection:'row'}}>
            <MaterialIcons name="directions-car" size={24} color={BackgroundTextColor} />
            <ThemedText type="tiny" style={[styles.title, {color: BackgroundTextColor}]}>{item.title}</ThemedText>
            </View>
        </TouchableOpacity>
      );

      const renderItem = ({item}: {item: ItemData}) => {
        const borderColor = item.id === selectedId ? '#FE7833' : 'transparent';
        const color = item.id === selectedId ? 'white' : 'black';
        const icon =  item.id != '1'? 'whatsapp' : 'message-text-outline'
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            borderColor={borderColor}
            icon={icon}
            textColor={color}
            
          />
        );
    };
  
    return (
      <View style={styles.safeAreaConmtainer}>
        {/* BackGroung image Componet */}
        <Text>hi</Text>
        <MapView style={styles.map} initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }} />
        <View style={[styles.Modal,{backgroundColor:BackgroundColor}]}>
        <ThemedText>Prepare your Trip</ThemedText>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <AntDesign style={{marginLeft:-0, position:'absolute', zIndex:3, left: 10, top:25}} name="search1" size={24} color={BackgroundTextColor} />
        <TextInput
        value={text}
        onChange={() => setText}
        style={[styles.textInput,{color:BackgroundTextColor, backgroundColor:BackgroundColorInput}]}
        placeholderTextColor={BackgroundTextColor}
        placeholder="Where are we going ?"
        >
        </TextInput>
        </View>
        <View style={{
            display:'flex',
          width:'90%',
          padding:10
        }}>
        <FlatList
        scrollEnabled={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
        </View>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Entypo style={{marginLeft:-0, position:'absolute', zIndex:3, left: 10, top:25}} name="location-pin" size={24} color={'green'} />
        <TextInput
        value={text}
        onChange={() => setText}
        style={[styles.textInput,{color:BackgroundTextColor, backgroundColor:BackgroundColorInput}]}
        placeholderTextColor={BackgroundTextColor}
        placeholder="Ahmadu Airport Road"
        >
        </TextInput>
        </View>
        <TouchableOpacity onPress={() => router.push('/HomeScreen')} style={styles.buttonConatiner}>
                  <View style={styles.button}>                    
                    <ThemedText style={{ color: "white" }} type="label">
                      Find Driver
                    </ThemedText>
                  </View>
            </TouchableOpacity>
        </View>
       
      </View>
    );
  };

  export default PassangerScreens;
  
  const styles = StyleSheet.create({
    safeAreaConmtainer: {
        width:'100%',
        height:'100%',
    },
    map: {
        marginTop:-20,
        width: '100%',
        height: '100%',
      },
    Modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 0,
        width:"100%",
        height:"40%",
        position:'absolute',
        // backgroundColor:'white',
        bottom:0,
        borderRadius: 25,

      },
      item: {
        width:'78%',
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
    width:'90%',
    marginTop: 15,
     height: 50,
     borderRadius: 10,
     paddingLeft: 40
    },
    buttonConatiner:{
    marginTop: 20,
    width: "70%",
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
  });
  
  