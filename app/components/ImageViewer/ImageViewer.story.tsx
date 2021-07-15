/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import ImageViewer from "./ImageViewer"
import { Button } from "react-native"
import { useState } from "@storybook/addons"

const source = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }

storiesOf("Image viewer", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => {
    const [visible, setVisible] = useState(false)
    return (
      <Story>
        <UseCase text="">
          <Button
            onPress={() => {
              setVisible(true)
            }}
            title="Show Modal"
          />
          <ImageViewer
            title={"Image title"}
            source={source}
            visible={visible}
            onClose={() => setVisible(true)}
            onPress={() => setVisible(false)}
          />
        </UseCase>
      </Story>
    )
  })
