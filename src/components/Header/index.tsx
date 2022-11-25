import { Container, Logo, BackButton, BackIcon, Perfil} from "./styles";
import LogoImage from '@assets/Logo.png'
import LogoPerfil from '@assets/Ellipse.png'
import { useNavigation } from "@react-navigation/native";

type props ={
    showBackButton?: boolean;
}
export function Header({ showBackButton = false} : props){
    const navigation = useNavigation();

    function HandleGoBack(){
         navigation.navigate('groups')
    }
    return(
        <Container>
            {
                showBackButton &&
            <BackButton onPress={HandleGoBack}>
                <BackIcon/>
            </BackButton>
        }
            <Logo source={LogoImage}/>
            <Perfil source={LogoPerfil}/>

        </Container>
    )
}