/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image"

const BG_COLOR = "rgba(240, 242, 245, 1)"
const LOADER_COLOR = "rgba(55, 107, 251, 1)"

interface Props extends FastImageProps {
  onPress?: () => void
}
const Image = ({ style, onPress, ...restProps }: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <TouchableOpacity style={styles.base} onPress={onPress} disabled={!onPress}>
      <FastImage style={[styles.base, style]} onLoad={() => setLoaded(true)} {...restProps} />
      {!loaded && <ActivityIndicator color={LOADER_COLOR} style={styles.loader} />}
    </TouchableOpacity>
  )
}

export default Image

const styles = StyleSheet.create({
  base: {
    height: "100%",
    width: "100%",
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BG_COLOR,
  },
})
