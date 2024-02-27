import {Image, StyleSheet, Text, View} from 'react-native';

type CharacterItem = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  url: string;
  created: string;
  image: string;
};

export const CharacterListItem = (character: CharacterItem) => {
  return (
    <View key={character.id} style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
      <View style={styles.column}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.subtitle}>{character.gender}</Text>
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
    padding: 16,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // to make it circular, adjust according to your preference
    marginEnd: 16,
  },
});
