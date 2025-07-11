// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import EditItemScreen from './screens/EditItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Wishlist' }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Ajouter un Article' }} />
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} options={{ title: 'Détail de l’Article' }} />
        <Stack.Screen name="EditItem" component={EditItemScreen} options={{ title: 'Modifier l’Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
