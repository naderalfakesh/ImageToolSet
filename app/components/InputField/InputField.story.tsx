import React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import InputField from "./InputField"
import { useState } from "@storybook/addons"

const IMAGE = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"

storiesOf("Input field", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => {
    const [url, setUrl] = useState<string | null>(null)

    return (
      <Story>
        <UseCase text="With URL">
          <InputField
            url={url}
            onPress={() => {
              url ? setUrl(null) : setUrl(IMAGE)
            }}
          />
        </UseCase>
      </Story>
    )
  })
