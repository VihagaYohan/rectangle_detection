import React, {Component, useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  Text,
  Dimensions,
  Modal,
  Image,
} from 'react-native';
import Scanner, {RectangleOverlay} from 'react-native-rectangle-scanner';

const {height, width} = Dimensions.get('window');

const Test3 = () => {
  const [scannedImage, setScannedImage] = useState();
  const [detected, setDetected] = useState();
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const camera = useRef();
  const previewHeight = useRef(1);
  const previewWidth = useRef(1);
  const rectangleDimensions = useRef();

  let rectangleOverlay = null;

  const handleCapture = async () => {
    camera.current.capture();
  };

  const getPreviewSize = () => {
    const dimensions = Dimensions.get('window');
    const heightMargin = ((1 - previewHeight.current) * height) / 2;
    const widthMargin = ((1 - previewWidth.current) * width) / 2;

    return {
      height: previewHeight.current,
      width: previewHeight.current,
      marginTop: heightMargin,
      marginLeft: widthMargin,
    };
  };

  rectangleOverlay = (
    <RectangleOverlay
      detectedRectangle={detected}
      previewRatio={getPreviewSize()}
      backgroundColor="rgba(255,181,6, 0.2)"
      borderColor="rgb(255,181,6)"
      borderWidth={4}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>React native rectangle scanner screen</Text> */}

      <Scanner
        ref={camera}
        onPictureProcessed={result => {
          console.log('processed result');
          console.log(result);
          setImageUrl(result.croppedImage);
          setVisible(true);
        }}
        onPictureTaken={() => {}}
        onRectangleDetected={result => {
          if (result?.detectedRectangle == false) {
            // console.log('no rectangle detected');
          } else {
            setDetected(result.detectedRectangle);
          }
        }}
        onDeviceSetup={result => {
          console.log('device setup ', result);
          previewWidth.current = result?.previewWidthPercent;
          previewHeight.current = result?.previewHeightPercent;
        }}
        style={{
          width: width,
          height: height,
          borderWidth: 1,
          borderColor: 'red',
        }}
      />

      {rectangleOverlay}

      <View style={styles.buttonContainer}>
        <Button
          title="Capture"
          onPress={() => {
            handleCapture();
          }}
        />
      </View>

      <Modal visible={visible} animationType="slide">
        <View>
          <Image
            source={{uri: imageUrl}}
            style={{
              width: 200,
              height: 200,
              borderWidth: 1,
              borderColor: 'red',
            }}
          />

          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
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
  buttonContainer: {
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 30,
  },
});

export default Test3;
