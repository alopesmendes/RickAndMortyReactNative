import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Character from '../entities/Character';
import {CharacterListItem} from './CharacterListItem';
import {useCharacters} from '../core/useCharacters';

const CharacterList = () => {
  const {characters, loading, nextPage} = useCharacters();

  const renderItem = (item: Character) => (
    <CharacterListItem
      id={item.id}
      name={item.name}
      gender={item.gender}
      image={item.image}
      species={item.species}
    />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={characters}
      renderItem={({item}) => renderItem(item)}
      onEndReached={nextPage}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => (
        <View
          style={styles.footer}
          {...(loading && <ActivityIndicator />)}
          {...(!loading && <Text>No more characters to load</Text>)}></View>
      )}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  footer: {
    paddingVertical: 20,
  },
});

export default CharacterList;
