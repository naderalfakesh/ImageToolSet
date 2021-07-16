/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import FullImageCard from "./FullImageCard"

const url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"

storiesOf("Full Card Image", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="">
        <FullImageCard url={url} title="title" subtitle="subtitle" />
      </UseCase>
    </Story>
  ))
