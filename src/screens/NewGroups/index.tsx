import { Container, Content, BackButton, BackIcon, ViewPrime, Title } from "./styles";

import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert, TextInput, View } from "react-native";
import { Button } from "@components/Button";

type props ={
    showBackButton?: boolean;
}
export function NewGroups({showBackButton = false}: props){
    const [group, setGroup] = useState('');


    const navigation = useNavigation();

    async function handleNewGroup(){
        try{
            if(group.trim().length === 0){
                return Alert.alert('Novo grupo', 'Informe o nome da turma.');
            }
            await groupCreate(group);
            navigation.navigate('players',  {group});
        }
        catch(error){
            if(error instanceof AppError){
                Alert.alert('Novo Grupo', error.message)
            } else{
                Alert.alert('Novo Grupo','Não foi possível criar um novo grupo.')
                console.log(error);
            }

        }

    }
    function handleGoBack(){
        navigation.navigate('groups')
    }
    return(

        <Container>
             <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <ViewPrime>
                <Title>Nova Refeição</Title>
            </ViewPrime>

            <Content>
                <View style={{ marginLeft: 20}}>
                    <ListEmpty message='Nome'/>

                    <TextInput style={{borderWidth: 1,
                    height: 48, width: 327,
                    marginTop: 22, borderRadius: 6,
                    padding: 14}} placeholder='Refeição'
                    onChangeText={setGroup}/>

                    <ListEmpty message="Descrição"/>

                    <TextInput style={{borderWidth: 1,
                    height: 120, width: 327, borderRadius: 6}}/>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 20}}>
                    <ListEmpty message="Data"/>

                        <View style={{marginLeft: '40%'}}>
                            <ListEmpty message="hora" />
                        </View>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
                        <TextInput style={{borderWidth: 1,
                    height: 48, width: 153.5, borderRadius: 6}} />

                    <View style={{marginLeft: '8%'}}>
                        <TextInput style={{borderWidth: 1,
                        height: 48, width: 153.5, borderRadius: 6}} />
                    </View>
                </View>
                <View style={{alignItems: "flex-end", justifyContent: 'flex-end', marginTop: '25%', marginLeft: 20, marginRight: 35}}>
                    <Button title="Cadastrar Refeição"
                    onPress={handleNewGroup}/>
                </View>
            </Content>
        </Container>

    )
}