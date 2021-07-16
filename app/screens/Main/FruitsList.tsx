import React from "react"
import { FlatList, View, StyleSheet } from "react-native"
import ImageWithCaption from "../../components/ImageWithCaption"
import { Photo } from "./types"

interface Props {
  images: Photo[]
  onImagePress: (image: Photo) => void
}

const FruitsList = ({ images, onImagePress }: Props) => {
  return (
    <View>
      <FlatList<Photo>
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={images}
        renderItem={({ item, index }) => (
          <ImageWithCaption
            style={index && styles.item}
            key={item.id}
            url={item.url}
            caption={item.title}
            onPress={() => onImagePress(item)}
          />
        )}
      />
    </View>
  )
}

export default FruitsList

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, paddingVertical: 20 },
  item: { marginLeft: 12 },
})
