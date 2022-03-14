import React, { useState, useEffect } from "react";
import { Image, Platform, AsyncStorage } from "react-native";
import { Container, Label, Form, Input } from "./styles";

import TouchableButton from "../../components/Button";
import api from "../../services/api"

import logo from '../../assets/logo.png'

export default function Login({ navigation }) {
	const [email, setEmail] = useState('');
	const [techs, setTechs] = useState('');

	useEffect(() => {
		AsyncStorage.getItem('user').then((user) => {
			if (user) {
				navigation.navigate('List');
			}
		})
	}, []);

	async function handleSubmit() {
		const response = await api.post("/sessions", { email });
		const { _id } = response.data;

		await AsyncStorage.setItem('user', _id);
		await AsyncStorage.setItem('techs', techs);

		navigation.navigate('List');
	}

	return (
		<Container
			behavior="padding"
			enabled={Platform.OS === 'ios'}
		>
			<Image source={logo}></Image>
			<Form>
				<Label>Seu email *</Label>
				<Input
					placeholder="Seu email"
					placeholderTextColor="#999"
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					value={email}
					onChangeText={setEmail}
				/>
				<Label>Tecnologias *</Label>
				<Input
					placeholder="Tecnologias de interesse"
					placeholderTextColor="#999"
					autoCapitalize="words"
					autoCorrect={false}
					value={techs}
					onChangeText={setTechs}
				/>
				<TouchableButton handleSubmit={handleSubmit}>Encontrar Spots</TouchableButton>
			</Form>
		</Container>
	);
}