import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	margin-top: ${ ({ top }) => top }px;
	margin: 0 30px;
	justify-content: center
`;

export const Label = styled.Text`
	font-weight: bold;
	color: #444;
	margin-bottom: 8px;
`;

export const Input = styled.TextInput`
	border: 1px solid #ddd;
	padding: 0 20px;
	font-size: 16px;
	color: #444;
	height: 44px;
	margin-bottom: 20px;
	border-radius: 4px;
`;