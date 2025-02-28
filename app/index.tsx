import ProductList from '@/components/ProductList';
import { API_URL } from '@/const/api_url';
import { Product } from '@/types/product';
import axios from 'axios';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error al obtener productos", error));
  }, [products]);

  return (
    <View style={styles.container}>
      <ProductList products={products} />
      <TouchableOpacity style={styles.button}>
        <Link href="/AddProductScreen">
          <Text style={styles.buttonText}>Agregar producto</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});


export default HomeScreen;