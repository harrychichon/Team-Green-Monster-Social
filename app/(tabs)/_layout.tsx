import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../theme";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70 + insets.bottom,
          borderTopWidth: 1,
          borderTopColor: theme.color.background,
          backgroundColor: theme.color.background,
        },
        tabBarIconStyle: {
          justifyContent: "center",
          width: 0,
          height: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: "Posts",
          tabBarIcon: () => null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="createPost"
        options={{
          title: "Create Post",
          tabBarIcon: () => null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
