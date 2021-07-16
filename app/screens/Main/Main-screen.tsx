import React from "react"
import { ActivityIndicator, StatusBar, StyleSheet, ScrollView, View, Text } from "react-native"
import Image from "../../components/Image"
import MobileList from "./MobileList"
import Header from "./Header"
import FruitsList from "./FruitsList"
import RecentList from "./RecentList"
import usePexels from "./usePexels"

const BG_URL = "https://picsum.photos/id/6/800/600"

export const MainScreen = () => {
  const { recent, fruits, mobile, loading, error } = usePexels()
  return (
    <ScrollView bounces={false}>
      <StatusBar barStyle="light-content" />
      <View style={styles.background}>
        <Image url={BG_URL} />
      </View>
      <View style={styles.content}>
        <Header />
        {fruits && <FruitsList images={fruits} />}
        {recent && <RecentList images={recent} />}
        {mobile && <MobileList images={mobile} />}
        {loading && <ActivityIndicator style={styles.loader} size="large" color={LOADER_COLOR} />}
      </View>
    </ScrollView>
  )
}

const BG_HEIGHT = 300
const BG_COLOR = "white"
const LOADER_COLOR = "rgba(55, 107, 251, 1)"

const styles = StyleSheet.create({
  background: { ...StyleSheet.absoluteFillObject, height: BG_HEIGHT },
  content: {
    backgroundColor: BG_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: BG_HEIGHT - 30,
    overflow: "hidden",
  },
  loader: { flex: 1 },
})
