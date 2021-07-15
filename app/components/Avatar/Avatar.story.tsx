/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import Avatar from "./Avatar"
import { View } from "react-native"

const url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"

storiesOf("Avatar", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="Circular">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar url={url} size="large" shape="circle" />
          <Avatar url={url} size="medium" shape="circle" />
          <Avatar url={url} size="small" shape="circle" />
        </View>
      </UseCase>
      <UseCase text="Rounded">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar url={url} size="large" shape="round" />
          <Avatar url={url} size="medium" shape="round" />
          <Avatar url={url} size="small" shape="round" />
        </View>
      </UseCase>
      <UseCase text="Squared">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar url={url} size="large" />
          <Avatar url={url} size="medium" />
          <Avatar url={url} size="small" />
        </View>
      </UseCase>
    </Story>
  ))
