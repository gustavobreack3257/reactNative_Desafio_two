import { TouchableOpacityProps } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";

type props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcons({icon, type = 'PRIMARY', ...rest}: props) {
    return(
        <Container {...rest}>
            <Icon
            name={icon}
            type={type}/>
        </Container>
    );
}