import {Image, StyleSheet, Text, View} from 'react-native';

type CharacterItem = {
  id: number;
  name: string;
  gender: string;
  image: string;
  species: string;
};

export const CharacterListItem = (character: CharacterItem) => {
  return (
    <View key={character.id} style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
      <View style={styles.column}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {character.name}
        </Text>
        <Text style={styles.subtitle}>
          {character.species} - {character.gender}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100, // to make it circular, adjust according to your preference
    marginEnd: 16,
    marginStart: 8,
  },
});
