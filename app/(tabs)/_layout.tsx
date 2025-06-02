import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70 + insets.bottom,
          borderTopWidth: 1,
          borderTopColor: '#1e1e1e',
          backgroundColor: '#1e1e1e',
          paddingBottom: 5 + insets.bottom,
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