import React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import InputField from "./InputField"
import { useState } from "@storybook/addons"

const IMAGE = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }

storiesOf("Input field", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => {
    const [source, setSource] = useState<{ uri: string } | null>(null)

    return (
      <Story>
        <UseCase text="With URL">
          <InputField
            source={source}
            onPress={() => {
              source ? setSource(null) : setSource(IMAGE)
            }}
          />
        </UseCase>
      </Story>
    )
  })
