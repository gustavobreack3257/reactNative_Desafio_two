import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./styles";

type props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = true, ...rest}: props){
    return(
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}