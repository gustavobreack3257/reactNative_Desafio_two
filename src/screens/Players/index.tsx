
import {Container, BackButton, BackIcon, Content, Title, ViewPrime} from './styles'
import { ListEmpty } from '@components/ListEmpty'
import { Alert, FlatList, TextInput } from 'react-native'
import { ButtonIcons } from '@components/ButtonIcons/Index'
import React, { useState, useEffect, useRef } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { playersAddByGroup } from '@storage/player/playersAddByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '@storage/group/groupRemoveByName'
import { groupsGetAll } from '@storage/group/groupsGetAll'

type RouteParams ={
    group: string
}

export function Players(){
    const [isLoading, setIsLoading] = useState(true);
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const navigation = useNavigation()
    const route = useRoute();
    const {group} = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null)
    async function  handleAddPlayer() {
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar');
        }
        const newPlayer = {
            name: newPlayerName,
            team,
        }
        try{
            await playersAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur()
            setNewPlayerName('')
            fetchPlayersByTeam();
        }catch(error){

            if(error instanceof AppError){
                Alert.alert('Nova Pessoa', error.message)
            }
            else{
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possível adicionar')
            }
        }
    }

    async function fetchPlayersByTeam(){
        try {
            setIsLoading(true)

            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam);

        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas')
        } finally {
            setIsLoading(false);
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert('Remover pessoa', 'Não foi possível remover o participante.')
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups')
        } catch (error) {
            console.log(error);
            Alert.alert('Remover grupo', 'Não foi possível remover o grupo')

        }
    }

    async function handleGroupRemove(){
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                { text: 'Não', style: 'cancel'},
                { text: 'Sim', onPress: () => groupRemove()}
            ]
        )
    }

    function handleGoBack(){
        navigation.navigate('groups')
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])

    return(
        <Container>
             <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <ViewPrime>
                <Title>Refeição</Title>
            </ViewPrime>
            <Content></Content>
        </Container>
    )

}