import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MainScreen } from "../screens"

export type PrimaryParamList = {
  main: undefined
}

const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" component={MainScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["main"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
