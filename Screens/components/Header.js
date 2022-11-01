import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";

import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const Header = (props) => {
  const { title } = props;
  const navigation = useNavigation(); 
  return (
      <View style={styles.headerStyle}>
        <ImageBackground  style={styles.center} source={require('../image/header.png')} >

        <TouchableOpacity style={styles.leftButton} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.iconStyle} source={require('../image/left_nav.png')} />
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.title}</Text>

        <TouchableOpacity style={styles.rightButton} onPress={() => navigation.navigate("Setting")}>
        <Image style={styles.iconStyle} source={require('../image/right_nav.png')} />
        </TouchableOpacity>

        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 151,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    Top: 49,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 121,
  },

  leftButton: {
    position: 'absolute',
    Top: 48,
    left: 28,
  },

  rightButton: {
    position: 'absolute',
    Top: 48,
    right: 28,
  },

  iconStyle: {
    width: 36,
    height: 36,
  },

});

export default Header;
