import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet } from 'react-native';
import WishlistItem from '../components/WishlistItem';
import { useIsFocused } from '@react-navigation/native';
import { loadItems } from '../utils/storage';

export default function HomeScreen({ navigation, route }) {
  const [items, setItems] = useState([]);
  const isFocused = useIsFocused();

  const fetchItems = useCallback(async () => {
    const savedItems = await loadItems();
    setItems(savedItems);
  }, []);

  useEffect(() => {
    if (isFocused || route?.params?.refresh) {
      fetchItems();

      // Nettoyer le param refresh après chargement
      if (route?.params?.refresh) {
        navigation.setParams({ refresh: false });
      }
    }
  }, [isFocused, fetchItems, route?.params?.refresh, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WishlistItem
            item={item}
            onPress={() => navigation.navigate('ItemDetail', { item })}
          />
        )}
        contentContainerStyle={items.length === 0 && styles.emptyList}
        ListEmptyComponent={<Text style={styles.emptyText}>Aucun article</Text>}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItem')}
      >
        <Text style={styles.addButtonText}>Ajouter un article</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  flatList: {
    marginBottom: 20,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#696969', // gris clair
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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
