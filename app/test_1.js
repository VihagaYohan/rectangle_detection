import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  Text,
  Dimensions,
} from 'react-native';
/*import DocumentScanner from 'react-native-document-scanner-plugin';

const {height, width} = Dimensions.get('window'); */

const Test1 = () => {
  const [scannedImage, setScannedImage] = useState();
  /* 
  const handleOpenCamera = async () => {
    const result = await DocumentScanner.scanDocument({
      maxNumDocuments: 1,
    });
    // returns object -> scannedImages:String[] & status: String
    console.log(result);
  };
 */
  return (
    <SafeAreaView style={styles.container}>
      {/*  <Text style={styles.title}>React native document scanner plugin</Text>

      <Button title="Open Camera" onPress={() => handleOpenCamera()} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Test1;
