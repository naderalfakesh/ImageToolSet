import React, { useState } from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity, ViewStyle } from "react-native"
import FastImage, { FastImageProps, OnLoadEvent } from "react-native-fast-image"

const BG_COLOR = "rgba(240, 242, 245, 1)"
const LOADER_COLOR = "rgba(55, 107, 251, 1)"

interface Props extends Omit<FastImageProps, "source"> {
  url: string
  containerStyle?: ViewStyle | ViewStyle[]
  onPress?: () => void
}
const Image = ({ containerStyle, url, onPress, onLoad, style, ...restProps }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const handleLoading = (event: OnLoadEvent) => {
    setLoaded(true)
    onLoad && onLoad(event)
  }
  return (
    <TouchableOpacity style={[styles.base, containerStyle]} onPress={onPress} disabled={!onPress}>
      <FastImage
        style={[styles.base, style]}
        onLoad={handleLoading}
        source={{ uri: url }}
        {...restProps}
      />
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
