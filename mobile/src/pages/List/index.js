import React, { useState, useEffect } from "react";
import socketio from 'socket.io-client';
import { AsyncStorage, StatusBar, ScrollView, Alert } from "react-native";
import { Container, Image } from "./styles";

import logo from "../../assets/logo.png";
import SpotList from "../../components/SpotList";

export default function List() {
	const [ techs, setTechs ] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem('user').then(user_id => {
			const socket = socketio('http://192.168.0.10:8000', { query: { user_id } });

			socket.on('booking_response', booking => {
				Alert.alert(`Sua reserva em ${booking.spot.company} foi ${booking.approved? 'aprovada' : 'reprovada'}`);
			});
		})
	}, []);

	useEffect(() => {
		AsyncStorage.getItem('techs').then(storagedTechs => {
			const arrayTechs = storagedTechs.split(',').map(tech => tech.trim());
			setTechs(arrayTechs);
		})
	}, []);

	return (
		<Container top={StatusBar.currentHeight}>
			<Image 
				source={logo}
				style={{ resizeMode: "contain" }}
			/>
			<ScrollView>
				{ techs.map(tech => <SpotList key={tech} tech={tech} />) }
			</ScrollView>
		</Container>
	);
}