import React from "react"
import { View, StyleSheet } from "react-native"
import ImageCard from "../../components/ImageCard"
import { Photo } from "./types"

interface Props {
  images: Photo[]
}

const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa unde alias rem deleniti voluptates aliquid vitae? Reprehenderit enim autem saepe."

const MobileList = ({ images }: Props) => {
  return (
    <View style={styles.container}>
      {images.map((item, index) => (
        <ImageCard
          key={item.id}
          style={index && styles.item}
          url={item.url}
          title={item.title}
          description={description}
        />
      ))}
    </View>
  )
}

export default MobileList

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, paddingVertical: 20 },
  item: { marginTop: 18 },
})
