import React from "react"
import { StyleSheet } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image"

const Image = ({ style, ...restProps }: FastImageProps) => {
  return <FastImage style={[styles.base, style]} {...restProps} />
}

export default Image

const styles = StyleSheet.create({
  base: {
    height: "100%",
    width: "100%",
  },
})
