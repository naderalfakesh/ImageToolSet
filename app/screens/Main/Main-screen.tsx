import React, { useState } from "react"
import { ActivityIndicator, StatusBar, StyleSheet, ScrollView, View } from "react-native"
import Image from "../../components/Image"
import MobileList from "./MobileList"
import Header from "./Header"
import FruitsList from "./FruitsList"
import RecentList from "./RecentList"
import usePexels from "./usePexels"
import ImageViewer from "../../components/ImageViewer"
import { Photo } from "./types"

const BG_URL = "https://picsum.photos/id/6/800/600"

export const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)
  const { recent, fruits, mobile, loading, error } = usePexels()

  return (
    <ScrollView style={styles.mainContainer} bounces={false}>
      <StatusBar barStyle="light-content" />
      <View style={styles.background}>
        <Image url={BG_URL} />
      </View>
      <View style={styles.content}>
        <Header />
        {fruits && (
          <FruitsList
            images={fruits}
            onImagePress={(image) => {
              setSelectedImage(image)
              setModalVisible(true)
            }}
          />
        )}
        {recent && <RecentList images={recent} />}
        {mobile && <MobileList images={mobile} />}
        {loading && <ActivityIndicator style={styles.loader} size="large" color={LOADER_COLOR} />}
      </View>
      {selectedImage && (
        <ImageViewer
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title={selectedImage.title}
          url={selectedImage.urlLarge}
        />
      )}
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
    paddingBottom: 32,
  },
  loader: { flex: 1 },
  mainContainer: { backgroundColor: BG_COLOR, flexGrow: 1 },
})
