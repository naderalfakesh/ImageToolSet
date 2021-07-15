/* eslint-disable react-native/no-unused-styles */
import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import { FastImageProps } from "react-native-fast-image"
import Image from "../Image"

const LARGE_SIZE = 90
const MEDIUM_SIZE = 65
const SMALL_SIZE = 40

interface Props {
  source: FastImageProps["source"]
  resizeMode?: FastImageProps["resizeMode"]
  style?: ViewStyle
  size?: "small" | "medium" | "large"
  shape?: "square" | "circle" | "round"
  onPress?: () => void
}

const Avatar = ({
  style,
  source,
  resizeMode = "contain",
  size = "medium",
  shape = "square",
  onPress,
}: Props) => {
  return (
    <Image
      containerStyle={[styles.base, sizeStyle[size], shapeStyle(shape, size), style]}
      source={source}
      resizeMode={resizeMode}
      onPress={onPress}
    />
  )
}

export default Avatar

const styles = StyleSheet.create({
  base: {
    overflow: "hidden",
  },
})

const sizeStyle: Record<Props["size"], { height: number; width: number }> = StyleSheet.create({
  large: {
    height: LARGE_SIZE,
    width: LARGE_SIZE,
  },
  medium: {
    height: MEDIUM_SIZE,
    width: MEDIUM_SIZE,
  },
  small: {
    height: SMALL_SIZE,
    width: SMALL_SIZE,
  },
})

const shapeStyle = (shape: Props["shape"], size: Props["size"]): { borderRadius: number } => {
  switch (shape) {
    case "circle":
      return { borderRadius: 0.5 * sizeStyle[size].height }
    case "round":
      return { borderRadius: 0.25 * sizeStyle[size].height }
    default:
      return { borderRadius: 0 }
  }
}
