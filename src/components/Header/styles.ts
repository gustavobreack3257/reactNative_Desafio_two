import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-bottom: 10%;
`;

export const Logo = styled.Image`
width: 82px;
height: 37px;`;

export const Perfil = styled.Image`
height:40px;
width:40px;
margin-Left: 60%`;
export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;
export const BackIcon = styled(CaretLeft).attrs(({theme}) =>({
    size: 32,
    color: theme.COLORS.WHITE
}))``;