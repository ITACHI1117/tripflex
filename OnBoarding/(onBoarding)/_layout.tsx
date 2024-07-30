import { Stack } from "expo-router";
import "react-native-reanimated";

export default function OnBoardScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="OnBoardScreen" options={{ headerShown: false }} />
      <Stack.Screen name="SignInOptions" options={{ headerShown: false }} />
      <Stack.Screen name="SignInWithPhone" options={{ headerShown: false }} />
      {/* <Stack.Screen name="OtpScreen" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
