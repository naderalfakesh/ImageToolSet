/* eslint-disable react-native/no-unused-styles */
import React from "react"
import { StyleSheet, ViewStyle, View, Text } from "react-native"
import Image from "../Image"

export const CARD_WIDTH = 300
export const CARD_HEIGHT = 160

interface Props {
  url: string
  style?: ViewStyle
  onPress?: () => void
  title: string
  subtitle?: string
}
const sub = "Lorem ipsum dolor sit amet."

const FullImageCard = ({ style, url, title, subtitle, onPress }: Props) => {
  return (
    <View style={[styles.base, style]}>
      <Image url={url} resizeMode="cover" onPress={onPress} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="clip">
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="clip">
          {subtitle || sub}
        </Text>
      </View>
    </View>
  )
}

export default FullImageCard

const BORDER_COLOR = "rgba(46, 56, 47, 0.2)"
const TEXT_COLOR = "rgba(255, 255, 255, 1)"

const styles = StyleSheet.create({
  base: {
    borderColor: BORDER_COLOR,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    height: CARD_HEIGHT,
    overflow: "hidden",
    width: CARD_WIDTH,
  },
  subtitle: {
    color: TEXT_COLOR,
    fontSize: 12,
    lineHeight: 14,
  },
  textContainer: {
    bottom: 16,
    left: 12,
    position: "absolute",
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
  },
})
