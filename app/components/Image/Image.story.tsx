/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import Image from "./Image"
import { View } from "react-native"

const url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"

storiesOf("Image base", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="Contain mode">
        <View style={{ width: 100, height: 100 }}>
          <Image url={url} resizeMode="contain" />
        </View>
      </UseCase>
      <UseCase text="Cover mode">
        <Image url={url} resizeMode="cover" />
      </UseCase>
    </Story>
  ))
