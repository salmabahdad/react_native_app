// screens/EditItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { updateItem } from '../utils/storage';

export default function EditItemScreen({ route, navigation }) {
  const { item } = route.params;
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);
  const [price, setPrice] = useState(String(item.price));
  const [url, setUrl] = useState(item.url);

  const handleUpdate = async () => {
    if (!name || !price) {
      Alert.alert('Erreur', 'Le nom et le prix sont obligatoires.');
      return;
    }

    const updated = {
      ...item,
      name,
      description: desc,
      price: parseFloat(price),
      url,
    };

    await updateItem(updated);
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={desc} onChangeText={setDesc} placeholder="Description" />
      <TextInput style={styles.input} value={price} keyboardType="numeric" onChangeText={setPrice} />
      <TextInput style={styles.input} value={url} onChangeText={setUrl} placeholder="URL" />
      <Button title="Enregistrer" color="#696969" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});
