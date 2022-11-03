import { useState } from 'react';

import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { HighLith } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container} from './styles';
export function Groups() {
  const [group, setGroup] = useState<string[]>([])


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
          />
        )}
        contentContainerStyle={group.length === 0 && ({flex: 1})}
        ListEmptyComponent={() => (
          <ListEmpty
          message='que tal cadastrar um novo grupo?'/>
          )}
        />
        <Button title='Criar nova turma'
        //onPress={HandleNewGroups}
        />
      </Container>


  );
}

