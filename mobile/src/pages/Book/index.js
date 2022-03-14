import React, { useState } from "react";
import { StatusBar, AsyncStorage, Alert } from "react-native";
import { Container, Input, Label } from "./styles";
import TouchableButton from "../../components/Button";

import api from "../../services/api";

export default function Book({ navigation }) {
	const id = navigation.getParam('id');
	const [ date, setDate ] = useState('');

	async function handleSubmit() {
		const user_id = await AsyncStorage.getItem("user");

		api.post(`/spots/${id}/booking`, { date }, { headers: { user_id } })
			.then((response) => {
				Alert.alert("Solicitação enviada!");
		
				navigation.navigate("List");
			});
	}

	return (
		<Container top={StatusBar.currentHeight}>
			<Label>Data de interesse</Label>
			<Input
				placeholder="Qual data voce quer reservar?"
				placeholderTextColor="#999"
				autoCapitalize="none"
				autoCorrect={false}
				value={date}
				onChangeText={setDate}
			/>
			<TouchableButton handleSubmit = { handleSubmit }>Solicitar reserva</TouchableButton>
			<TouchableButton 
				handleSubmit = { () => navigation.navigate("List") } 
				cancel = { true }
			>
				Cancelar
			</TouchableButton>
		</Container>
	);
}