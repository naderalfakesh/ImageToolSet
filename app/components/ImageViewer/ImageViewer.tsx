import React, { useState } from "react"
import { Dimensions, Modal, StyleSheet, View, Text, StatusBar } from "react-native"
import { OnLoadEvent } from "react-native-fast-image"
import ImageZoom from "react-native-image-pan-zoom"
import Image from "../Image"

interface Props {
  url: string
  title: string
  visible: boolean
  onClose: () => void
}

const ImageViewer = ({ url, visible, title, onClose }: Props) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })
  const screenWidth = Dimensions.get("window").width
  const screenHeight = Dimensions.get("window").height

  const calculateImageSize = ({ nativeEvent }: OnLoadEvent) => {
    let width = nativeEvent.width
    let height = nativeEvent.height

    // If image width is bigger than image zoom ratio will be image width
    if (width > screenWidth) {
      const widthPixel = screenWidth / width
      width *= widthPixel
      height *= widthPixel
    }

    // If image height is still bigger than image zoom ratio will be image height
    if (height > screenHeight) {
      const HeightPixel = screenHeight / height
      width *= HeightPixel
      height *= HeightPixel
    }

    setImageSize({ height, width })
  }

  return (
    <Modal visible={visible} onRequestClose={onClose} statusBarTranslucent animationType="slide">
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.BackText} onPress={onClose}>
          {"< Back"}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="middle" style={styles.headerText}>
          {title}
        </Text>
      </View>
      <ImageZoom
        style={styles.container}
        cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={imageSize.width}
        imageHeight={imageSize.height}
        maxOverflow={0}
      >
        <Image url={url} resizeMode="contain" loaderSize="large" onLoad={calculateImageSize} />
      </ImageZoom>
    </Modal>
  )
}

export default ImageViewer

const BG_COLOR = "rgba(0, 0, 0, 1)"
const OVERLAY_COLOR = "rgba(0, 0, 0, 0.5)"
const TEXT_COLOR = "rgba(255, 255, 255, 1)"

const styles = StyleSheet.create({
  BackText: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  container: { backgroundColor: BG_COLOR },
  header: {
    alignItems: "flex-end",
    backgroundColor: OVERLAY_COLOR,
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    left: 0,
    paddingBottom: 8,
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  headerText: {
    color: TEXT_COLOR,
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 12,
    paddingRight: 6,
  },
})
