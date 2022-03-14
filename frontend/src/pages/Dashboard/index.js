import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import socketio from "socket.io-client";
import api from "../../services/api";

import './style.css';

export default function Dashboard() {
	const [ spots, setSpots ] = useState([]);
	const [ requests, setRequests ] = useState([]);

	const user_id = localStorage.getItem('user');
	
	const socket = useMemo( () => socketio("http://localhost:8000", { 
		transports : ['websocket'],
		query: { user_id }
	}), [user_id]);

	useEffect(() => {
		socket.on('booking_request', data => setRequests([...requests, data]));
	}, [requests, socket]);

	useEffect(() => {
		const user_id = localStorage.getItem('user');
		api.get('/dashboard', {
			headers: { user_id }
		}).then((response) => {
			setSpots(response.data);
		});
	}, []);

	async function handleAccept(id) {
		await api.post(`/bookings/${id}/approvals`);

		setRequests(requests.filter(request => request._id !== id));
	}

	async function handleReject(id) {
		await api.post(`/bookings/${id}/rejections`);

		setRequests(requests.filter(request => request._id !== id));
	}

	return (
		<>
			<ul className="notifications">
				{requests.map( request => (
					<li key={request._id}>
						<p>
							<strong>{request.user.email}</strong> esta solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
						</p>
						<button className="accept" onClick={ () => handleAccept(request._id) }>Aceitar</button>
						<button className="reject" onClick={ () => handleReject(request._id) }>Rejeitar</button>
					</li>
				))}
			</ul>

			<ul className="spot-list">
				{ spots.map((spot) => (
					<li key={spot._id}>
						<header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
						<strong>{spot.company}</strong>
						<span>{spot.price ? `R$ ${spot.price}/dia` : 'FREE'}</span>
					</li>
				)) }
			</ul>
			<Link to="/new">
				<button className="btn">Cadastrar novo Spot</button>
			</Link>
		</>
	);
}
