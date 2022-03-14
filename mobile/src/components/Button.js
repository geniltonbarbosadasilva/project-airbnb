import { Text, TouchableOpacity, StyleSheet } from "react-native";


export default function TouchableButton({ children, handleSubmit, cancel }) {
	return (
		<TouchableOpacity 
			onPress={handleSubmit} 
			style={{ 
				backgroundColor: cancel ? "#ccc" : '#f05a5b',
				marginTop: cancel ? 10 : 0,
				...styles.button
			}}
		>
			<Text style={styles.buttonText}>{ children }</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 42,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4
	},

	buttonText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	}
});