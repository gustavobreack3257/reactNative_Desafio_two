import { Container, Icon, Content } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { HighLith } from "@components/HighLight";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
export function NewGroups(){
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
                Alert.alert('Novo Groupo', error.message)
            } else{
                Alert.alert('Novo Grupo','Não foi possível criar um novo grupo.')
                console.log(error);
            }

        }

    }
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>

                <HighLith
                    title="Nova turma"
                    subtitle="crie uma nova turma"
                />
                <Input placeholder="Nome da turma"
                onChangeText={setGroup}/>

                <Button
                title="criar"
                style={{marginTop: 20}}
                onPress={handleNewGroup}/>

            </Content>

        </Container>
    )
}