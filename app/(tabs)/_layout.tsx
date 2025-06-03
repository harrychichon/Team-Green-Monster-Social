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
          borderTopColor: "#1e1e1e",
          backgroundColor: "#1e1e1e",
          paddingBottom: 5 + insets.bottom,
        },
        tabBarIconStyle: {
          justifyContent: "center",
          width: 0,
          height: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center", // eller 'flex-end' om du vill trycka ner labeln
          alignItems: "center",
          flexDirection: "row", // om du inte vill ha column
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
