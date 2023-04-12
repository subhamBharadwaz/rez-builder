import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { styled, useColorScheme } from "nativewind";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

interface ThemeProps {
  colorScheme: string | undefined;
  toggleColorScheme: () => void;
}

const ThemeToggler: FC<ThemeProps> = ({ colorScheme, toggleColorScheme }) => {
  return (
    <View>
      <StyledPressable onPress={toggleColorScheme}>
        <StyledText
          selectable={false}
          className="transition-all dark:text-white"
        >
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </StyledText>
      </StyledPressable>
    </View>
  );
};

export default ThemeToggler;
