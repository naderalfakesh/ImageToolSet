import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import ImageCard from "./ImageCard"

const url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const title = "Lorem ipsum dolor"
const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nemo perspiciatis voluptatibus recusandae dolore inventore aperiam aspernatur suscipit cum sint!"

storiesOf("Image card", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="">
        <ImageCard url={url} title={title} description={description} />
      </UseCase>
    </Story>
  ))
