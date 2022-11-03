import { ButtonIcons } from "@components/ButtonIcons/Index";
import { Container, Name, Icon } from "./styles";

type Props = {
    name: string;
    onRemove: () => void
}

export function PlayerCard({ name, onRemove}: Props){
    return(
        <Container>
            <Icon name="person"/>

            <Name>
                {name}
            </Name>

            <ButtonIcons
                icon="close"
                type="SECONDARY"
                onPress={onRemove}
            />
        </Container>
    );
}