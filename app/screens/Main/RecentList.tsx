import React from "react"
import { FlatList, View, StyleSheet, Dimensions } from "react-native"
import FullImageCard, { CARD_WIDTH } from "../../components/FullImageCard"
import { Photo } from "./types"

interface Props {
  images: Photo[]
}

const calculateOffsets = (length: number, width: number) => {
  return Array.from({ length }, (value, index) => {
    if (index === 0) return 0
    const middleOfScreen = 0.5 * width
    return LIST_SPACING + index * (CARD_WIDTH + ITEM_SPACING) + 0.5 * CARD_WIDTH - middleOfScreen
  })
}

const RecentList = ({ images }: Props) => {
  const { width } = Dimensions.get("window")
  return (
    <View>
      <FlatList<Photo>
        contentContainerStyle={styles.listContainer}
        snapToOffsets={calculateOffsets(images.length, width)}
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={images}
        renderItem={({ item, index }) => (
          <FullImageCard
            style={index && styles.item}
            key={item.id}
            url={item.url}
            title={item.title}
          />
        )}
      />
    </View>
  )
}

export default RecentList

const LIST_SPACING = 24
const ITEM_SPACING = 12

const styles = StyleSheet.create({
  item: { marginLeft: ITEM_SPACING },
  listContainer: { paddingHorizontal: LIST_SPACING, paddingVertical: 20 },
})
