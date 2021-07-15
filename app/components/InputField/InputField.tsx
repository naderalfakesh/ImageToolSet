import React, { Fragment, useState } from "react"
import { StyleSheet, TouchableOpacity, TextInput, Image as RNIImage } from "react-native"
import Image from "../Image"

const uploadIcon = require("./Upload.png")
const { uri: uploadIconUrl } = RNIImage.resolveAssetSource(uploadIcon)
interface Props {
  url: string | null
  onPress: () => void
}
const InputField = ({ url, onPress }: Props) => {
  const [name, setName] = useState("")
  const [focus, setFocus] = useState(false)

  return (
    <Fragment>
      <TouchableOpacity activeOpacity={0.7} style={styles.base} onPress={onPress}>
        {url ? (
          <Image url={url} resizeMode="cover" />
        ) : (
          <Image containerStyle={styles.uploadIcon} url={uploadIconUrl} resizeMode="contain" />
        )}
      </TouchableOpacity>
      <TextInput
        style={[styles.input, focus && styles.focused]}
        placeholder={"File name..."}
        clearButtonMode="while-editing"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Fragment>
  )
}

export default InputField

const BG_COLOR = "rgba(240, 242, 245, 1)"
const BORDER_COLOR = "rgba(22, 42, 76, 0.7)"
const FOCUSED_COLOR = "rgba(55, 107, 251, 1)"
const ICON_SIZE = 32

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: BG_COLOR,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 120,
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
  focused: { borderBottomColor: FOCUSED_COLOR, borderBottomWidth: 3 },
  input: {
    backgroundColor: BG_COLOR,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 2,
    height: 32,
    paddingHorizontal: 5,
    width: "100%",
  },
  uploadIcon: { height: ICON_SIZE, width: ICON_SIZE },
})
