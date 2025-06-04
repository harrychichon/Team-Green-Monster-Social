import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SocialContextProvider from './contexts/SocialContext';

export default function RootLayout() {
	return (
		<SocialContextProvider>
			<SafeAreaProvider>
				<Stack>
					<Stack.Screen
						name='createPost'
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='index'
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='posts'
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='+not-found'
						options={{ headerShown: false }}
					/>
				</Stack>
			</SafeAreaProvider>
		</SocialContextProvider>
	);
}
