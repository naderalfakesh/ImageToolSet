/* eslint-disable react-native/no-unused-styles */
import React from "react"
import { StyleSheet, ViewStyle, View, Text } from "react-native"
import Image from "../Image"

interface Props {
  url: string
  style?: ViewStyle
  onPress?: () => void
  caption: string
}

const ImageWithCaption = ({ style, url, caption, onPress }: Props) => {
  return (
    <View style={[styles.base, style]}>
      <Image url={url} resizeMode="cover" onPress={onPress} />
      <View style={styles.caption}>
        <Text style={styles.captionText} numberOfLines={1} ellipsizeMode="clip">
          {"#" + caption.split(" ")[0].toUpperCase()}
        </Text>
      </View>
    </View>
  )
}

export default ImageWithCaption

const BORDER_COLOR = "rgba(46, 56, 47, 0.2)"
const CAPTION_BG_COLOR = "rgba(255, 255, 255, 0.6)"
const CAPTION_TEXT_COLOR = "rgba(46, 56, 47, 0.8)"

const styles = StyleSheet.create({
  base: {
    borderColor: BORDER_COLOR,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    height: 144,
    overflow: "hidden",
    width: 126,
  },
  caption: {
    backgroundColor: CAPTION_BG_COLOR,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    bottom: 15,
    left: 0,
    paddingHorizontal: 12,
    paddingVertical: 4,
    position: "absolute",
  },
  captionText: {
    color: CAPTION_TEXT_COLOR,
    fontSize: 10,
    lineHeight: 12,
  },
})
