import { PressableStateCallbackType, StyleProp, ViewStyle } from "react-native";

export type TPressedStyle = (state: PressableStateCallbackType) => StyleProp<ViewStyle>

export enum ButtonMode {
  default,
  flat
}