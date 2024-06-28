import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import LoginScreen from './login';
import { AuthProvider, useAuth } from '../context/AuthContext';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { authState } = useAuth();
	const segments = useSegments();
	const router = useRouter();


  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    const inAuthGroup = segments[0] === '(tabs)';
    console.log('group--- ', inAuthGroup);

		if (!authState?.authenticated && inAuthGroup) {
			router.replace('/registro');
		} else if (authState?.authenticated === true) {
			router.replace('/(tabs)');
		}

  }, [loaded, authState]);

  // if (!loaded) {
  //   //return null;
  //   return <Slot />;
  // }

  if(authState?.authenticated) {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='registro'>
          <Stack.Screen name="login"   options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    );
  }
  else {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='registro'>
          <Stack.Screen name="login"   options={{ headerShown: false }} />
          <Stack.Screen name="registro"   options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    );
  }
  
}

const RootLayoutNav = () => {
	return (
		<AuthProvider>
			<RootLayout />
		</AuthProvider>
	);
};

export default RootLayoutNav;