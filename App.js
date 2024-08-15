import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store/store';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Shopping' }} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
