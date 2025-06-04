import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme';

export default function RootLayout() {
	const insets = useSafeAreaInsets();

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					height: 50 + insets.bottom,
					borderTopWidth: theme.size.borderWidth,
					borderTopColor: theme.color.neutralDark,
					backgroundColor: theme.color.neutralDark,
				},
				tabBarLabelStyle: {
					fontSize: theme.font.sm,
					fontWeight: '600',
					color: theme.color.text,
				},
				tabBarIconStyle: {
					justifyContent: 'center',
					width: 0,
					height: 0,
				},
				tabBarItemStyle: {
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
				},
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: () => null,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='posts'
				options={{
					title: 'Posts',
					tabBarIcon: () => null,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='createPost'
				options={{
					title: 'Create Post',
					tabBarIcon: () => null,
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
