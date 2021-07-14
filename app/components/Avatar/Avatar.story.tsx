/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import Avatar from "./Avatar"
import { View } from "react-native"

const source = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }

storiesOf("Avatar", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => (
    <Story>
      <UseCase text="Circular">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar source={source} size="large" shape="circle" />
          <Avatar source={source} size="medium" shape="circle" />
          <Avatar source={source} size="small" shape="circle" />
        </View>
      </UseCase>
      <UseCase text="Rounded">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar source={source} size="large" shape="round" />
          <Avatar source={source} size="medium" shape="round" />
          <Avatar source={source} size="small" shape="round" />
        </View>
      </UseCase>
      <UseCase text="Squared">
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Avatar source={source} size="large" />
          <Avatar source={source} size="medium" />
          <Avatar source={source} size="small" />
        </View>
      </UseCase>
    </Story>
  ))
