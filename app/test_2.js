import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  Text,
  Dimensions,
} from 'react-native';
/* import ImagePicker from 'react-native-image-crop-picker';
import CameraView from './components/camera-view';
 */
const {height, width} = Dimensions.get('window');

const Test2 = () => {
  const [scannedImage, setScannedImage] = useState();

  /* useEffect(() => {
    // handleOpenCamera();
  }, []);

  const handleOpenCamera = async () => {
    const result = await ImagePicker.openCamera({
      cropping: true,
      hideBottomControls: true,
    });
    console.log(result);
  }; */

  return (
    <SafeAreaView style={styles.container}>
      {/*   <Text style={styles.title}>React native crop picker</Text>

      <Button title="Open Camera" onPress={() => handleOpenCamera()} />

      <View
        style={{
          width: 200,
          height: 200,
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <CameraView />
      </View>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 60,
          right: 10,
          zIndex: 200000,
        }}></View> */}
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

export default Test2;
