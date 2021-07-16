import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Avatar from "../../components/Avatar"

const AVATAR_URL = "https://picsum.photos/id/1005/800/600"

const Header = () => {
  return (
    <View style={styles.header}>
      <Avatar url={AVATAR_URL} shape="circle" resizeMode="cover" />
      <View style={styles.headerText}>
        <Text style={styles.title} numberOfLines={1}>
          {"Nader Alfakesh".toUpperCase()}
        </Text>
        <Text style={styles.description}>{"React native developer"}</Text>
      </View>
    </View>
  )
}

export default Header

const TITLE_COLOR = "rgba(22, 42, 76, 0.9)"
const DESCRIPTION_COLOR = "rgba(22, 42, 76, 0.7)"

const styles = StyleSheet.create({
  description: { color: DESCRIPTION_COLOR, fontSize: 14, lineHeight: 20 },
  header: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 32,
  },
  headerText: { marginLeft: 10 },
  title: { color: TITLE_COLOR, fontSize: 16, lineHeight: 24 },
})
