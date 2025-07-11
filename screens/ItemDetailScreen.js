// screens/ItemDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';
import { deleteItem } from '../utils/storage';

export default function ItemDetailScreen({ route, navigation }) {
  const { item } = route.params;

  const handleDelete = () => {
    console.log('handleDelete appelé'); // ← test
  
    Alert.alert(
      'Supprimer',
      'Voulez-vous vraiment supprimer cet article ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            console.log('Suppression confirmée'); // ← test
            await deleteItem(item.id);
            navigation.goBack();
          },
        },
      ]
    );
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <Text style={styles.value}>{item.name}</Text>

      <Text style={styles.label}>Description :</Text>
      <Text style={styles.value}>{item.description || 'Aucune'}</Text>

      <Text style={styles.label}>Prix estimé :</Text>
      <Text style={styles.value}>{item.price} DH</Text>

      {item.url ? (
        <Button title="Voir le produit" onPress={() => Linking.openURL(item.url)} />
      ) : null}

      <Button title="Modifier" color="#696969" onPress={() => navigation.navigate('EditItem', { item })} />
      <View style={{ marginTop: 10 }}>
        <Button title="Supprimer" color="#696969" onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginBottom: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#d3d3d3', // gris clair
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#333333', // texte gris foncé pour contraste
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
