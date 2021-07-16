/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import ImageWithCaption from "./ImageWithCaption"

const url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"

storiesOf("Image With Caption", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="">
        <ImageWithCaption url={url} caption="caption" />
      </UseCase>
    </Story>
  ))
