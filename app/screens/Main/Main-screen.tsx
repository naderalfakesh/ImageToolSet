import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const MainScreen = () => {
  return (
    <View style={styles.base}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quidem nam consectetur
        voluptas consequatur eaque quos? Omnis eum quod amet commodi error? Sequi hic magnam nulla
        corporis sed recusandae eius.
      </Text>
    </View>
  )
}

const COLOR = "red"
const styles = StyleSheet.create({ base: { backgroundColor: COLOR, flexGrow: 1 } })
