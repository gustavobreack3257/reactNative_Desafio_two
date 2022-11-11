import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native'

import { Header } from '@components/Header';
import { HighLith } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container} from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';


export function Groups() {
  const [group, setGroup] = useState<string[]>([])
  const navigation = useNavigation()

  function HandleNewGroups(){
    navigation.navigate('new')
  }

  async function fechGroup() {
    try{
      const data = await groupsGetAll();
      setGroup(data)
    }
    catch(error){
      console.log(error)
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group});
  }

  useFocusEffect(
    useCallback(() => {
    console.log("useEffect executou")
    fechGroup()
  },[]));

  return (

      <Container>
        <Header/>

        <HighLith title='Turmas' subtitle='jogue com a sua turma'/>

        <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard
          title={item}
          onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={group.length === 0 && ({flex: 1})}
        ListEmptyComponent={() => (
          <ListEmpty
          message='que tal cadastrar um novo grupo?'/>
          )}
        />
        <Button title='Criar nova turma'
        onPress={HandleNewGroups}
        />
      </Container>

  );
}

