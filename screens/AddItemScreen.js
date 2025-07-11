// screens/AddItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { saveItem } from '../utils/storage';
import { v4 as uuidv4 } from 'uuid';

export default function AddItemScreen({ navigation }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async () => {
    if (!name || !price) {
      Alert.alert('Erreur', 'Le nom et le prix sont obligatoires.');
      return;
    }

    const newItem = {
      id: uuidv4(),
      name,
      description: desc,
      price: parseFloat(price),
      url,
    };

    await saveItem(newItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nom *"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={setDesc}
        value={desc}
      />
      <TextInput
        placeholder="Prix estimé *"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setPrice}
        value={price}
      />
      <TextInput
        placeholder="URL du produit"
        style={styles.input}
        onChangeText={setUrl}
        value={url}
      />
      <Button title="Ajouter" color="#696969" onPress={handleSubmit} />
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
