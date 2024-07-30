import { Image, StyleSheet, View } from 'react-native';


export function Doodles() {

  return (
    <View style={{position:'absolute',display:'flex', width:'100%', height:'100%'}}> 
        <Image
        style={[styles.doodle,{top: -110, right: -50,transform: [{rotate: '360deg' }, {scaleX: -1}],  }]}
        source={require('../assets/images/doodle.png')}
        ></Image>
         <Image
         style={[styles.doodle,{bottom: -80, left: -40,transform: [{rotate: '350deg' }, {scaleX: -1}],  }]}
        source={require('../assets/images/doodle.png')}
        ></Image>
       <Image
       style={[styles.doodle,{width:250,bottom: 100, right: -100,transform: [{rotate: '360deg' }, {scaleX: 1}],  }]}
        source={require('../assets/images/doodle.png')}
        ></Image>
        </View>
  )   ;
}

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
})
