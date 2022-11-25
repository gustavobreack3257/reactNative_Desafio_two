import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native'

import { Header } from '@components/Header';
import { HighLith } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container} from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/loading';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [group, setGroup] = useState<string[]>([])
  const navigation = useNavigation()

  function HandleNewGroups(){
    navigation.navigate('new')
  }

  async function fetchGroup() {
    try{
      setIsLoading(true)

      const data = await groupsGetAll();
      setGroup(data)

    }
    catch(error){
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group});
  }

  useFocusEffect(
    useCallback(() => {
    console.log("useEffect executou")
    fetchGroup()
  },[]));

  return (

      <Container>
        <Header/>


        <HighLith title='Turmas' subtitle='das refeições dentro da dieta.'/>
        <ListEmpty
          message='Refeições'
          />
        <Button title=' + Nova Refeição'
        onPress={HandleNewGroups}
        />
        <ListEmpty message='12.08.2020'/>
    {
      isLoading ? <Loading/> :

        <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard
          title={item}
          onPress={() => handleOpenGroup(item)}
          />
        )}

      showsVerticalScrollIndicator={false}
      />
}
      </Container>

  );
}

