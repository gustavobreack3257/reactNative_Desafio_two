import { Container, Logo, BackButton, BackIcon} from "./styles";
import LogoImage from '@assets/Logo.png'

type props ={
    showBackButton?: boolean;
}
export function Header({ showBackButton = false} : props){
    return(
        <Container>
            {
                showBackButton &&
            <BackButton>
                <BackIcon/>
            </BackButton>
}
            <Logo source={LogoImage}/>
        </Container>
    )
}