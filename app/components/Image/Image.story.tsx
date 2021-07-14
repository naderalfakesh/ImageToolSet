import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import Image from "./Image"

const source = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }

storiesOf("Image base", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="With URL">
        <Image source={source} resizeMode="contain" />
      </UseCase>
    </Story>
  ))
