/* eslint-disable react-native/no-unused-styles */
import React from "react"
import { StyleSheet, View, ViewStyle, Text } from "react-native"
import { FastImageProps } from "react-native-fast-image"
import Image from "../Image"

interface Props {
  style?: ViewStyle
  source: FastImageProps["source"]
  title: string
  description: string
}

const ImageCard = ({ style, source, title, description }: Props) => {
  return (
    <View style={[styles.base, style]}>
      <Image containerStyle={styles.image} source={source} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title.toUpperCase()}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

export default ImageCard

const CARD_BG_COLOR = "rgba(240, 242, 245, 1)"
const TITLE_COLOR = "rgba(22, 42, 76, 0.9)"
const DESCRIPTION_COLOR = "rgba(22, 42, 76, 0.7)"

const styles = StyleSheet.create({
  base: {
    backgroundColor: CARD_BG_COLOR,
    borderRadius: 20,
    flexDirection: "row",
    height: 200,
    overflow: "hidden",
    width: "100%",
  },
  description: { color: DESCRIPTION_COLOR, fontSize: 14, lineHeight: 20 },
  image: { height: "100%", width: "35%" },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  title: { color: TITLE_COLOR, fontSize: 16, lineHeight: 24 },
})
