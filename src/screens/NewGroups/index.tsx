import { Container, Icon, Content } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { HighLith } from "@components/HighLight";
export function NewGroups(){
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>

                <HighLith
                    title="Nova turma"
                    subtitle="crie uma nova turma"
                />
                <Input placeholder="Nome da turma"/>
                <Button
                title="criar"
                style={{marginTop: 20}}/>

            </Content>

        </Container>
    )
}