import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../store/CartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart[product.id]);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= Math.floor(rating) ? "star" : "star-o"}
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Rs. {product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <View style={styles.ratingContainer}>
        {renderRatingStars(product.rating.rate)}
        <Text style={styles.ratingText}>({product.rating.count})</Text>
      </View>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.actions}>
        <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
        {cartItem && (
          <View style={styles.quantityControls}>
            <Button title="-" onPress={() => dispatch(decrementQuantity(product.id))} />
            <Text style={styles.quantity}>{cartItem.quantity}</Text>
            <Button title="+" onPress={() => dispatch(incrementQuantity(product.id))} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
