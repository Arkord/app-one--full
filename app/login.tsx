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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Page = () => {
	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const auth = getAuth();

	const login = () => {
		signInWithEmailAndPassword(auth, username, password)
		  .then(async (userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert('credenciales correctas!');
			console.log(user.email);
		  })
		  .catch((error) => {
			alert('Error!');
			const errorCode = error.code;
			const errorMessage = error.message;
		  });
	  };

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<Text style={styles.header}>Login</Text>
			<TextInput
				autoCapitalize="none"
				placeholder="admin"
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

			<TouchableOpacity onPress={() => login()} style={styles.button}>
				<Text style={{ color: '#fff' }}>Sign in</Text>
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
export default Page;