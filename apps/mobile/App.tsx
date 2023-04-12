import "react-native-reanimated";
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { styled, useColorScheme } from "nativewind";
import { MotiImage } from "moti";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

import Button from "./components/Button";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="min-h-full items-center justify-center dark:bg-slate-800 ">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <ThemeToggler
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
      <Button>Hey Guys!</Button>

      <MotiImage
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "timing",
          loop: true,
          duration: 1500,
          delay: 100,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1681202200466-fc11c31f3d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        className="aspect-square h-72 w-full"
      />
    </View>
  );
}
