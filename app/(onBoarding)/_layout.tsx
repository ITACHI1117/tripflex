import { Stack } from "expo-router";
import "react-native-reanimated";

export default function OnBoardScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="OnBoardingScreenOne"
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
