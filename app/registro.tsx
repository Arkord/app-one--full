import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
    Appearance
} from 'react-native';
import "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';

const Registro = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const auth = getAuth();

	const { onLogin } = useAuth();

	const registrarse = async () => {
		const auth = getAuth();
		
		createUserWithEmailAndPassword(auth, username, password)
			.then((userCredential) => {
				const user = userCredential.user;
				alert("El usuario se ha creado correctamente!");
				router.replace('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				alert(errorMessage);
			});
		
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<Text style={styles.header}>Pantalla de registro</Text>
			<TextInput
				autoCapitalize="none"
				placeholder="email"
				value={username}
				onChangeText={setUsername}
				style={styles.inputField}
			/>
			<TextInput
				placeholder="password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.inputField}
			/>

			<TouchableOpacity onPress={() => registrarse()} style={styles.button}>
				<Text style={{ color: '#fff' }}>Registrarse</Text>
			</TouchableOpacity>

		</KeyboardAvoidingView>
	);
};

const colorScheme = Appearance.getColorScheme();
let fontColor = "black"
if (colorScheme === 'dark') {
  fontColor = "white";
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingHorizontal: '20%',
		justifyContent: 'center',
		backgroundColor: '#000000'
	},
	header: {
        color: fontColor,
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 40
	},
	inputField: {
        color: fontColor,
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 10
	},
	button: {
		marginVertical: 15,
		alignItems: 'center',
		backgroundColor: '#111233',
		padding: 12,
		borderRadius: 4
	}
});
export default Registro;