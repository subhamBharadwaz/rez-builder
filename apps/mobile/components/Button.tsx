import React from "react";
import { Text, View } from "react-native";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text className="my-10 bg-slate-800 px-6 py-2 text-xl text-slate-200 shadow-sm dark:bg-slate-200 dark:text-slate-800">
        {children}
      </Text>
    </View>
  );
};

export default Button;
