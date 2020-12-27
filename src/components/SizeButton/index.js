import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SizeButton = (props) => {
  return (
      <TouchableOpacity>
         <View style={[styles.container, {backgroundColor: props.backgroundColor || '#FFF'}]}>
          <Text style={[styles.text, { color: props.color || '#000'}]}>
              {props.children}
          </Text>
      </View>
      </TouchableOpacity>
     
  )
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10,
    },
    text:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})

export default SizeButton;