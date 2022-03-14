import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	margin-top: ${ ({ top }) => top }px;
	margin-bottom: 100px
`;

export const Image = styled.Image`
	height: 32px;
	align-self: center;
	margin-top: 10px;
`;