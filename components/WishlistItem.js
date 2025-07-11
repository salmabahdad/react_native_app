// components/WishlistItem.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function WishlistItem({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} DH</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  price: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '300',
    color: '#666',
  },
});
