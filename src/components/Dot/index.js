import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Dot = (props) => {
  return (
      <TouchableOpacity>
            <View style={[styles.container, { backgroundColor: props.color }]}>
            </View>
      </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        backgroundColor: 'red',
        marginHorizontal: '2.5%',
        elevation: 5,
        marginLeft: 5,
    }
})

export default Dot;