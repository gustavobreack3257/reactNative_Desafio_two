import { Container, Icon, Content } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { HighLith } from "@components/HighLight";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
export function NewGroups(){
    const [group, setGroup] = useState('');


    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('players',  {group});
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
                onChangeText={text => setGroup(text)}/>

                <Button
                title="criar"
                style={{marginTop: 20}}
                onPress={handleNewGroup}/>

            </Content>

        </Container>
    )
}