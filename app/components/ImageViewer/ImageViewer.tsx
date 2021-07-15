import React, { useState } from "react"
import { Dimensions, Modal, StyleSheet, View, Text, StatusBar } from "react-native"
import ImageZoom from "react-native-image-pan-zoom"
import Image from "../Image"

interface Props {
  url: string
  title: string
  visible: boolean
  onClose: () => void
  onPress: () => void
}

const ImageViewer = ({ url, visible, title, onClose, onPress }: Props) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  return (
    <Modal visible={visible} onRequestClose={onClose} statusBarTranslucent animationType="slide">
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.BackText} onPress={onPress}>
          {"< Back"}
        </Text>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ImageZoom
        style={styles.container}
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={imageSize.width}
        imageHeight={imageSize.height}
        maxOverflow={0}
      >
        <Image
          url={url}
          resizeMode="contain"
          onLoad={({ nativeEvent: { height, width } }) => {
            setImageSize({ height, width })
          }}
        />
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
    fontSize: 16,
    lineHeight: 24,
  },
})
